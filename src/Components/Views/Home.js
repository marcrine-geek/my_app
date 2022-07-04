import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import ProductCard from '../ProductCard'
import { useAxiosGet } from '../../Hooks/HttpRequests'

function Home(){
    const url = 'https://62c2de4eff594c6567682af9.mockapi.io/api/products/products/'
    
    let products = useAxiosGet(url)

    let content = null

    if (products.loading) {
        content = <p>There was an error</p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        return(
            content = 
            products.data.map((product, key) => 
                <div>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )
        )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">Best Products</h1>
            {content}
        </div>
    )
}

export default Home