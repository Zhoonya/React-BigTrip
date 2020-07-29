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

            <Points points={props.points} />
        </li>
    )
}
