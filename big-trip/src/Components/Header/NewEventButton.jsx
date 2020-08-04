import React from "react";

export default function NewEventButton(props) {

    const isDisabled = props.newPoint;

    return (
        <button onClick={props.startCreateNewPoint} className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled={isDisabled}>New event</button>
    )
}
