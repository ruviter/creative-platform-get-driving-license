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
      </Map>
    </>
  );
}

export default MapContainer;
