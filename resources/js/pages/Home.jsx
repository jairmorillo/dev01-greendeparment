import React from "react";
import Slider from "../components/Slider";
import AboutUs from "../components/Aboutus";
import Services from "../components/Services";
import ServiceCarrusel from "../components/ServiceCarrusel";
import ServicesEspecial from "../components/ServicesEspecial";
import Whyus from "../components/Whyus";
import ImgSlider from "../../img/fondo.webp";
import ArrowDown from "../../img/group.webp";

const Home = () => {
    const videoSource = "/video/DJi0124_360p.mp4";

    return (
        <>
            <Slider blur={2} videoSource={videoSource}>
                <div className="Slider_mask">
                    <div className="Slider_content">
                        <h1>GENERAL CONTRACTORS &#38; RENOVATION SERVICES </h1>
                        <h3 className="Slider_text">
                            GET YOUR CUSTOM QUOTE IN LESS THAN 24 HOURS
                        </h3>
                        <button
                            type="button"
                            class="btn btn-default btn-circle btn-lg"
                        >
                            <img src={ArrowDown} alt="" className="" />
                        </button>
                    </div>
                </div>
            </Slider>
            <AboutUs />
            <Services />
            <ServiceCarrusel />
            <ServicesEspecial />
            <Whyus />
        </>
    );
};

export default Home;
