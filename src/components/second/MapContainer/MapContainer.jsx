import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./MapContainer.module.css";
import { list } from "../incheonSchoolList/list";
const { kakao } = window;

function MapContainer({ center }) {
  const [currentL, setCurrentL] = useState(defaultLocation);
  const [currentMarker, setCurrentMarker] = useState({})
  const [map, setMap] = useState({});
  useEffect(() => {
    createMap(setMap, currentL);
  }, []);
  useEffect(() => {
    // getCurrentLocation(map, setCurrentL);
    // createCurrentMarker(map, currentL, setCurrentMarker);
    // schoolMarkers(map);
    // searchMap("내손로 14", map);
  }, [map]);
  return (
    <>
      <div
        id="myMap"
        style={{ width: "100%", height: "100%" }}
        className={styles.con}
      ></div>
    </>
  );
}


const createMap = (setMap, currentL) => {
  const container = document.getElementById("myMap");
  const options = {
    center: currentL.kakaoLatLng,
    level: 6,
  };
  const map = new kakao.maps.Map(container, options);
  setMap(map);
};

const getCurrentLocation = (setCurrentL) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const kakaoLatLng = new kakao.maps.LatLng(lat, lon);
      
      setCurrentL({ lat, lon, kakaoLatLng });
    });
  }
};

const createCurrentMarker = (map, currentL, setCurrentMarker) => {
  const locPosition = new kakao.maps.LatLng(currentL.lat, currentL.lon);
  const marker = new kakao.maps.Marker({
    position: locPosition,
    title: '현 위치',
    draggable: true,
    map:map,
  });
  setCurrentMarker(marker)
};

const schoolMarkers = (map) => {
  Object.keys(list).map((name) => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(name, placesSearchCB);
    
    function placesSearchCB(data, status, pagination) {
      const iwContent = `<div>${name}</div>`;
      const infowindow = new kakao.maps.InfoWindow({ content: iwContent });
      
      if (status === kakao.maps.services.Status.OK) {
        const markerPosition = new kakao.maps.LatLng(data[0].y, data[0].x);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          title: name,
          image: markerImage,
        });
        marker.setMap(map);
        infowindow.open(map, marker);
      }
    }
  });
};

const searchMap = (keyword, map) => {
  const geocoder = new kakao.maps.services.Geocoder();
  
  geocoder.addressSearch(keyword, (result, status) => {
    // 검색결과 마크 띄우기
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      
      const marker = new kakao.maps.Marker({ map: map, position: coords });
      
      const infowindow = new kakao.maps.InfoWindow({
        content:
        '<div style="width:150px;text-align:center;padding:6px 0;">우리 집</div>',
      });
      infowindow.open(map, marker);
    }
  });
};

const imageSrc =
"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
const imageSize = new kakao.maps.Size(24, 35);
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

const defaultLocation = { lat:37.3817847, lon:126.6677834, kakaoLatLng : new kakao.maps.LatLng(37.3817847, 126.6677834)};

export default MapContainer;
