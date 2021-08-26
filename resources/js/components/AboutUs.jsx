import React from "react";
import ArrowDown from "../../img/group.webp";

const AboutUs = () => {
    return (
        <>
            <section className="Aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>WHAT IS A GREEN DEPARTMENT? </h1>
                            <p>
                                We are a leader construction company with high
                                capacity for any residential or commercial
                                project, no matter if you're in Kansas or
                                Florida..
                            </p>
                            <button
                                type="button"
                                class="btn btn-default btn-circle btn-lg"
                            >
                                <img src={ArrowDown} alt="" className="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
