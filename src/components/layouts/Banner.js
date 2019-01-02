import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <Carousel emulateTouch infiniteLoop autoPlay>
                    <div className="item-slide">
                        <img src="http://hdwpro.com/wp-content/uploads/2016/03/Fantastic-Full-HD-Wallpaper.jpg" alt="hinh" />
                    </div>
                    <div className="item-slide">
                        <img src="http://hdwpro.com/wp-content/uploads/2017/01/Widescreen-Best-HD-Wallpaper.jpg" alt="hinh" />
                    </div>
                    <div className="item-slide">
                        <img src="http://hdwpro.com/wp-content/uploads/2017/01/Super-Best-HD.jpg" alt="hinh" />
                    </div>
                    <div className="item-slide">
                        <img src="http://hdwpro.com/wp-content/uploads/2017/01/Top-Best-HD-Wallpaper.jpg" alt="hinh" />
                    </div>
                    <div className="item-slide">
                        <img src="http://hdwpro.com/wp-content/uploads/2018/08/Natural-Fall-Wallpaper.jpg" alt="hinh" />
                    </div>
                </Carousel>
                <div className="form-group col-sm-4 col-sm-offset-4 input-search">
                    <div className="input-group input-group-lg center-block">
                        <input type="text" className="form-control" id="search" placeholder="Search for items, brands and inspiration at Lotte.Vn" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;