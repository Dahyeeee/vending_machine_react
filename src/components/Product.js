import React from "react";

function Product({ product, purchaseBtn, purchase }) {
  return (
    <tr key={product.id}>
      <td>{product.productName}</td>
      <td>{+product.productPrice}</td>
      <td>{+product.productQuantity}</td>
      <td style={{ visibility: purchaseBtn ? "visible" : "hidden" }}>
        <button
          onClick={() =>
            purchase(product.id, product.productPrice, product.productQuantity)
          }
        >
          구매하기
        </button>
      </td>
    </tr>
  );
}

export default Product;
