import React from 'react';
import styles from './Nav.module.css'


function Nav(props) {
    return (
        <header className={styles.nav}>
            <div className={styles.menu}>...</div>
            <div className={styles.logo}>면허따자</div>
            <div>

            <button className={styles.qna}>Q&A</button>
            <button className={styles.login}>LOGIN</button>
            </div>
        </header>
    );
}

export default Nav;