import React from "react";
import Item from "./Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";

function List({ onDetail , onCompare }) {
  return (
    <div className={styles.List}>
      <Search onCompare={onCompare}/>
      <ul>
        <Item onDetail={onDetail} />
        <Item onDetail={onDetail} />
        <Item onDetail={onDetail} />
        <Item onDetail={onDetail} />
      </ul>
    </div>
  );
}

function Search({onCompare}) {
  return (
    <>
      <form style={{display:'flex', margin:'10px 10px'}} action="submit">
        <input style={{flex:'1'}} type="text" />
        <button>
          <IoIosSearch />
        </button>
      </form>
      <div style={{ color: "black", fontSize: "0.8rem", marginLeft:'10px'}}>
        <strong style={{color:'var(--color-accent)'}}>낮은 가격순</strong> / 높은 가격순 / 가까운 거리순 / 별점 높은순
      </div>
      <div style={{display:'flex', flexDirection:'row-reverse'}}>

      <button className={styles.detail} onClick={()=>{onCompare(true)}}>세부 비교하기</button>
      </div>
    </>
  );
}

export default List;
