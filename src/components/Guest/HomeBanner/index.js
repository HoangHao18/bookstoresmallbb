import './style.scss';

export default function HomeBanner(){
    const style = {
        backgroundImage: "url('/assets/images/book15flip.jpg')"
    }

    return(
        <div className="home-banner-container" >
            <div className="bg" style={style}>
                <div className="hbc-container">
                    <div className="name-shop">a <span className="name">reader</span></div>
                    <div className="isay"> lives a thousand lives before he dies</div>
                   
                </div>
            </div>
            
        </div>
    )
}