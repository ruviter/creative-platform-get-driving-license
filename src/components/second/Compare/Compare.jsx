import React from "react";
import Price from "../Detail/Price/Price";
import styles from "./Compare.module.css";

function Compare({ onClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <div>
        <CompareDetail title={"서울 자동차운전면허 학원"} />
      </div>
      <div>
        <CompareDetail title={"명학 자동차운전면허 학원"} />
      </div>
      <div>
        <CompareDetail title={"하나 자동차운전면허 학원"} />
      </div>
    </div>
  );
}

function CompareDetail({ title }) {
  return (
    <table>
      <caption>{title}</caption>
      <tr>
        <td>강사 평균 별점 </td>
        <td>
          <span className={styles.star}>★★★☆☆</span>
        </td>
      </tr>
      <tr>
        <td>학원까지 거리</td>
        <td>1.5km</td>
      </tr>
      <tbody>
        <tr className={styles.sum}>
          <td>수강료 (등록비)</td>
          <td>83.48 만원</td>
        </tr>
        <tr>
          <td>장내기능 (1종 보통)</td>
          <td>36.78 만원</td>
        </tr>
        <tr className={styles.sum}>
          <td>수강료 (등록비)</td>
          <td>83.48 만원</td>
        </tr>
        <tr>
          <td>장내기능 (1종 보통)</td>
          <td>36.78 만원</td>
        </tr>
        <tr>
          <td>도로주행 (1종 보통)</td>
          <td>46.7 만원</td>
        </tr>
        <tr className={styles.sum}>
          <td>부가비용</td>
          <td>20.7 만원</td>
        </tr>
        <tr>
          <td>학과 교재비</td>
          <td>1.5 만원</td>
        </tr>
        <tr>
          <td>기능 검정료</td>
          <td>4.4 만원</td>
        </tr>
        <tr>
          <td>보험료</td>
          <td>1 만원</td>
        </tr>
        <tr>
          <td>신체 검사비</td>
          <td>0.6 만원</td>
        </tr>
        <tr>
          <td>학과응시료</td>
          <td>1 만원</td>
        </tr>
        <tr>
          <td>연습면허증 발급비용</td>
          <td>0.4 만원</td>
        </tr>
        <tr>
          <td>본면허증 발급비용</td>
          <td>0.8 만원</td>
        </tr>
        <tr>
          <td>도로주행 검정료</td>
          <td>6.6 만원</td>
        </tr>
        <tr className={styles.sum} style={{ fontSize: "1.2rem" }}>
          <td>예상 총 비용</td>
          <td>104.18 만원</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Compare;
