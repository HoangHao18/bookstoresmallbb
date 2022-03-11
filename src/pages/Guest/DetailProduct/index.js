import './style.scss'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import NumberFormat from 'react-number-format';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowNext from './ArrowNext'
// import ArrowPrev from './ArrowPrev'
// import { toast } from "react-toastify";

import { getSingleProductAsync } from '../../../redux/actions/productAction'
import ProductDetailImageSlider from '../../../components/share/ProductDetailImageSlider';
import { addProductCartAsync } from '../../../redux/actions/cartAction';
import { toast } from 'react-toastify';

// const settings = {
//     // dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     //autoplay: true,
//     speed: 500,
//     // autoplaySpeed: 3000,
//     //fade: true,
//     // cssEase: "linear",
//     nextArrow: <ArrowNext />,
//     prevArrow: <ArrowPrev />

// }

const productEx = {
    "images": ["/assets/images/pi-catusWater.jpg","/assets/images/HomeCategory01.png","/assets/images/HomeCategory05.png"],
    "name": "Catus Water",
    "rated": "5",
    "price": "480000",
    "number": "10",
    "capacity": "100",
    "id":"141592654",
    "fragrances": [{"name": "Citrus"}, {"name": "Floral"}, {"name": "Aromatic"}],
    "manufacture": {"name": "Victoria's Secret"},
    "description": "Và cho bae nào mê tông nước trong trẻo, mát lành mà bbw hết rùi thì hãy nghía bé Cactus Water nghen babe ơiiii, mùi hương nhẹ nhàng thoang thoảng của hoa xương rồng và nước mưa, vâng chính là nước mưa lạnh lạnh trong truyền thuyết mà mấy bà hay hỏi nè Mùi trầm nhẹ, trong vắt nhưng khá là sang nghen kiểu giống giống như Desert Wildflowers mà hơi đằm hơn chút xíu và ít hương hoa hơn nhen. Yêu kiều, thanh thoát, nhẹ nhàng, mong manh như một giấc mơ vậyyy, kiểu lúc thấy em on web là bà Xóm đã mê lắm ùi, mấy bé vỏ màu xanh xanh trong trong như này là lấy cảm tình Xóm liền luôn á. Mùi hương mọng nước, lạnh lạnh đã ơi là đã, màu xanh của cỏ cây và màu trắng trong của nước mát đã khiến tâm hồn này nhẹ nhõm rồi, thêm cả làn hương của lá cỏ dưới mưa nữa, mát lành và yên ả lắm. Mềm mại và êm ái, khi càng dành thời gian để tận hưởng mùi hương nhẹ dịu này, Xóm cành cảm thấy sự thanh tịnh và yên bình xung quanh."

}

export default function DetailProduct() {
    const [isOpenDesc, setOpenDesc] = useState(false);

    let dispatch = useDispatch();

    const product = useSelector((state) => state.products.productSingle);
    console.log("product now mmmmmmmmmmm: ", product)

    //const [colorsObject, setColorsObject] = useState([]);
    //console.log("colorsObject: ", colorsObject);
    //const [colorUserChoosed, setColorUserChoosed] = useState({color: "", sizes: []});
    //const [sizeUserChoosed, setSizeUserChoosed] = useState({name: "", number: 0})
    const [numberUserChoosed, setNumberUserChoosed] = useState(0);

    let { id } = useParams();
    useEffect(() => {
        dispatch(getSingleProductAsync(id))
            // .then(res => {
            //     // console.log("okkkkkkkkk: ", res.ok)
            //     if (res.ok) {
            //         // setColorsObject(JSON.parse(res.productCurrent.colors))
            //         // setColorUserChoosed(JSON.parse(res.productCurrent.colors)[0])
            //         // setSizeUserChoosed(JSON.parse(res.productCurrent.colors)[0].sizes[0])
            //         //console.log("okkkkkkkkk: ",JSON.parse(res.productCurrent.colors)[0].sizes[0])
            //     }
            // })
    }, []);

    const handleAddCart = (id) => {
        if(numberUserChoosed > 0){
            //dispatch(addProductCartAsync({productid: id, number: numberUserChoosed}))
            toast.error("PLEASE LOGIN")
        }
        else{
            toast.error("PLEASE CHOOSE NUMBER")
        }
       
    }

    return (
        <div className="details-product-container">
            {
                productEx ?
                   <div className="container">
                        <div className="row-hh">
                            <div className="col-6 details-product-left">
                                {
                                    productEx.images && productEx.images.length > 0 ?
                                        <ProductDetailImageSlider listImage = {productEx.images}/> : ''
                                }
                        
                            </div>

                            <div className="col-6 details-product-right">
                                <h3 className="title-dp">Thông tin sản phẩm</h3>
                                <p className="name-product-dp">{productEx.name}</p>
                                <p className="code-product-dp">code {productEx.id}</p>
                                <p className="price-dp"><NumberFormat value={productEx.price} displayType={'text'} thousandSeparator={true} /> VND</p>
                                <p className="capacity-product-dp">Dung tích: {productEx.capacity} ml</p>
                               
                                {/* <div className="color-dp">
                                <p>Màu</p>
                                {
                                     colorsObject && colorsObject.map(function(color, index){
                                        if(color.color === colorUserChoosed.color){
                                            return(
                                                <div className="color-item-dp choosed"
                                                    style={{ backgroundColor: `${color.color}` }} 
                                                    key={index}
                                                    onClick={()=>{
                                                        setColorUserChoosed(color);
                                                    }}
                                                ></div> 
                                            )
                                        } 
                                        else{
                                            return(
                                                <div className="color-item-dp"
                                                    style={{ backgroundColor: `${color.color}` }} 
                                                    key={index}
                                                    onClick={()=>{
                                                        setColorUserChoosed(color);
                                                    }}
                                                 ></div> 
                                            )
                                        }
                                    }) 
                                }  
                            
                                </div>  */} 
                                {/*  <div className="size-dp">
                                    <p>Kích thước</p>
                                    <div>
                                {
                                     colorsObject && colorUserChoosed && colorUserChoosed.sizes.map(function(size, index){
                                        if(size.name === sizeUserChoosed.name){
                                            return(
                                                <div className="size-item-dp choose-size"  
                                                    key={index}
                                                    onClick={()=>{
                                                        setSizeUserChoosed(size)
                                                    }}
                                                >{size.name}</div> 
                                            )
                                        } else{
                                            return(
                                                <div className="size-item-dp"  
                                                    key={index}
                                                    onClick={()=>{
                                                        setSizeUserChoosed(size)
                                                    }}
                                                >{size.name}</div> 
                                            )
                                        }
                                    })    
                                }  
                                </div>
                                </div> */}
                                <div className="fragrances-dp">
                                    <p>Nhóm Hương </p>
                                    <div className="list-f-dp">
                                        {
                                            productEx.fragrances && productEx.fragrances.length > 0 ?
                                            productEx.fragrances.map((item, index) => 
                                                <div className="fragrance-item">
                                                    {item.name}
                                                </div>
                                            )
                                            : ''
                                        }
                                    </div>
                                </div>

                                <div className="nsx-dp">
                                    Nhà sản xuất :  {productEx.manufacture.name}
                                    {/* <i class='bx bx-chevron-down icon-read-more'></i> */}
                                </div>
                                <p className="desc-dp">
                                    <div className="desc-dp-t">Mô tả </div>
                                    {
                                        isOpenDesc ? <i class='bx bx-chevron-up icon-read-more' onClick={() => setOpenDesc(!isOpenDesc)}></i>
                                            : <i class='bx bx-chevron-down icon-read-more' onClick={() => setOpenDesc(!isOpenDesc)}></i>
                                    }
                                </p>
                                {
                                    isOpenDesc && <div className="desc-more">{productEx.description}</div>
                                }

                                <p className="k-product-dp">Tồn kho: <NumberFormat value={productEx.number} displayType={'text'} thousandSeparator={true} /></p>

                                <div className="quantity-dp">
                                    <p>Số lượng</p>
                                    <div className="quantity-btn-dp">
                                        <span onClick={() => { setNumberUserChoosed(numberUserChoosed === 0 ? 0 : numberUserChoosed - 1) }}><i class='bx bx-minus icon-minus' ></i></span>
                                        <span className="quantity">{numberUserChoosed}</span>
                                        <span onClick={() => { setNumberUserChoosed(numberUserChoosed == productEx.number ? numberUserChoosed : numberUserChoosed + 1) }}><i class='bx bx-plus icon-plus'></i></span>
                                    </div>
                                </div>

                                <div className="btn-dp">
                                    <div onClick={() => { handleAddCart(productEx.id)}} className="button-themgh">Thêm Vào Giỏ Hàng</div>
                                    {/* <Button nameButton="Thêm Vào Giỏ Hàng" onClick={(event)=>{handleAddCart()}}/>
                                    <Button nameButton="Mua Hàng"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div>Loading...</div>
            }
        </div>
    )
}