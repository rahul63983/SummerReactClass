import React, { useEffect, useState } from 'react'
import axios from "axios";
import Items from './Items';
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            setProducts(response.data.products);
        })
        .catch((error)=>{
            alert(error);
        });

    },[]);
  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-3 '>
        <h2 className=''>Select Your Products</h2>
        <div className="d-flex flex-wrap justify-center align-items-center">
            {products.map((product)=>(
                <Items thumbnail={product.thumbnail}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        description={product.description}
                        />

            )
            )}
        </div>
        {/* <Items/> */}
    </div>
  )
}

export default Products