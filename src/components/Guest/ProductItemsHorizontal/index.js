import ProductItem from '../../share/ProductItem';
import './style.scss'

import React, { useEffect, useState } from "react";

import product_list_ex from '../../../assets/json/list-product-hot.json';

export default function ProductItemsHorizontal({isLoading, listProduct}){
    const [productListRender, setProductListRender] = useState(listProduct);
    const [isLoadingRender, setIsLoadingRender] =useState (isLoading)   
    useEffect(()=>{
        setProductListRender(listProduct)
        //console.log("productListRender: ", productListRender)
    },[listProduct])

    useEffect(()=>{
        setIsLoadingRender(isLoading)
    },[isLoading])

    console.log("99999999999",isLoading, productListRender)
    return(
        <div className="product-items-horizontal">
              {
                    isLoadingRender ? <div>Loading...</div> :
                    (
                        productListRender && productListRender.length > 0 ? (
                             
                            productListRender.map((item, index) => 
                                <div key={index} className="pi-container">
                                    <ProductItem
                                        //image={process.env.REACT_APP_API_IMG + item.images[0].path}
                                        image={item.HINH1}
                                        isHorizontal = {true}
                                        name = {item.TENSACH}
                                        rated= {item.rated}
                                        price = {item.GIATHAYDOI}
                                        id = {item.MASACH}
                                    />
                                </div> 
                            )
                            
                        ) : <div>Not Have Product</div>
                    )                           
                }
        </div>
    )
}