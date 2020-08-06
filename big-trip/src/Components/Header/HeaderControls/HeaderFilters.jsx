import React from "react";
import {FILTER_PARAMETER} from "../../../const";

export default function HeaderFilters(props) {

    const isDisabled = (filterParameter) => {
        const now = new Date();
        const points = () => {
            switch (filterParameter) {
                case FILTER_PARAMETER.future:
                    return props.points.slice().filter((point) => {
                        return new Date(point.date_from) > now;
                    });
                case FILTER_PARAMETER.past:
                    return  props.points.slice().filter((point) => {
                        return new Date(point.date_to) < now;
                    });
                default:
                    return props.points;
            }
        };
        return !(points().length > 0);
    };

    return (
        <div>
            <h2 className="visually-hidden">Filter events</h2>
            <form className="trip-filters" action="#" method="get">
                <div className="trip-filters__filter">
                    <input onChange={(e) => {
                        props.changeFilterParameter(e.currentTarget.value)
                    }} id="filter-everything"
                           className="trip-filters__filter-input  visually-hidden" type="radio"
                           name="trip-filter" value="everything" defaultChecked />
                    <label className="trip-filters__filter-label" htmlFor="filter-everything">Everything</label>
                </div>

                <div className="trip-filters__filter">
                    <input onChange={(e) => {
                        props.changeFilterParameter(e.currentTarget.value)
                    }} id="filter-future" className="trip-filters__filter-input  visually-hidden"
                           type="radio" name="trip-filter" value="future" disabled={isDisabled("future")} />
                    <label className="trip-filters__filter-label"
                           htmlFor="filter-future">Future</label>
                </div>

                <div className="trip-filters__filter">
                    <input onChange={(e) => {
                        props.changeFilterParameter(e.currentTarget.value)
                    }} id="filter-past" className="trip-filters__filter-input  visually-hidden"
                           type="radio" name="trip-filter" value="past" disabled={isDisabled("past")} />
                    <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
                </div>

                <button className="visually-hidden" type="submit">Accept filter</button>
            </form>
        </div>
    )
}
