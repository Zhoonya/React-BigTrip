import React from "react";
import {SORT_TYPE} from "../../../const";

export default function Sorting(props) {

    const createDay = () => {
        return props.sortType === SORT_TYPE.event ? "Day" : "";
    };

    return (
        <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span className="trip-sort__item  trip-sort__item--day">{createDay()}</span>

            <div className="trip-sort__item  trip-sort__item--event">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.id);
                }} id="sort-event" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-event" defaultChecked/>
                <label className="trip-sort__btn" htmlFor="sort-event">Event</label>
            </div>

            <div className="trip-sort__item  trip-sort__item--time">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.id);
                }}  id="sort-time" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-time" />
                <label className="trip-sort__btn" htmlFor="sort-time">Time</label>
            </div>

            <div className="trip-sort__item  trip-sort__item--price">
                <input onChange={(e) => {
                    props.changeSortType(e.currentTarget.id);
                }}  id="sort-price" className="trip-sort__input  visually-hidden" type="radio"
                       name="trip-sort" value="sort-price" />
                <label className="trip-sort__btn" htmlFor="sort-price">Price</label>
            </div>

            <span className="trip-sort__item  trip-sort__item--offers">Offers</span>
        </form>
    )
}

// export default class Sorting extends React.Component{
//     state = {
//         sortType: this.props.sortType,
//     };
//
//     _createDay() {
//         return this.props.sortType === SORT_TYPE.event ? "Day" : "";
//     };
//
//     _changeLocalSortType(sortType) {
//         this.setState({
//             sortType: sortType,
//         })
//     };
//
//     render() {
//         return (
//             <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
//                 <span className="trip-sort__item  trip-sort__item--day">{this._createDay()}</span>
//
//                 <div className="trip-sort__item  trip-sort__item--event">
//                     <input onChange={(e) => {
//                         this._changeLocalSortType(e.currentTarget.id);
//                         this.props.changeSortType(this.state.sortType);
//                     }} id="sort-event" className="trip-sort__input  visually-hidden" type="radio"
//                            name="trip-sort" value={"sort-event"} defaultChecked />
//                     <label className="trip-sort__btn" htmlFor="sort-event">Event</label>
//                 </div>
//
//                 <div className="trip-sort__item  trip-sort__item--time">
//                     <input onChange={(e) => {
//                         this._changeLocalSortType(e.currentTarget.id);
//                         this.props.changeSortType(this.state.sortType);
//                     }}  id="sort-time" className="trip-sort__input  visually-hidden" type="radio"
//                            name="trip-sort" value="sort-time" />
//                     <label className="trip-sort__btn" htmlFor="sort-time">Time</label>
//                 </div>
//
//                 <div className="trip-sort__item  trip-sort__item--price">
//                     <input onChange={(e) => {
//                         this._changeLocalSortType(e.currentTarget.id);
//                         this.props.changeSortType(this.state.sortType);
//                     }}  id="sort-price" className="trip-sort__input  visually-hidden" type="radio"
//                            name="trip-sort" value="sort-price" />
//                     <label className="trip-sort__btn" htmlFor="sort-price">Price</label>
//                 </div>
//
//                 <span className="trip-sort__item  trip-sort__item--offers">Offers</span>
//             </form>
//         )
//     }
// }
