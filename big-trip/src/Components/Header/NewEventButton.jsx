import React from "react";

export default function NewEventButton(props) {
    return (
        <button onClick={props.startCreateNewPoint} className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    )
}
