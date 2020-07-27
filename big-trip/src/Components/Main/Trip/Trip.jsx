import React from "react";
import Sorting from "./Sorting";
import DaysContainer from "./Days/DaysContainer";

export default function Trip() {
    return (
        <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            <Sorting/>
            <DaysContainer/>
        </section>
    )
}

