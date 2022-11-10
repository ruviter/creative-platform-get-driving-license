import React from "react";
import styles from './Info.module.css'
function Info({onNextPage}) {
  return (
    <>
      <form action="submit" className={styles.form}>
        <input type="text" placeholder="사는곳을 입력하면 근처 학원을 알아볼게요"/>
        <div>현재위치로 하고 싶다면 위치정보서비스에 동의해주세요</div>
      </form>
      <div className={styles.license}>어떤 운전면허를 따시겠어요?</div>
      <div className={styles.buttons}>
        <button className={styles.j1}>1종 운전면허</button>
        <button className={styles.j2}>2종 운전면허</button>
      </div>
      <button className={styles.next} onClick={()=>{onNextPage(2)}}>운전면허학원 알아보기</button>
    </>
  );
}

export default Info;
