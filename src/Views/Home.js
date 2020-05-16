import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequest';

function Home(){
    const url = `https://5ec0685825ad400016560b1a.mockapi.io/products/`;

    let products = useAxiosGet(url)

    let content = null
    
    if(products.error){
        content = <p>
            There was an error please contact the web master
        </p>
    }
    
    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        return (
            content = 
            products.data.map((product, key) => 
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Home