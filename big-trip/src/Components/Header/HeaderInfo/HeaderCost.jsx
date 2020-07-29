import React from "react";

export default function HeaderCost(props) {

    const getCommonPrice = () => {
        let cost = 0;
        props.points.forEach((point) => {
            cost += Number(point.base_price);
            if (point.offers.length > 0) {
                point.offers.forEach((offer) => {
                    cost += Number(offer.price);
                });
            }
        });
        return cost;
    };

    return (
        <p className="trip-info__cost">
            Total: &euro;&nbsp;<span className="trip-info__cost-value">{getCommonPrice()}</span>
        </p>
    )
}
