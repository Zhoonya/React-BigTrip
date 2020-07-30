import React from "react";
import moment from "moment";

export default function HeaderRoute(props) {

    const points = props.points.sort((a, b) => new Date(a.date_to) - new Date(b.date_to));

    const createRouteTemplate = () => {
        if (points.length > 0) {
            const destinations = points.slice().map((item) => {
                return item.destination.name;
            });
            if (destinations.length > 3) {
                return (`${destinations[0]} - ... - ${destinations[destinations.length - 1]}`);
            } else {
                return (`${destinations.join(` - `)}`);
            }
        } else {
            return (``);
        }
    };

    const createDatesTemplate = () => {
        if (points.length > 0) {
            const startDate = moment(points[0].date_from).format("MMM D");
            const endDate = moment(points[points.length - 1].date_to).format("MMM D");
            return (`${startDate} - ${endDate}`);
        } else {
            return (``);
        }
    };

    return (
        <div className="trip-info__main">
            <h1 className="trip-info__title">{createRouteTemplate()}</h1>
            <p className="trip-info__dates">{createDatesTemplate()}</p>
        </div>
    )
}
