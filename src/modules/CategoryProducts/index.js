
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
const CategoryProducts = () => {
    const [products, setProducts] = useState([])

    const { name } = useParams;

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json()
            console.log(data)
            setProducts(data);
        }
        fetchProducts();
    }, [])
    if (products.length === 0) {
        <div>Loading. . . . </div>
    }
    return (
        <div>CategoryProducts</div>
    )
}

export default CategoryProducts;