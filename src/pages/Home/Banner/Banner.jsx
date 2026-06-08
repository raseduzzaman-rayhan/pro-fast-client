import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
            swipeable={true}
        >
            <div>
                <img src={bannerImg1} />
                <p className="legend text-2xl font-semibold">Track Order</p>
            </div>
            <div>
                <img src={bannerImg2} />
                <p className="legend text-2xl font-semibold">Explore Service</p>
            </div>
            <div>
                <img src={bannerImg3} />
                <p className="legend text-2xl font-semibold">24/7 Customer Support</p>
            </div>
        </Carousel>
    );
};

export default Banner;
