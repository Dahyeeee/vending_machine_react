import React from "react";

function CoinTable({ coin }) {
  const { coin500, coin100, coin50, coin10 } = coin;
  return (
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <th>500원</th>
        <th>{coin500}개</th>
      </tr>
      <tr>
        <th>100원</th>
        <th>{coin100}개</th>
      </tr>
      <tr>
        <th>50원</th>
        <th>{coin50}개</th>
      </tr>
      <tr>
        <th>10원</th>
        <th>{coin10}개</th>
      </tr>
    </table>
  );
}

export default CoinTable;
