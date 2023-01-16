import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styles from "./MainMap.module.css";
import { ReactComponent as CurrentLoc } from "../../assets/images/currentLoc_icon.svg";
import { ReactComponent as CurrentLocSelected } from "../../assets/images/currentLoc_icon_selected.svg";

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
};

function MainMap() {
  const mapRef = useRef(null);
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

    console.log(mapRef.current);
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
            <div className={styles.itemContainer}></div>
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
