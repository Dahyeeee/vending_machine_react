import { useState } from 'react'
import Tap from '../components/Tap';
import AddProduct from '../components/AddProduct';
import ProductTable from '../components/ProductTable';

function ProductManagment() {
    const [inputs, setInputs] = useState({
        productName:'',
        productPrice:'',
        productQuantity:''
    });
    const [products, setProducts] =useState(
      Object.entries(localStorage)
              .filter(([key, value]) => key !== 'change' && key !=='money')
              .map(([key, valueJSON])=>{ 
          const value =JSON.parse(valueJSON);
          return key !== 'change ' ? value : 0
      })
    );

    const {productName, productPrice, productQuantity} =inputs;
  
    function getValue(event){
        const { value, name } = event.target;
        setInputs({...inputs, 
            [name]: value}) 
    }

    function checkValidity(){
       if(inputs && +inputs.productPrice % 10 !== 0) {
         alert('10원단위로 입력하세요');
         return false;
       }if(inputs && +inputs.productQuantity <=0 ) {
         alert('1개 이상 입력하세요')
         return false;
       }
       return true;
    }/*
    useEffect(checkValidity ,[inputs])
  */
    function onAdd(event){
        event.preventDefault();
        let validity = checkValidity()
        if(validity){
          let key = Math.random().toString(36).substring(7);
          const prodcutInfo = {
            productName: productName,
            productPrice: productPrice,
            productQuantity: productQuantity
          }
          let newProducts = [...products]
          newProducts.push(inputs)
          localStorage.setItem(key, JSON.stringify(prodcutInfo))
          setProducts(newProducts)
      }
    }

    return (
      <div className="App">
       <Tap title='상품 관리' />
       <AddProduct
            productName={productName} 
            productPrice={productPrice} 
            productQuantity={productQuantity}
            onChange ={ getValue }
            onAdd = { onAdd }
            />
       <div>
         <h3>상품 현황</h3>
         <form>
           <ProductTable products={products} />
         </form>
       </div>
      </div>
    );
  }

  export default ProductManagment