import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "./MapContainer.module.css";
function MapContainer({center}) {
  return (
    <>
      <Map
        center={{ lat: 37.3854, lng: 126.6618 }}
        style={{ width: "100%", height: "100%" }}
        level="7"
      >
        <MapMarker position={{ lat: 37.3854, lng: 126.6618 }}  >
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
        <MapMarker position={{ lat: 37.3674, lng: 126.7388 }}  >
          <div style={{ color: "#000" }}>한빛 운전전문학원</div>
        </MapMarker>
        <MapMarker position={{ lat: 37.3704, lng: 126.7378 }}  >
          <div style={{ color: "#000" }}>e현대 운전전문학원</div>
        </MapMarker>
        <MapMarker position={{ lat: 37.3984, lng: 126.7198 }}  >
          <div style={{ color: "#000" }}>동아 운전전문학원</div>
        </MapMarker>
        <MapMarker position={{ lat: 37.3909, lng: 126.7138 }}  >
          <div style={{ color: "#000" }}>인기 운전전문학원</div>
        </MapMarker>
      </Map>
    </>
  );
}

export default MapContainer;
