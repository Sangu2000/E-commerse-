import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'

import Categories from '../../components/Categories'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)
            setProducts(data);
        }
        fetchProducts();
    }, [])
    return (
        <>
            <Categories />
            <div className='flex flex-col text-center w-full mb-2'>
                <h2 className='text-4xl font-bold text-center mt-20'>PRODUCTS</h2>
                <h1 className='sm:text-3xl text-2xl font-medium title-font text-grey-900'>MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} />
                    :
                    <div>Loading .....</div>
            }

        </>

    )
}

export default Products