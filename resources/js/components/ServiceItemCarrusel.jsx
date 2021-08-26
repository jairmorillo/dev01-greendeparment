import React from "react";
import SliderImg from "../../img/slider1.webp";

const ServiceItemCarrusel = props => {
    return (
        <>
            <div className="container SliderCarrusel" key={props.id}>
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h1>ROOFING</h1>
                        <img
                            src={props.img}
                            alt="Slider 01"
                            className="SliderCarrusel_image"
                        />
                    </div>
                    <div className="col-sm-12 col-md-4 ol-md-4">
                        <h3>{props.title}</h3>
                        <p>{props.content}</p>
                        <a href={props.url}>
                            <button
                                type="button"
                                className="btn btn-outline-success"
                            >
                                See More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceItemCarrusel;
