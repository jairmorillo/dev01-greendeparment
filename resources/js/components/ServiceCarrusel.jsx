import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceItemCarrusel from "./ServiceItemCarrusel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { divide } from "lodash";

library.add(faArrowRight, faArrowLeft);

const ServiceCarrusel = () => {
    const data = {
        services: [
            {
                id: "1B",
                title: "ROOF REPLACEMENT ",
                content:
                    "The Green Department has successfully re-roofed thousands of square feet in the state of Florida. When it's time to replace your roof, the Green Department will perform a roof that fits your needs. Count on us for a quality installation.",
                img: "/images/replaces.jpg",
                url: "/"
            },
            {
                id: "2B",
                title: "ROOF REPAIR",
                content:
                    "we have quality personnel prepared to attend any kind of inconvenience you may have with your roof we also provide preventive maintenance in order to extend the life time of the roof.",
                img: "/images/repair.jpg",
                url: "/"
            },
            {
                id: "3B",
                title: "CEILINGS ",
                content:
                    "we make sure that this interior surface can look its best and with the best finish that only the green department can provide, always working with the best quality materials so that your ceiling is the protagonist or your home.  ",
                img: "/images/ceiling.png",
                url: "/"
            }
        ]
    };

    //var services = JSON.stringify(data);
    //console.log(services.services);

    return (
        <>
            <section className="Carrusel">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    customLeftArrow={
                        <div className="Carrusel_LeftArrow">
                            <div className="Carrusel_container-icon">
                                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                            </div>
                        </div>
                    }
                    customRightArrow={
                        <div className="Carrusel_RightArrow">
                            <div className="Carrusel_container-icon">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="1x"
                                />
                            </div>
                        </div>
                    }
                    dotListClass=""
                    draggable
                    focusOnSelect={true}
                    infinite={true}
                    itemClass=""
                    keyBoardControl={true}
                    minimumTouchDrag={40}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 576,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 576
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {data.services.map(item => (
                        <ServiceItemCarrusel
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            img={item.img}
                            url={item.url}
                        />
                    ))}
                </Carousel>
            </section>
        </>
    );
};

export default ServiceCarrusel;
