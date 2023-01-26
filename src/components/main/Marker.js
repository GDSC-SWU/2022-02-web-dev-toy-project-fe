import { useEffect, useRef, useState } from "react";
import { MarkerF } from "@react-google-maps/api";
import styles from "./Marker.module.css";

// css color properties for markers
const maincolor = getComputedStyle(document.documentElement).getPropertyValue(
  "--main-color"
);

export default function Marker({
  isFound,
  currentCategory,
  marker,
  i,
  onHandleClick,
  isSelected,
}) {
  const markerRef = useRef(null);
  const count = marker.count;
  //console.log(`${marker.place}: ${count}`);
  const opacityLevel = count > 10 ? 1 : count / 10.0;

  const markerLabelFactory = () => ({
    className: `styles.marker_${i}`,
    text: `${count}`,
    fontSize: "15px",
    color: `${isSelected ? (isFound ? maincolor : "#16161D") : "#ffffff"}`,
  });

  const markerIconFactory = () => ({
    path: "M-22,0a22,22 0 1,0 44,0a22,22 0 1,0 -44,0",
    height: 44,
    width: 44,
    fillOpacity: parseFloat(`${isSelected ? 1 : opacityLevel}`),
    strokeOpacity: parseFloat(`${isSelected ? 1 : opacityLevel / 10.0}`),
    fillColor: `${isSelected ? "#ffffff" : isFound ? maincolor : "#16161D"}`,
    strokeColor: `${isFound ? maincolor : "#16161D"}`,
    strokeWeight: 2,
  });

  const handleOnLoad = (markerInstance) => {
    markerRef.current = markerInstance;
  };

  const onMarkerClick = () => {
    onHandleClick(i, marker.posts);
    console.log(marker);
    markerRef.current.setIcon(markerIconFactory());
    markerRef.current.setLabel(markerLabelFactory());
  };

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setIcon(markerIconFactory());
      markerRef.current.setLabel(markerLabelFactory());
    }
  }, [isSelected, isFound, currentCategory]);

  return (
    <MarkerF
      onLoad={(marker) => {
        handleOnLoad(marker);
      }}
      label={markerLabelFactory()}
      position={{ lat: marker.loc.lat, lng: marker.loc.lng }}
      noClustererRedraw={false}
      onClick={() => onMarkerClick()}
      icon={markerIconFactory()}
    />
  );
}
