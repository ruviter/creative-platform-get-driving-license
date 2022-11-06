import React from "react";
import styles from "./Qna.module.css";
import { BsPatchQuestion } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaGratipay } from "react-icons/fa";

function Qna(props) {
  return (
    <div className={styles.container}>
      <section className={styles.lists}>
        <List title={"내 주변학원의 신규 후기"} />
        <List title={"영수증 인증한 후기"} />
        <List title={"인기글"} />
        <List title={"다른 지역의 신규후기"} />
      </section>
      <section className={styles.qna}>
        <input type="text" placeholder={"Q. 질문을 올려보세요!"} />
        <Q />
        <A title={"구정이 나을듯?"} />
        <A title={"가격고려 안하면은"} />
        <div></div>
      </section>
    </div>
  );
}

function List({ title }) {
  return (
    <div className={styles.list}>
      <p>{title}</p>
      <ul>
        <li>1.주변사람들한테 들은건데</li>
        <li>2.이건좀 아니라고 생각하는..</li>
        <li>3.다른 지역이랑 비교 했을때</li>
        <li>4.구정 이학원은 왜 가격 더..</li>
      </ul>
    </div>
  );
}

function Q({ title, content, id, badge }) {
  return (
    <div className={styles.q}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center" ,
        }}
      >
        <div>
          <strong>Q. </strong>구정 운전면허학원이랑 정단 운전면허학원이랑 고민
          중인데
        </div>
        <span style={{ fontSize: "2rem", color: "#00bfff" }}>
          <BsPatchQuestion />
          <span style={{ color: "rgb(247, 95, 95)" }}>
            {" "}
            <FaGratipay />{" "}
          </span>
        </span>
      </div>
      <p>id : 두루두루치기치기</p>
      <p>
        가격적인 면에서는 2만원 차이라서 그렇게 신경쓸정도는 아니라고
        생각하거든? 근데 교통이랑 강사상태때문에 결정장애와서
      </p>
    </div>
  );
}

function A({ title, content, id, badge }) {
  return (
    <div className={styles.a}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <strong>A. </strong>
          {title}
        </div>
        <span style={{ fontSize: "2rem", color: "#00bfff" }}>
          <RiSecurePaymentFill />
        </span>
      </div>
      <p>id: 사라사라삿삿사</p>
      <p>
        구정은 셔틀범위가 좁아서 범위 확인해보고, 아니면 대중교통타고가야 되는
        건데 그게 왕복으로 3000원씩해서 대충 7번 왔다갔다 하는 거니까
      </p>
      <p>
        가격은 사실상 교통비랑 퉁쳐지는 거고, 그러면 강사별점으로만 고민하면
        구정운전면허학원이 더 나을듯?
      </p>
    </div>
  );
}

export default Qna;
