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
    const isLoading = useSelector((state) => state.products.isLoading);

    const [numberUserChoosed, setNumberUserChoosed] = useState(0);

    let { id } = useParams();
    console.log("idddd: ",id)
    useEffect(() => {
        {
            id && dispatch(getSingleProductAsync(id))
        }
        
    }, [id]);

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
        !isLoading ? <div className='load-d'>Loading...</div> :
        <div className="details-product-container">
            {
                product ?
                   <div className="container">
                        <div className="row-hh">
                            <div className="col-6 details-product-left">
                                {
                                    product.HINH1 && product.HINH2 ?
                                        <ProductDetailImageSlider listImage = {[product.HINH1, product.HINH2]}/> : 
                                        <ProductDetailImageSlider listImage = {[product.HINH1]}/>
                                }
                        
                            </div>

                            <div className="col-6 details-product-right">
                                <h3 className="title-dp">Thông tin sản phẩm</h3>
                                <p className="name-product-dp">{product.TENSACH}</p>
                                <p className="code-product-dp">code {product.MASACH}</p>
                                <p className="price-dp"><NumberFormat value={product.GIATHAYDOI} displayType={'text'} thousandSeparator={true} /> VND</p>
                                <p className="capacity-product-dp">Tác giả: {product.TEN}</p>
                                {/* <p className="fragrance-item">Thể loại: {product.TENTHELOAI}</p> */}
                                <div className="fragrances-dp">
                                    <p>Thể loại </p>
                                    <div className="list-f-dp">
                                        <div className="fragrance-item">
                                            {product.TENTHELOAI}
                                        </div>
                                        {/* {
                                            productEx.fragrances && productEx.fragrances.length > 0 ?
                                            productEx.fragrances.map((item, index) => 
                                                <div className="fragrance-item">
                                                    {item.name}
                                                </div>
                                            )
                                            : ''
                                        } */}
                                    </div>
                                </div>

                                <div className="nsx-dp">
                                    Nhà xuất bản :  {product.TENNXB}
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
                                    isOpenDesc && <div className="desc-more">{product.MOTA} <br/> <span className='total-page'>Tổng Trang :</span> {product.SOTRANG}</div>
                                }

                                <p className="k-product-dp">Tồn kho: <NumberFormat value={product.SOLUONG} displayType={'text'} thousandSeparator={true} /></p>

                                <div className="quantity-dp">
                                    <p>Số lượng</p>
                                    <div className="quantity-btn-dp">
                                        <span onClick={() => { setNumberUserChoosed(numberUserChoosed === 0 ? 0 : numberUserChoosed - 1) }}><i class='bx bx-minus icon-minus' ></i></span>
                                        <span className="quantity">{numberUserChoosed}</span>
                                        <span onClick={() => { setNumberUserChoosed(numberUserChoosed == product.SOLUONG ? numberUserChoosed : numberUserChoosed + 1) }}><i class='bx bx-plus icon-plus'></i></span>
                                    </div>
                                </div>

                                <div className="btn-dp">
                                    <div onClick={() => { handleAddCart(productEx.MASACH)}} className="button-themgh">Thêm Vào Giỏ Hàng</div>
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