import React from 'react';
import styles from './People.module.css'
import Person from './Person/Person';

function People(props) {
    return (
        <>
            <div>강사정보</div>
        <div className={styles.people}>
            <Person/>
            <Person/>
        </div>
        </>
    );
}

export default People;