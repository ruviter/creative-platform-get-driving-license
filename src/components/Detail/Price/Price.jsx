import React from "react";

function Price(props) {
  return (
    <div style={{marginTop:'20px'}}>
      <table style={{outline:' 2px solid black', width:'900px'}}>
        <tbody>
          <thead>
            <td>가격표</td>
          </thead>
          <tr>
            <td>1종 보통</td>
            <td>2종 보통</td>
            <td>기능시험 재응시료</td>
            <td>면허발급비용</td>
            <td>현금결제 보험료</td>
            <td>예상 총 금액</td>
          </tr>
          <tr>
            <td>699,000</td>
            <td>599,000</td>
            <td>40,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>759,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Price;
