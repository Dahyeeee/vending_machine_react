import { useState } from "react";
import CoinTable from "../components/CoinTable";
import ProductTable from "../components/ProductTable";
import Tap from "../components/Tap"

function Purchase(){
    const [products] =useState(
        Object.entries(localStorage)
                .filter(([key]) => key !== 'money' && key !=='change')
                .map(([key, valueJSON])=>{ 
            const value =JSON.parse(valueJSON);
            return value;
        })
      );
    const [input, setInput] =useState();
    const [money, setMoney] =useState(localStorage.getItem('money') | null);
    const change = localStorage.getItem('change')
    const [coin, setCoin] = useState(
        {coin500: null,
        coin100: null,
        coin50: null,
        coin10: null,
    })

    function checkValidity(){
        if(input%10 !==0) {
            alert('10원단위로 입력하세요')
            return false;
        }return true;
    }

    function onChange(event){
        const value = event.target.value;
        setInput(+value);
    }

    function insertMoney(){
        let validity = checkValidity();
        if(validity){
            setMoney(current =>+current + +input);
            localStorage.setItem('money', money)
        }
    }
    function purchase(){
        
    }

    function returnChange(){
        if(+change >= +money){
            setCoin({coin500: Math.floor(money/500),
                     coin100: Math.floor(money%500/100),
                    coin50: Math.floor(money%500%100/50),
                    coin10: Math.floor(money%500%100%50/10)})
        }else{
            setCoin(({coin500: Math.floor(change/500),
                    coin100: Math.floor(change%500/100),
                    coin50: Math.floor(change%500%100/50),
                    coin10: Math.floor(change%500%100%50/10)}))
        }
        setMoney(0);
    }
    
    return(
        <div>
            <Tap title='상품 구매 및 잔돈 반환' />
            <div>
                <h3>금액 투입</h3>
                <input type='number' value={ input } onChange={onChange}/>
                <input type='button' value='투입하기' onClick={insertMoney}/> <br />
                <text>투입한 금액 :{`${money}원`} </text>
            </div>
            <div>
                <h3>구매할 수 있는 상품 현황</h3>
                <ProductTable products={products} purchaseTr={`구매`} purchaseBtn={<button onClick={ purchase }>구매하기</button>}/>
            </div>
            <div>
                <h3>잔돈</h3>
                <input type='button' value = '반환하기' onClick ={ returnChange }/>
                <CoinTable coin={coin} />

            </div>
        </div>
    )
}

export default Purchase;