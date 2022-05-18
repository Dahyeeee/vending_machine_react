
function ProductTable({products, purchaseBtn, purchaseTr}){
    return(
        <table>
             <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>{purchaseTr}</th>
             </tr>          
               {products.map((val, key)=>(
                   <tr key={key}>
                       <td>{val.productName}</td>
                       <td>{+val.productPrice}</td>
                       <td>{+val.productQuantity}</td>
                       <td>{purchaseBtn}</td> 
                    </tr>
               ))}
               
           </table>
    )
}

export default ProductTable;