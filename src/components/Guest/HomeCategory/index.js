import './style.scss';
import Item from "./item";

export default function HomeCategory(){

    return(
        <div className="home-category-container container">
            <div className="row-hh">
                <div className="col-4">
                   <div className="row-hh row-long">
                        <Item 
                            name = "Body Mist"
                            image = "/assets/images/HomeCategory01.png"
                        />
                   </div>
                   <div className="row-hh row-short">
                        <Item 
                            name = "Oil Mist"
                            image = "/assets/images/HomeCategory02.png"
                        />
                   </div>
                </div>

                <div className="col-4">
                   <div className="row-hh row-short">
                        <Item 
                            name = "Perfume Oil"
                            image = "/assets/images/HomeCategory03.png"
                        />
                   </div>
                   <div className="row-hh row-long">
                        <Item 
                            name = "Perfumes"
                            image = "/assets/images/HomeCategory04.png"
                        />
                   </div>
                </div>

                <div className="col-4">
                   <div className="row-hh row-long">
                        <Item 
                            name = "Aromatherapy"
                            image = "/assets/images/HomeCategory05.png"
                        />
                   </div>
                   <div className="row-hh row-short">
                        <Item 
                            name = "Body Spray"
                             //image = "/assets/images/HomeCategory06.png"
                            image = "/assets/images/HomeCategory06B.png"
                        />
                   </div>
                </div>
            </div>
        </div>
    )
}