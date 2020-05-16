import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequest';

function Product(){
    const { id } = useParams()
    const url = `https://5ec0685825ad400016560b1a.mockapi.io/products/${id}`;
    let product = useAxiosGet(url)

    let content = null

    // use effect to call api once, if you're calling the api without use effect, it will be calling over and over 

    if(product.error){
        content = "Data not found"
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        return (
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                    src={product.data.images}
                    alt={product.data.name}
                    />
                </div>
                <div>
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        )
    }

    return (
        content
    )

}

export default Product