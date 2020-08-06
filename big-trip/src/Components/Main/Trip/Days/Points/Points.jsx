import React from "react";
import PointContainer from "./PointContainer";

export default function Points(props) {

    const renderPoints = () => {
        return props.points.map((point) => {
            return <PointContainer key={point.id} point={point} editablePoint={props.editablePoint}/>
        })
    };

    return (
        <ul className="trip-events__list">
            {renderPoints()}
        </ul>
    )
}
