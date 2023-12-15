
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './AllProduct.css'; // Assuming this is the path to your CSS file

const AllProduct = () => {
  const [dat, setdat] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const jsonData = await res.json();
        setdat(jsonData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
      {
                    dat.map((item,index) => {
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
      </div>
    </div>
  );
};

export default AllProduct;
