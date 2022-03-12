import './style.scss';
import Item from "./item";

export default function HomeCategory(){

    return(
        <div className="home-category-container container">
            <div className="row-hh">
                <div className="col-4">
                   <div className="row-hh row-long">
                        <Item 
                            name = "Sci-Fi"
                            image = "/assets/images/boca09.jpg"
                        />
                   </div>
                   <div className="row-hh row-short">
                        <Item 
                            name = "Romance"
                            image = "/assets/images/boca10.jpg"
                        />
                   </div>
                </div>

                <div className="col-4">
                   <div className="row-hh row-short">
                        <Item 
                            name = "Health"
                            image = "/assets/images/boca02.jpg"
                        />
                   </div>
                   <div className="row-hh row-long">
                        <Item 
                            name = "Contemporary"
                            image = "/assets/images/book15.jpg"
                        />
                   </div>
                </div>

                <div className="col-4">
                   <div className="row-hh row-long">
                        <Item 
                            name = "Mystery"
                            image = "/assets/images/boca06.jpg"
                        />
                   </div>
                   <div className="row-hh row-short">
                        <Item 
                            name = "Fantasy"
                            image = "/assets/images/boca08.jpg"
                        />
                   </div>
                </div>
            </div>
        </div>
    )
}