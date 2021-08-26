import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServicesEspecialItem from "./ServicesEspecialItem";
const ServicesEspecial = () => {
    return (
        <>
            <section className="ServicesEspecial">
                <div className="container">
                    <h1>SPECIALIZED IN DIFFERENT TYPES OF ROOFS</h1>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={5000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        customLeftArrow={<div></div>}
                        customRightArrow={<div></div>}
                        dotListClass=""
                        draggable
                        focusOnSelect={true}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 768
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            tablet: {
                                breakpoint: {
                                    max: 768,
                                    min: 576
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 576,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={2}
                        swipeable
                    >
                        <ServicesEspecialItem
                            title="Shingle roof"
                            content=""
                            number="one"
                        />
                        <ServicesEspecialItem
                            title="Metal roof"
                            content=""
                            number="two"
                        />
                        <ServicesEspecialItem
                            title="Tile roof"
                            content=""
                            number="tree"
                        />
                        <ServicesEspecialItem
                            title="Flat roof"
                            content=""
                            number="four"
                        />
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default ServicesEspecial;
