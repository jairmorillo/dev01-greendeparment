import React from "react";

const ServicesEspecialItem = props => {
    return (
        <>
            <div className="ServicesEspecial_Item-container">
                <div className={`ServicesEspecial_Item-${props.number}`}>
                    <h3>{props.title}</h3>
                    <div className="ServicesEspecial_Item-mask"></div>
                </div>
                <p>{props.content}</p>
            </div>
        </>
    );
};

export default ServicesEspecialItem;
