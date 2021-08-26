import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import LogoItem1 from "../../../img/bitmap_2.webp";
import LogoItem2 from "../../../img/bitmap_3.webp";
import LogoItem3 from "../../../img/bitmap_4.webp";

library.add(faFacebookF, faInstagram);

const Footer = () => {
    return (
        <>
            <section className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="Footer_no-paddin-left  col-md-12">
                            <h1>LICENSES</h1>
                            <div className="Footer_licences row">
                                <div className="col-sm-12  col-md-4  col-lg-4  not-padding text-center">
                                    <img
                                        src={LogoItem1}
                                        alt=""
                                        className="Footer_img"
                                    />
                                </div>
                                <div className="col-sm-12  col-md-4  col-lg-4  not-padding text-center">
                                    <img
                                        src={LogoItem3}
                                        alt=""
                                        className="Footer_img"
                                    />
                                </div>
                                <div className="col-sm-12  col-md-4  col-lg-4  not-padding text-center">
                                    <img
                                        src={LogoItem2}
                                        alt=""
                                        className="Footer_img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Footer Footer_line-top ">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12  col-md-8  col-lg-8  Footer_space-top-bottom">
                            <h1>GIVE US A CALL</h1>
                            <h3>
                                Call <a href="#">1.800.317.8882</a>
                            </h3>
                            <div className="row">
                                <div className="col-sm-12  col-md-9  col-lg-9 ">
                                    <p>
                                        {" "}
                                        Safety come first, we wil take care of
                                        you and your family's as well as your
                                        envioment's protection during the
                                        process,our deliveries are characterized
                                        by clean .
                                    </p>
                                </div>
                                <div className="Footer_no-paddin-left col-sm-12  col-md-3  col-lg-3 ">
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                    >
                                        Get Free Estimate
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="Footer_line-left  col-sm-12  col-md-4  col-lg-4 "></div>
                    </div>
                </div>
            </section>

            <section className="Footer Footer_line-top-esp">
                <div className="Fotter_mask-top-line"></div>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12  col-md-8  col-lg-8 ">
                            <div className="row">
                                <div className="Footer_no-paddin-left  col-sm-12  col-md-4  col-lg-4">
                                    <span className="Footer_col-title">
                                        Enlaces
                                    </span>
                                    <ul className="list-unstyled">
                                        <li className="">Services</li>
                                        <li className="">About us</li>
                                        <li className="">FAQ</li>
                                        <li className="">Contact</li>
                                    </ul>
                                </div>
                                <div className="Footer_line-left col-sm-12  col-md-4  col-lg-4 ">
                                    <span className="Footer_col-title">
                                        Contact
                                    </span>
                                    <ul className="list-unstyled">
                                        <li className=""> +1 (800)824-4440</li>
                                        <li className="">
                                            info@greendepartment.com
                                        </li>
                                        <li className="">Wichita, Kansas</li>
                                        <li className="">Miami, Florida</li>
                                    </ul>
                                </div>
                                <div className="Footer_line-left  col-sm-12  col-md-4  col-lg-4 ">
                                    <span className="Footer_col-title">
                                        Follow
                                    </span>
                                    <span className="Footer_follow">
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                            size="2x"
                                        />
                                    </span>
                                    <span className="Footer_follow">
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            size="2x"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="Footer_line-left  col-sm-12  col-md-4  col-lg-4 "></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
