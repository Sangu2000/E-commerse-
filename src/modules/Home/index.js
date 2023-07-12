import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero';
import Products from '../../components/ProductCard';
import FeatureCard from '../../components/FeatureCard';
import StatCard from '../../components/StatCard';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)


            setProducts(data);
            console.log(products, "product array");

        }
        fetchProducts();
    }, [])
    return (
        <>
            <Hero />
            <Categories products={products} />
            <div className='flex flex-col text-center w-full mb-2'>
                <h2 className='text-4xl font-bold text-center mt-20'>ALL PRODUCTS</h2>
                <h1 className='sm:text-3xl text-2xl font-medium title-font text-grey-900'>MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ? <ProductCard products={products} /> : <div>Loading. . . . .</div>
            }
            <Products />
            <FeatureCard />
            <StatCard />

        </>
    )
}

export default Home;