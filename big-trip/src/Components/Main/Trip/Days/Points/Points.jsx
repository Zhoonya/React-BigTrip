import React from "react";
import Point from "./Point";
import Day from "../Day";

export default function Points(props) {

    const renderPoints = () => {
        return props.points.map((point) => {
            return <Point key={point.index} point={point}  offers={props.offers}
                          destinations={props.destinations}
                          updateType={props.updateType}
                          editablePoint={props.editablePoint}
                          startEditPoint={props.startEditPoint}
                          updateDestination={props.updateDestination}
                          undoChanges={props.undoChanges}
                          updatePoint={props.updatePoint}
                          deletePoint={props.deletePoint}
                          toggleOffer={props.toggleOffer} />
        })
    };

    return (
        <ul className="trip-events__list">
            {renderPoints()}
        </ul>
    )
}
