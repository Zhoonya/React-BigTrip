import React from "react";
import {filterPoints} from "../../../common";

export default function HeaderFilters(props) {

    const isDisabled = (filterParameter) => {
        const points = filterPoints(props.points, filterParameter);
        return !(points.length > 0);
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
