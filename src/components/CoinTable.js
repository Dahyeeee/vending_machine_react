function CoinTable({coin}){
    return(
        <table>
                    <tr>
                        <th>동전</th>
                        <th>개수</th>
                    </tr>
                    <tr>
                        <th>500원</th>
                        <th>{coin.coin500}개</th> 
                    </tr>
                    <tr>
                        <th>100원</th>
                        <th>{coin.coin100}개</th>
                    </tr>
                    <tr>
                        <th>50원</th>
                        <th>{coin.coin50}개</th>
                    </tr>
                    <tr>
                        <th>10원</th>
                        <th>{coin.coin10}개</th>
                    </tr>

                </table>
    )
}

export default CoinTable;