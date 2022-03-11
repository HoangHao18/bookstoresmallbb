import PragranceTypeSlider from '../../share/PragranceTypeSlider';
import './style.scss';
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getListFragrancesAsync } from '../../../redux/actions/fragranceAction';
import listFragrance from '../../../assets/json/list-pragrance.json'

export default function HomePragrances(){
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListFragrancesAsync());
        //dispatch(getListCategoriesAsync())
    },[]);
    const fragranceList = useSelector((state) => state.fragrances.fragranceList);
    const isLoading = useSelector(state => state.fragrances.isLoading)
    const style = {
        backgroundImage: "url('/assets/images/hp06.jpg')"
    }
    return(
        <div className="home-pragrances-container">
            <div className="hp-bg" style={style}>
                <div className="hp-outsite-slider">
                    <div className="hp-slider">
                        <PragranceTypeSlider isLoading={false} listP={listFragrance}/>
                    </div>  
                </div>
            </div>
        </div>
    )
}