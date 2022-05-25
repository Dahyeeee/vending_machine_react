import { useEffect, useState } from "react";
import Tap from "../components/Tap";
import AddProduct from "../components/AddProduct";
import ProductTable from "../components/ProductTable";

function ProductManagment() {
  useEffect(() => {
    document.title = "자판기";
  }, []);

  const [inputs, setInputs] = useState({
    id: "",
    productName: "",
    productPrice: "",
    productQuantity: "",
  });
  const [products, setProducts] = useState(
    !localStorage.getItem("products") == []
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  const { productName, productPrice, productQuantity } = inputs;

  function getValue(event) {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  }

  function checkValidity() {
    if (inputs && +inputs.productPrice % 10 !== 0) {
      alert("10원단위로 입력하세요");
      return false;
    }
    if (inputs && +inputs.productQuantity <= 0) {
      alert("1개 이상 입력하세요");
      return false;
    }
    return true;
  }

  function onAdd(event) {
    event.preventDefault();
    let validity = checkValidity();
    if (validity) {
      const key = Math.random().toString(36).substring(7);
      const newProduct = {
        id: key,
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
      };
      setProducts([...products, newProduct]);
    }
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="App">
      <Tap title="상품 관리" />
      <AddProduct products={products} onChange={getValue} onAdd={onAdd} />
      <div>
        <h3>상품 현황</h3>
        <form>
          <ProductTable products={products} purchaseBtn={false} />
        </form>
      </div>
    </div>
  );
}

export default ProductManagment;
