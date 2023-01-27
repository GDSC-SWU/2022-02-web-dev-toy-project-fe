import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
import API from "../../api/API";
import { useLocation } from "react-router-dom";
import styles from "./MainMap.module.css";
import { ReactComponent as CurrentLoc } from "../../assets/images/currentLoc_icon.svg";
import { ReactComponent as CurrentLocSelected } from "../../assets/images/currentLoc_icon_selected.svg";
import Marker from "./Marker.js";
import ItemCarousel from "./itemCarousel/ItemCarousel";
import postList from "../../data/samples/sample_data.json";
import swu_place_data_sample from "../../data/swu_place_data_sample.json";

// google map options
const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const mapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  zoomControl: false,
  zoom: 18,
  minZoom: 16,
};

let currentPath = "";

function MainMap({ isFound, currentCategory }) {
  // API
  //const [postList, setPostList] = useState();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await API.get("/post");
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, []);

  const mapRef = useRef(null);
  const [center, setCenter] = useState({
    // (기본) 서울여자대학교 좌표
    lat: 37.62814,
    lng: 127.09046,
  });
  const [userLoc, setUserLoc] = useState(center);
  const [isCurrent, setIsCurrent] = useState(false);
  const { geolocation } = navigator;

  // 페이지에 접속한 상태에서 다시 홈 버튼 클릭했을 때도 새로고침 되도록
  const location = useLocation();
  useEffect(() => {
    if (currentPath === location.pathname) {
      window.location.reload();
    }

    currentPath = location.pathname;
  }, [location]);

  // google map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // 맵 드래그 시 (맵 위치 이동) 현위치 벗어남 감지
  const onMapDragHandle = () => {
    setIsCurrent(false);
  };

  // geolocation options
  const handleSuccess = (pos) => {
    const currentLoc = {
      lat: parseFloat(pos.coords.latitude),
      lng: parseFloat(pos.coords.longitude),
    };

    setUserLoc(currentLoc);
    setCenter(currentLoc);

    // 지도 위치와 실제 사용자 위치가 같은 경우
    if (mapRef.current.props.center === userLoc) {
      setIsCurrent(true);
      mapRef.current.state.map.zoom = 18;
    }
  };

  const handleError = (error) => {
    console.log(error.message);
  };

  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
  };

  // 현위치 버튼 클릭 시
  const onCurrentLocClick = () => {
    if (!geolocation) {
      console.log("Geolocation is not supported.");
      return;
    }
    geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      geolocationOptions
    );
  };

  const place_data = [];
  swu_place_data_sample.data.map((item) => {
    place_data.push({
      place: item.place,
      loc: { lat: item.lat, lng: item.lng },
      count: 0,
      posts: [],
    });

    return place_data;
  });

  const temp = JSON.parse(JSON.stringify(place_data));
  const temp2 = JSON.parse(JSON.stringify(place_data));

  const [foundMarkers, setFoundMarkers] = useState(temp);
  const [lostMarkers, setLostMarkers] = useState(temp2);

  useEffect(() => {
    addMarkers();
  }, [isFound, currentCategory]);

  function addMarkers() {
    const foundResult = [...foundMarkers];
    const lostResult = [...lostMarkers];

    // Remove markers before adding
    for (let i = 0; i < foundResult.length; i++) {
      foundResult[i].count = 0;
      foundResult[i].posts = [];
      lostResult[i].count = 0;
      lostResult[i].posts = [];
    }

    if (currentCategory === "전체") {
      // 카테고리 미선택 시
      postList.data.map((item) => {
        if (item.postStatus === "found") {
          const i = foundResult.findIndex((e) => {
            return e.place === item.place;
          });

          if (i >= 0) {
            foundResult[i].count++;
            foundResult[i].posts = [...foundResult[i].posts, item.postId];
          }
        } else if (item.postStatus === "lost") {
          const i = lostResult.findIndex((e) => {
            return e.place === item.place;
          });

          if (i >= 0) {
            lostResult[i].count++;
            lostResult[i].posts = [...lostResult[i].posts, item.postId];
          }
        }

        return foundResult;
      });
    } else {
      // 카테고리 선택 시
      postList.data.map((item) => {
        if (item.postStatus === "found" && currentCategory === item.tag) {
          const i = foundResult.findIndex((e) => {
            return e.place === item.place;
          });

          if (i >= 0) {
            foundResult[i].count++;
            foundResult[i].posts = [...foundResult[i].posts, item.postId];
          }
        } else if (item.postStatus === "lost" && currentCategory === item.tag) {
          const i = lostResult.findIndex((e) => {
            return e.place === item.place;
          });

          if (i >= 0) {
            lostResult[i].count++;
            lostResult[i].posts = [...lostResult[i].posts, item.postId];
          }
        }

        return foundResult;
      });
    }

    setFoundMarkers(foundResult);
    setLostMarkers(lostMarkers);
  }

  const [selectedMarker, setSelectedMarker] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);

  const onHandleClick = (idx, posts) => {
    const markerArr = Array(foundMarkers.length).fill(false);
    markerArr[idx] = true;
    setSelectedMarker(markerArr);
    setSelectedPosts(posts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapOptions}
            ref={mapRef}
            onDragStart={onMapDragHandle}
          >
            <div className={styles.markers}>
              {isFound
                ? foundMarkers
                    .filter((marker) => marker.count > 0)
                    .map((marker, i) => (
                      <Marker
                        key={i}
                        isFound={isFound}
                        currentCategory={currentCategory}
                        marker={marker}
                        i={i}
                        onHandleClick={onHandleClick}
                        isSelected={selectedMarker[i]}
                      />
                    ))
                : lostMarkers
                    .filter((marker) => marker.count > 0)
                    .map((marker, i) => (
                      <Marker
                        key={i}
                        isFound={isFound}
                        currentCategory={currentCategory}
                        marker={marker}
                        i={i}
                        onHandleClick={onHandleClick}
                        isSelected={selectedMarker[i]}
                      />
                    ))}
            </div>
            <div className={styles.itemCarousel}>
              {selectedMarker.findIndex((item) => item === true) !== -1 && (
                <ItemCarousel posts={selectedPosts} />
              )}
            </div>
          </GoogleMap>
        )}
      </div>
      <div className={styles.currentLocContainer}>
        <div className={styles.currentLocWrapper} onClick={onCurrentLocClick}>
          {isCurrent ? (
            <CurrentLocSelected className={styles.currentLoc} />
          ) : (
            <CurrentLoc className={styles.currentLoc} />
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainMap);
