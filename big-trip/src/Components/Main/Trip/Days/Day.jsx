import React from "react";
import Points from "./Points/Points";
import moment from "moment";

export default function Day(props) {

    const transformDate = (date) => {
        return moment(date).format(`MMM D`).toUpperCase();
    };

    return (
        <li className="trip-days__item  day">
            <div className="day__info">
                <span className="day__counter">{props.numberDay}</span>
                <time className="day__date" dateTime={props.date}>{transformDate(props.date)}</time>
            </div>

            <Points points={props.points} offers={props.offers}
                    destinations={props.destinations}
                    updateType={props.updateType}
                    editablePoint={props.editablePoint}
                    startEditPoint={props.startEditPoint}
                    updateDestination={props.updateDestination}
                    undoChanges={props.undoChanges}
                    updatePoint={props.updatePoint}
                    deletePoint={props.deletePoint}
                    toggleOffer={props.toggleOffer} />
        </li>
    )
}
