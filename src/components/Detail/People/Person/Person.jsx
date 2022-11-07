import React from 'react';
import styles from './Person.module.css'

function Person({inf}) {
    const imgSrc = 'https://file.mk.co.kr/meet/neds/2021/07/image_readmed_2021_659579_16257086594710103.jpg'
    const {img,name,star} = inf
    return (
        <div className={styles.person}>
            <img className={styles.img} src={img} alt="profile" />
            <div>{name} 강사</div>
            <div className={styles.star}>{star}</div>
            <button >상세리뷰</button>
        </div>
    );
}
export default Person;