import React from "react";
import Product from "./Product";

function ProductTable({ products, purchaseBtn, purchaseTr, purchase }) {
  return (
    <table>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>{purchaseTr}</th>
      </tr>
      {products
        ? products.map((product) => (
            <Product
              product={product}
              purchaseBtn={purchaseBtn}
              purchase={purchase}
            />
          ))
        : null}
    </table>
  );
}

export default ProductTable;
