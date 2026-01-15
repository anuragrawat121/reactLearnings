import React from "react";

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} />
            <h2 className="name">{props.user}</h2>
            <p>HEY</p>
            <button className="view-button">View Profile</button>
        </div>
    );
};

export default Card;
