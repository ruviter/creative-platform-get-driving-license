import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./MapContainer.module.css";

const { kakao } = window;
function MapContainer({ center }) {
  const [currentP, setCurrentP] = useState({}) 
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.45, 126.57),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);


    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch("내손로 14", (result, status) => { // 검색결과 마크 띄우기
      if (status === kakao.maps.services.Status.OK) { 
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log(result[0].y, result[0].x)

        const marker = new kakao.maps.Marker({ map: map, position: coords });

        const infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">우리 집</div>',
        });

        infowindow.open(map,marker)
      }
    });
  }, []);
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


const list = [
  {title:'동아 자동차운전전문학원'},
  {title:'인기 자동차운전전문학원'},
  {title:'인천 자동차운전전문학원'},
  {title:'강우주 자동차운전전문학원'},
  {title:'시엘 자동차운전전문학원'},
]

export default MapContainer;
