import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./MapContainer.module.css";
import { list } from "../incheonSchoolList/list";
const { kakao } = window;

function MapContainer({ setDisList }) {
  const [map, setMap] = useState({});
  const [currentL, setCurrentL] = useState(defaultLocation);
  const [currentMarker, setCurrentMarker] = useState({});
  // const [disList, setDisList] = useState({ defaultDisList });
  useEffect(() => {
    createMap(setMap, setCurrentL, setCurrentMarker, setDisList);
  }, []);
  useEffect(()=>{
    const dis = [];
      Object.keys(list).map((name) => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(name, placesSearchCB, {
          size: 1,
          location:currentL,
        });
    
        function placesSearchCB(data, status, pagination) {
          dis.push({ name: name, d: data[0].distance });
          dis.sort((a, b) => a.d - b.d);
        }
      });
      setDisList(dis);
  },[currentL])

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

const createMap = (setMap, setCurrentL, setCurrentMarker, setDisList) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const kakaoLatLng = new kakao.maps.LatLng(lat, lon);
      setCurrentL(kakaoLatLng);


      // create map
      const container = document.getElementById("myMap");
      const options = {
        center: kakaoLatLng,
        level: 6,
      };
      const map = new kakao.maps.Map(container, options);


      // create current marker 
      const dragiwContent = `<div style="padding:2px; font-size:0.8rem;">드래그 해보세요!</div>`;
      const dragInfowindow = new kakao.maps.InfoWindow({ content: dragiwContent });
    
      const currentMarker = new kakao.maps.Marker({
        position: kakaoLatLng,
        title: "현 위치",
        draggable: true,
        map: map,
        image:markerImage
      });
      kakao.maps.event.addListener(currentMarker,'dragend',()=>{
        setCurrentL(currentMarker.getPosition())
        dragInfowindow.open(map,currentMarker)
      })
      kakao.maps.event.addListener(currentMarker,'dragstart',()=>{
        dragInfowindow.close(map,currentMarker)
      })
      dragInfowindow.open(map,currentMarker)
      setCurrentMarker(currentMarker);
      

      // create distance basic list 
      const dis = [];
      Object.keys(list).map((name) => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(name, placesSearchCB, {
          x: lon,
          y: lat,
          size: 1,
        });
    
        function placesSearchCB(data, status, pagination) {
          dis.push({ name: name, d: data[0].distance });
          dis.sort((a, b) => a.d - b.d);
        }
      });
      setDisList(dis);


      // create school marker
      Object.keys(list).map((name) => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(name, placesSearchCB, {
          x: lon,
          y: lat,
          size: 1,
        });
    
        function placesSearchCB(data, status, pagination) {
          const iwContent = `<div style="padding:5px; font-size:0.8rem;">${name.slice(0,-6) + '학원'}</div>`;
          const infowindow = new kakao.maps.InfoWindow({ content: iwContent });
    
          if (status === kakao.maps.services.Status.OK) {
            const markerPosition = new kakao.maps.LatLng(data[0].y, data[0].x);
            const marker = new kakao.maps.Marker({
              position: markerPosition,
              title: name,
            });
            marker.setMap(map);
            kakao.maps.event.addListener(marker, 'mouseover', function() {
              // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            
            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
          }
        }
      });


      //
      map.setCenter(kakaoLatLng)
      setMap(map);
      
    });
  }
};

const createCurrentMarker = (map, currentL, setCurrentMarker) => {};

const setDisList = (map, currentL, setDisList) => {
  const dis = [];
  Object.keys(list).map((name) => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(name, placesSearchCB, {
      x: currentL.lon,
      y: currentL.lat,
      size: 1,
    });

    function placesSearchCB(data, status, pagination) {
      dis.push({ name: name, d: data[0].distance });
      dis.sort((a, b) => a.d - b.d);
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
  setDisList(dis);
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
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png";
const imageSize = new kakao.maps.Size(50, 45);
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

const defaultLocation = new kakao.maps.LatLng(37.3817847, 126.6677834);


const defaultDisList = [
  {
    name: "한빛자동차운전전문학원",
    d: "21644",
  },
  {
    name: "e현대자동차운전전문학원",
    d: "21822",
  },
  {
    name: "동아자동차운전전문학원",
    d: "23985",
  },
  {
    name: "인기자동차운전전문학원",
    d: "24346",
  },
  {
    name: "주신자동차운전전문학원",
    d: "30755",
  },
  {
    name: "인천자동차운전전문학원",
    d: "31295",
  },
  {
    name: "시엘자동차운전전문학원",
    d: "31348",
  },
];

export default MapContainer;
