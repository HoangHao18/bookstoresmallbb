import HeaderSlider from "../../../components/Guest/HeaderSlider";
import HomeCategory from "../../../components/Guest/HomeCategory";
import BreakSpace from "../../../components/share/BreakSpace";
import ProductItemsSlider from "../../../components/Guest/ProductItemsSlider";
import ProductNewList from "../../../components/Guest/ProductNewList";
import TitleSection from "../../../components/share/TitleSection";
import HomeBanner from "../../../components/Guest/HomeBanner";
import HomePragrances from "../../../components/Guest/HomePragrances";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getFeatureProductAsync, getNewProductAsync } from "../../../redux/actions/productAction";
import listProductEx from '../../../assets/json/list-product-hot.json';

export default function Home(){
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFeatureProductAsync());
        dispatch(getNewProductAsync());
    },[]);
    const productListFeature = useSelector((state) => state.products.productListFeature);
    const productListNew = useSelector((state) => state.products.productListNew);
    const isLoading = useSelector((state) => state.products.isLoading);

    return(
        <div className="home-page-container">
            <HeaderSlider/>

            <BreakSpace h="40px" />
            <HomeCategory/>

            <BreakSpace h="40px" />            
            <TitleSection title="sản phẩm nổi bật"/>
            {
                productListFeature && !isLoading &&
                <ProductItemsSlider isLoading={false} productList={productListFeature}/>
            }
           

            <BreakSpace h="40px" />   
            <HomeBanner/>

            {/* <BreakSpace h="30px" />   
            <TitleSection title="SẢN PHẨM MỚI"/> */}
            {/* {
                productListNew && !isLoading &&
                <ProductItemsSlider isLoading={false} productList={productListNew}/>
            } */}
            
          
            {/* <BreakSpace h="60px" />  */}
            {/* <HomePragrances/> */}

            <BreakSpace h="30px" />
            <TitleSection title="Sản phẩm mới"/>
            <ProductNewList/>
            <BreakSpace h="30px" />

        </div>
    )
}