import React from "react";

function AddProduct({ products, onChange, onAdd }) {
  const { productName, productPrice, productQuantity } = products;
  return (
    <div>
      <h3>상품 추가하기</h3>
      <form>
        <input
          name="productName"
          type="text"
          placeholder="상품명"
          onChange={onChange}
          value={productName}
        />
        <input
          name="productPrice"
          type="number"
          placeholder="가격"
          onChange={onChange}
          value={productPrice}
        />
        <input
          name="productQuantity"
          type="number"
          placeholder="수량"
          onChange={onChange}
          value={productQuantity}
        />
        <input type="button" value="추가하기" onClick={onAdd} />
      </form>
    </div>
  );
}

export default AddProduct;
