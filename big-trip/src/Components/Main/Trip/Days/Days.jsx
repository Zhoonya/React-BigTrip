import React from "react";
import Day from "./Day";
import moment from "moment/moment";
import PointContainer from "./Points/PointContainer";

export default function Days(props) {

    const getDaysList = () => {
        let days = props.points.map((point) => {
            const date = new Date(point.date_from);
            return moment(date).format(`MM DD YYYY`);
        });
        days = Array.from(new Set(days)).map((day) => {
            return new Date(day);
        }).sort((day) => {
            return day.a - day.b;
        });
        return days;
    };

    const getPointsOfThisDay = (date) => {
        return props.points.filter((point) => {
            const pointDate = new Date(point.date_from);
            return date.getDate() === pointDate.getDate() && date.getMonth() === pointDate.getMonth() && date.getFullYear() === pointDate.getFullYear();
        })
    };

    const renderDays = () => {
        const days = getDaysList();
        return days.map((day, index) => {
            return <Day key={day} date={day} points={getPointsOfThisDay(day)} numberDay={index + 1} editablePoint={props.editablePoint}/>
        })
    };

    return (
        <ul className="trip-days">
            {props.newPoint ?
                <li className="trip-days__item day">
                    <div className="day__info"></div>
                    <ul className="trip-events__list">
                        <PointContainer newPoint={props.newPoint} />
                    </ul>
                </li>
                : ""}
            {renderDays()}
        </ul>
    )
}
