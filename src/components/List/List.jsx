import React from 'react';
import Item from '../Item/Item';
import styles from './List.module.css'

function List(props) {
    return (
        <div className={styles.List}>
            <ul>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </ul>
        </div>
    );
}

export default List;