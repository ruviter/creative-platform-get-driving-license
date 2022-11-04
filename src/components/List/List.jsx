import React from 'react';
import Item from './Item/Item';
import styles from './List.module.css'

function List({onDetail}) {
    return (
        <div className={styles.List}>
            <ul>
            <Item onDetail={onDetail}/>
            <Item/>
            <Item/>
            <Item/>
            </ul>
        </div>
    );
}

export default List;