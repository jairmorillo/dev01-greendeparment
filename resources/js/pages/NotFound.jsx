import React from "react";
import ImgURL from "../../img/To-the-stars-bro.svg";
const NotFound = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-right Page_404">
                        <img src={ImgURL} className="Not_found-img" />
                    </div>
                    <div className="col-4 text-center ">
                        <h1 className="text-left">404</h1>
                        <h3 className="text-left">
                            uff something bad happened
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
