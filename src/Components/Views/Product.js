import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import { useAxiosGet } from '../../Hooks/HttpRequests'

function Product(){
    const {id} = useParams()
    const url = `https://62c2de4eff594c6567682af9.mockapi.io/api/products/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if (product.loading) {
        content = <p>There was an error</p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.data) {
        return(
            content = 
            <div>
                <h1>{product.data.name}</h1>
            </div>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
    
    
}

export default Product