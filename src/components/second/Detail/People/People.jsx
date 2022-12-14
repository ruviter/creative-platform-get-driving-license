import React from "react";
import { useState } from "react";
import styles from "./People.module.css";
import Person from "./Person/Person";

function People(props) {
  const [teachers, setTeachers] = useState(initTeachers)
  return (
    <>
      <div className={styles.title}>강사정보</div>
      <div className={styles.people}>
        {Object.keys(teachers).map((name) => (
          <Person name={name} setTeachers={setTeachers} teachers= {teachers} />
        ))}
      </div>
    </>
  );
}

const initTeachers = {
  우민혁 : {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "우민혁",
    star: "5",
    reviews: {
      1: {
        star: "4",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "너무 친절하게 잘 대해주셔서 한번에 합격했어요..!! 진짜 강추!! 너무 감사드리고 만약 다음에 연수를 한다면 거기서도 하고 싶다는 생각이 들정도로 정말 친절하고 상냥하게 설명해주셨어요!! 정말 감사합니다!!",
      },
      2: {
        star: "5",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "운전면허학원 강사들 불친절하다고 해서 걱정많이 했었는데 이분은 정말 다르시네요. 친절한 설명 감사합니다.",
      },
    },
  },
  심준석 : {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "심준석",
    star: "5",
    reviews: {
      1: {
        star: "5",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "너무 친절하게 잘 대해주셔서 한번에 합격했어요..!! 진짜 강추!! 너무 감사드리고 만약 다음에 연수를 한다면 거기서도 하고 싶다는 생각이 들정도로 정말 친절하고 상냥하게 설명해주셨어요!! 정말 감사합니다!!",
      },
      2: {
        star: "3",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "운전면허학원 강사들 불친절하다고 해서 걱정많이 했었는데 이분은 정말 다르시네요. 친절한 설명 감사합니다.",
      },
    },
  },
  김선혁 : {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "김선혁",
    star: "5",
    reviews: {
      1: {
        star: "2",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "너무 친절하게 잘 대해주셔서 한번에 합격했어요..!! 진짜 강추!! 너무 감사드리고 만약 다음에 연수를 한다면 거기서도 하고 싶다는 생각이 들정도로 정말 친절하고 상냥하게 설명해주셨어요!! 정말 감사합니다!!",
      },
      2: {
        star: "5",
        cert: "영수증 인증한 리뷰",
        id: "수다쟁이",
        date: "2022.11.16",
        content:
          "운전면허학원 강사들 불친절하다고 해서 걱정많이 했었는데 이분은 정말 다르시네요. 친절한 설명 감사합니다.",
      },
    },
  },
};

export default People;
