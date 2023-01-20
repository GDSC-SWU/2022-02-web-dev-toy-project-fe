import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import styles from "./MainMap.module.css";
import { ReactComponent as CurrentLoc } from "../../assets/images/currentLoc_icon.svg";
import { ReactComponent as CurrentLocSelected } from "../../assets/images/currentLoc_icon_selected.svg";
import { useLocation } from "react-router-dom";
import sample_data from "../../data/items_sample_data.json";
import swu_place_data_sample from "../../data/swu_place_data_sample.json";
import blue from "../../assets/images/clusterer_images/blueCircle.svg";
import black from "../../assets/images/clusterer_images/blackCircle.svg";

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
  console.log(isFound);
  // 페이지에 접속한 상태에서 다시 홈 버튼 클릭했을 때도 새로고침 되도록
  const location = useLocation();
  useEffect(() => {
    if (currentPath === location.pathname) {
      window.location.reload();
    }

    currentPath = location.pathname;
  }, [location]);

  const mapRef = useRef(null);
  const clustererRef = useRef(null);
  const markerRef = useRef(null);
  const [center, setCenter] = useState({
    // (기본) 서울여자대학교 좌표
    lat: 37.62814,
    lng: 127.09046,
  });
  const [userLoc, setUserLoc] = useState(center);
  const [isCurrent, setIsCurrent] = useState(false);
  const { geolocation } = navigator;

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

  // clusterer
  // cluster 초기화
  const cluster_data = [];
  swu_place_data_sample.data.map((item) => {
    cluster_data.push({
      place: item.place,
      loc: { lat: item.lat, lng: item.lng },
      count: 0,
      posts: [],
    });

    return cluster_data;
  });
  let temp = JSON.parse(JSON.stringify(cluster_data));
  const [markers, setMarkers] = useState(temp);

  useEffect(() => {
    // search type이나 현재 카테고리가 변경될 경우 클러스터러 Repaint
    console.log(clustererRef?.current);
    console.log(markerRef?.current);
    if (map) {
      // hide markers
      markers.length = 0;
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
        setMarkers(null);
      }
      // delete markers
      addMarkers(map);
    }
    setMap(null);
    addMarkers();
    clustererRef.current?.repaint();
  }, [isFound, currentCategory]);

  function addMarkers() {
    const result = markers;

    result.map((item) => {
      const i = item;
      i.count = 0;
      i.posts = [];

      return result;
    });

    setMarkers(result);

    let flag; // 분류 위한 플래그
    if (isFound && currentCategory === "전체") {
      flag = 0;
    } else if (isFound && currentCategory !== "전체") {
      flag = 1;
    } else if (!isFound && currentCategory === "전체") {
      flag = 2;
    } else if (!isFound && currentCategory !== "전체") {
      flag = 3;
    }

    switch (flag) {
      case 0: // 습득, 카테고리 전체
        // 게시물 장소에 따라 cluster state의 count 증가 + postId 배열에 추가
        sample_data.data.map((item) => {
          if (item.status === "found" && currentCategory === "전체") {
            const i = result.find((e) => {
              return e.place === item.place;
            });

            if (i) {
              i.count++;
              i.posts = [...i.posts, item.postId];
            }
          }

          return result;
        });
        break;
      case 1: // 습득, 카테고리 선택
        sample_data.data.map((item) => {
          if (item.status === "found" && item.tag === currentCategory) {
            const i = result.find((e) => {
              return e.place === item.place;
            });

            if (i) {
              i.count++;
              i.posts = [...i.posts, item.postId];
            }
          }

          return result;
        });
        break;
      case 2: // 분실, 카테고리 전체
        sample_data.data.map((item) => {
          if (item.status === "lost" && currentCategory === "전체") {
            const i = result.find((e) => {
              return e.place === item.place;
            });

            if (i) {
              i.count++;
              i.posts = [...i.posts, item.postId];
            }
          }

          return result;
        });
        break;
      case 3: // 분실, 카테고리 선택
        sample_data.data.map((item) => {
          if (item.status === "lost" && item.tag === currentCategory) {
            const i = result.find((e) => {
              return e.place === item.place;
            });

            if (i) {
              i.count++;
              i.posts = [...i.posts, item.postId];
            }
          }

          return result;
        });
        break;
      default:
        break;
    }

    setMarkers(result);

    console.log(markers);
  }

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
            {markers.map((marker, i) => (
              <MarkerF
                className={styles.marker}
                onLoad={(marker) => {
                  markerRef.current = marker;
                }}
                key={i}
                position={{ lat: marker.loc.lat, lng: marker.loc.lng }}
                noClustererRedraw={false}
                icon={{
                  url: `${isFound ? blue : black}`,
                  height: 44,
                  width: 44,
                }}
              />
            ))}
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
