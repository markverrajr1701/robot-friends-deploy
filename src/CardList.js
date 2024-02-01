import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (
        <div className="tc">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardList;