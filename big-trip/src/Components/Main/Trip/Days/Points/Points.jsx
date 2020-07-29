import React from "react";
import PointContainer from "./PointContainer";

export default function Points(props) {

    const renderPoints = () => {
        return props.points.map((point) => {
            return <PointContainer key={point.index} point={point} />
        })
    };

    return (
        <ul className="trip-events__list">
            {renderPoints()}
        </ul>
    )
}
