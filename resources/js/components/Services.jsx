import React from "react";
import ImageBanner from "../../img/01.png";
import ImageBannerleft from "../../img/02.png";

const Services = () => {
    return (
        <>
            <section className="Services">
                <div className="container">
                    <div className="row">
                        <div className="col-auto col-md-8">
                            <img src={ImageBanner} />
                        </div>
                        <div className="col col-md-4">
                            <h1>SERVICES</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto col-md-5">
                            <h3 className="Services_text">
                                we are a roofing company that specializes in
                                providing quality at the time of performing a
                                roofing job, we specialize in roof replacement,
                                ceilings and roof repair
                            </h3>
                        </div>
                        <div className="col col-md-7">
                            <img
                                src={ImageBannerleft}
                                alt=""
                                className="Services_banner"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
