import React from "react";

const Slider = ({ videoSource, children, blur }) => {
    return (
        <>
            <section>
                <div className="Slider text-center">
                    <div className="">
                        <video
                            style={{
                                filter: `blur(${blur}px)`,
                                WebkitFilter: `blur(${blur}px)`
                            }}
                            autoPlay="autoplay"
                            loop="loop"
                            muted
                            // ref={video}\
                            width="100%"
                            height="100%"
                            id="video-id"
                            className="video"
                        >
                            {/* TODO make it accept multiple media types */}
                            <source src={videoSource} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {children}
                    </div>
                    {/* <span id="video-bottom"></span> */}
                </div>
            </section>
        </>
    );
};

export default Slider;
