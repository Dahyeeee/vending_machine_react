import { useEffect, useState } from "react";
import CoinTable from "../components/CoinTable";
import Tap from "../components/Tap";

function TopUpChange() {
  const [input, setInput] = useState();
  const [change, setChange] = useState(localStorage.getItem("change") | null);
  const [coin, setCoin] = useState({
    coin500: Math.floor(change / 500),
    coin100: Math.floor((change % 500) / 100),
    coin50: Math.floor(((change % 500) % 100) / 50),
    coin10: Math.floor((((change % 500) % 100) % 50) / 10),
  });

  function onchange(event) {
    const money = event.target.value;
    setInput(+money);
  }

  function checkValidity() {
    if (input % 10 !== 0) {
      alert("10원단위로 입력하세요");
      return false;
    }
    return true;
  }

  const onclick = () => {
    let validity = checkValidity();
    if (validity) {
      setChange((current) => (current = +current + +input));
    }
  };

  useEffect(() => {
    localStorage.setItem("change", change);
  }, [change]);

  useEffect(() => {
    setCoin({
      ...coin,
      coin500: Math.floor(change / 500),
      coin100: Math.floor((change % 500) / 100),
      coin50: Math.floor(((change % 500) % 100) / 50),
      coin10: Math.floor((((change % 500) % 100) % 50) / 10),
    });
  }, [change]);

  return (
    <div>
      <Tap title="잔돈 충전" />
      <div>
        <h3>자판기 동전 충전하기</h3>
        <span>
          <input type="number" value={input} onChange={onchange} />
          <input type="button" value="충전하기" onClick={onclick} />
          <br />
          <text>보유 금액: {change ? `${change}원` : null}</text>
        </span>
      </div>
      <div>
        <h3>동전 보유 현황</h3>
        <CoinTable coin={coin} />
      </div>
    </div>
  );
}

export default TopUpChange;
