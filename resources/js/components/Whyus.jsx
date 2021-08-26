import React from "react";
import whyusimg from "../../img/whyus.webp";
import iconone from "../../img/001-life-insurance.webp";
import icontwo from "../../img/002-support.webp";
import icontree from "../../img/003-credit-card.webp";

const Whyus = () => {
    return (
        <>
            <section className="Whyus">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1 className="Whyus_title">WHY US ?</h1>
                            <img
                                src={whyusimg}
                                alt="why us"
                                className="Whyus_title-img"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="row Whyus_content margin-top">
                                <div className="col-sm-12 col-md-2 col-lg-2 Whyus_content-img  ">
                                    <span>
                                        <img
                                            src={icontwo}
                                            alt=""
                                            className="Whyus_img"
                                        />
                                    </span>
                                </div>
                                <div className="col-sm-12 col-md-10 col-lg-10">
                                    <p className="">
                                        Practice makes perfect, and working with
                                        roofs every day makes us a little more
                                        efficient every day. This is important
                                        when it comes to inclement weather,
                                        because you don't want certain parts of
                                        your home to be exposed for too long.
                                        That's why we care enough to handle your
                                        roofing job in a matter of days.
                                    </p>
                                </div>
                            </div>
                            <div className="row Whyus_content">
                                <div className="col-sm-12 col-md-2 col-lg-2 Whyus_content-img">
                                    <span>
                                        <img
                                            src={icontree}
                                            alt=""
                                            className="Whyus_img"
                                        />
                                    </span>
                                </div>
                                <div className="col-sm-12 col-md-10 col-lg-10">
                                    <p className="">
                                        We always work with the best material on
                                        the market while looking for cost
                                        effectiveness, with a properly installed
                                        roof, you can avoid leaks, which can
                                        prevent mold, which can protect your
                                        family from a number of respiratory
                                        problems, keeping in mind that quality
                                        work will always be the priority.
                                    </p>
                                </div>
                            </div>
                            <div className="row Whyus_content">
                                <div className="col-sm-12 col-md-2 col-lg-2 Whyus_content-img">
                                    <span>
                                        <img
                                            src={iconone}
                                            alt=""
                                            className="Whyus_img"
                                        />
                                    </span>
                                </div>
                                <div className="col-sm-12 col-md-10 col-lg-10">
                                    <p className="">
                                        Safety is always paramount on every
                                        roofing job. We have the right equipment
                                        to get to every part of the roof and get
                                        the job done safely. We are also highly
                                        trained to work on roofs because we do
                                        it every day, we are trained in the best
                                        ways to keep ourselves and our
                                        co-workers safe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Whyus;
