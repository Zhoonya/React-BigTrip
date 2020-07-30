import React from "react";
import {SORT_TYPE} from "../../../const";

export default function Sorting(props) {

    const createDay = () => {
        return props.sortType === SORT_TYPE.date ? "Day" : "";
    };

    return (
        <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span className="trip-sort__item  trip-sort__item--day">{createDay()}</span>

            <div className="trip-sort__item  trip-sort__item--event">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.value);
                }} id="sort-event" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-event" defaultChecked/>
                <label className="trip-sort__btn" htmlFor="sort-event">Event</label>
            </div>

            <div className="trip-sort__item  trip-sort__item--time">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.value);
                }}  id="sort-time" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-time" />
                <label className="trip-sort__btn" htmlFor="sort-time">
                    Time
                    <svg className="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                        <path
                            d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                    </svg>
                </label>
            </div>

            <div className="trip-sort__item  trip-sort__item--price">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.value);
                }}  id="sort-price" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-price" />
                <label className="trip-sort__btn" htmlFor="sort-price">
                    Price
                    <svg className="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                        <path
                            d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                    </svg>
                </label>
            </div>

            <span className="trip-sort__item  trip-sort__item--offers">Offers</span>
        </form>
    )
}
