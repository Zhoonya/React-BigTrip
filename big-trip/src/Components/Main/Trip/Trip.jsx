import React from "react";
import DaysContainer from "./Days/DaysContainer";
import SortingContainer from "./SortingContainer";

export default function Trip() {
    return (
        <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            <SortingContainer/>
            <DaysContainer/>
        </section>
    )
}

