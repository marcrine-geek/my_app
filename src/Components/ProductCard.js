import React from 'react'

function ProductCard(props){
    return(
        <div className="border mb-4 rounded overflow-hidden">
            {props.product.name}
            {props.product.id}
        </div>
    )
}

export default ProductCard