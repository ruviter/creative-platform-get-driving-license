import React from 'react';
import styles from './Person.module.css'

function Person(props) {
    const imgSrc = 'https://file.mk.co.kr/meet/neds/2021/07/image_readmed_2021_659579_16257086594710103.jpg'

    return (
        <div className={styles.person}>
            <img className={styles.img} src={imgSrc} alt="profile" />
            <div>김지수 강사님</div>
            <div className={styles.star}>★ ★ ★ ★ ★</div>
            <button >상세리뷰</button>
        </div>
    );
}
export default Person;