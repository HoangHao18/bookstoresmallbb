import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import 'animate.css'
import { ArrowNext, ArrowPrev } from './Arrow'

const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    // cssEase: "linear",
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />
}



export default function HeaderSlider() {
  return (
    <div className="header-slider">
      <Slider {...settings}>
        <div>
          <div className="img-header-slider">
            <img src="/assets/images/book03.jpg" alt=""></img>
          </div>
          <div className="content-header-slider">
            <p className="first-chs">Reading a good book is like</p>
            <p className="second-chs">taking a journey</p>
            <p className="third-chs">A book is a gift you can open again and again</p>
          </div>
        </div>

        <div>
          <div className="img-header-slider">
            <img src="/assets/images/book04.jpg" alt=""></img>
          </div>
          <div className="content-header-slider">
            <p className="first-chs">Reading gives us</p>
            <p className="second-chs">someplace</p>
            <p className="third-chs">to go when we have to stay where we are</p>
          </div>
        </div>

        <div>
          <div className="img-header-slider">
            <img src="/assets/images/book05.jpg" alt=""></img>
          </div>
          <div className="content-header-slider">
            <p className="first-chs">It's a good day to read</p>
            <p className="second-chs">WELCOME</p>
            <p className="third-chs">A book is a gift you can open again and again</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}