import React from "react";

export default function HeaderFilters(props) {
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
                           type="radio" name="trip-filter" value="future" />
                    <label className="trip-filters__filter-label"
                           htmlFor="filter-future">Future</label>
                </div>

                <div className="trip-filters__filter">
                    <input onChange={(e) => {
                        props.changeFilterParameter(e.currentTarget.value)
                    }} id="filter-past" className="trip-filters__filter-input  visually-hidden"
                           type="radio" name="trip-filter" value="past" />
                    <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
                </div>

                <button className="visually-hidden" type="submit">Accept filter</button>
            </form>
        </div>
    )
}
