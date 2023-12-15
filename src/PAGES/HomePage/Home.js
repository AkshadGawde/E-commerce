import React, { useState, useEffect } from 'react';
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider';
import HomeCategories from '../../COMPONENTS/Category/HomeCategories';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar';
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider';

const Home = () => {
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
    <div>
      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />

      <div className='slidercont'>
        <ProductsSlider products={dat} categoryname='Related Products' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={dat} categoryname='Explore More' />
      </div>
      <Footer2 />
    </div>
  );
};

export default Home;
