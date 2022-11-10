import React from "react";
import { useState } from "react";
import List from "../List/List/List";
import Detail from '../Detail/Detail/Detail'
import Compare from '../Compare/Compare'
import styles from './SecondPage.module.css'
import MapContainer from "../MapContainer/MapContainer";

function SecondPage({}) {
  const [detail, setDetail] = useState(false);
  const [compare, setCompare] = useState(false);
  return (
    <section className={styles.section}>
      {detail ? (
        <div className={styles.detail}>
          <Detail />
        </div>
      ) : (
        <>
          <div className={styles.map}>
           <MapContainer/>
          </div>
          <List onDetail={setDetail} onCompare={setCompare} />
        </>
      )}
      {compare && <Compare setModalOpen={setCompare} />}
    </section>
  );
}

export default SecondPage;
