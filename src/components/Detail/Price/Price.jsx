import React from "react";
import styles from './Price.module.css'

function Price(props) {
  return (
    <table>
      <caption>예상 가격표 </caption>
      <tbody>
        <tr className={styles.sum} >
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
        <tr  className={styles.sum}>
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
        <tr  className={styles.sum}>
          <td>예상 총 비용</td>
          <td>104.18 만원</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Price;
