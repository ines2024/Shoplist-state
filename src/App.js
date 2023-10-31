import './App.css';
import React, { useEffect, useState } from 'react';
import BasicExample from './components/navbar';
import data from './components/data'
import Shoplist from './components/shoplist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from './components/Addproduct';

function App() {
  const [products,setProducts]=useState(data)
  console.log(products)
  useEffect(()=>{
    var product=JSON.parse(localStorage.getItem("product"))
    if(product!== null){
     setProducts([...products,product])

    }
  },[]
)
  
  return (
    <div className='APP'>
     <BasicExample/>
     <Addproduct/>
     <Shoplist shopping={products}/>
     
    </div>
  )
}

export default App