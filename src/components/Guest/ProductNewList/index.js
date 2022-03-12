import { getListProductsAsync } from '../../../redux/actions/productAction';
import ProductItemsHorizontal from '../ProductItemsHorizontal'
import './style.scss'
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import listProductEx from '../../../assets/json/list-product-hot.json'

export default function ProductNewList(){
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListProductsAsync());
    },[]);
    const productList = useSelector((state) => state.products.productList);
    const isLoading = useSelector((state) => state.products.isLoading);

    const [productListRender, setProductListRender] = useState(productList);
    useEffect(() => {
        setProductListRender(productList)
    },[productList]);

    console.log("888888888: ", productListRender)

    return(
        <div className="product-new-list-container">
            
            <div className="container plc-content">
                <div className="row-hh">
                    <div className="pnl-product col-8">
                        {
                            productList &&
                            <ProductItemsHorizontal listProduct={productListRender} isLoading={isLoading}/>
                        }
                        
                    </div>
                    <div className="pnl-deco col-4">
                        <div className="pnl-deco-img">
                            <img src="/assets/images/boca07.jpg" alt=""></img>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="plc-deco">
                <div className="plc-deco-left">
                    <img src="/assets/images/decoEdge01.png" alt=""></img>
                </div>
                <div className="plc-deco-right">
                    <img src="/assets/images/decoEdge02.png" alt=""></img>
                </div>
            </div> */}

        </div>
    )
}