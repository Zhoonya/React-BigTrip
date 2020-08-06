import React from "react";
import {LOCATIONS, TRANSPORTS} from "../../../../../const";
import Details from "./Details";
import Flatpickr from 'react-flatpickr';

export default function PointCreating(props) {

    const getPreposition = (type) => {
        if (LOCATIONS.includes(type.toLowerCase())) {
            return "in";
        } else {
            return "to";
        }
    };

    const transformType = (type) => {
        return type[0].toUpperCase() + type.slice(1);
    };

    const createDestinationsList = () => {
        return props.destinations.map((destination, index) => {
            return (
                <option key={destination.name} value={destination.name}></option>
            )
        })
    };

    const createTypesList = () => {

        const createTransferList = () => {
            return (
                TRANSPORTS.map((type) => {
                    const isChecked = props.editablePoint.type === type;
                    return (
                        <div className="event__type-item" key={type}>
                            <input onChange={(e) => {
                                props.updateType(e.currentTarget.value);
                            }} id={`event-type-${type}-1`} className="event__type-input  visually-hidden"
                                   type="radio" name="event-type" value={type} checked={isChecked} />
                            <label className={`event__type-label  event__type-label--${type}`}
                                   htmlFor={`event-type-${type}-1`}>{type}</label>
                        </div>
                    )
                })
            )
        };

        const createActivityList = () => {
            return (
                LOCATIONS.map((type) => {
                    const isChecked = props.editablePoint.type === type;
                    return (
                        <div className="event__type-item" key={type}>
                            <input onChange={(e) => {
                                props.updateType(e.currentTarget.value);
                            }} id={`event-type-${type}-1`} className="event__type-input  visually-hidden"
                                   type="radio" name="event-type" value={type} checked={isChecked} />
                            <label className={`event__type-label  event__type-label--${type}`}
                                   htmlFor={`event-type-${type}-1`}>{type}</label>
                        </div>
                    )
                })
            )
        };

        return (
            <div className="event__type-list">
                <fieldset className="event__type-group">
                    <legend className="visually-hidden">Transfer</legend>
                    {createTransferList()}
                </fieldset>
                <fieldset className="event__type-group">
                    <legend className="visually-hidden">Activity</legend>
                    {createActivityList()}
                </fieldset>
            </div>
        );
    };

    return (
        <li className="trip-days__item  day">
            <div className="day__info"></div>
            <ul className="trip-events__list">
                <li className="trip-events__item">
                    <form className="event  event--edit" action="#" method="post">
                        <header className="event__header">
                            <div className="event__type-wrapper">
                                <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
                                    <span className="visually-hidden">Choose event type</span>
                                    <img className="event__type-icon" width="17" height="17" src={require(`../../../../../img/icons/${props.editablePoint.type}.png`)}
                                         alt="Event type icon" />
                                </label>
                                <input className="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" />
                                {createTypesList()}
                            </div>

                            <div className="event__field-group  event__field-group--destination">
                                <label className="event__label  event__type-output" htmlFor="event-destination-1">
                                    {transformType(props.editablePoint.type)} {getPreposition(props.editablePoint.type)}
                                </label>
                                <input onChange={(e)=> {
                                    props.updateDestination(e.currentTarget.value);}} className="event__input  event__input--destination" id="event-destination-1" type="text"
                                       name="event-destination" value={props.editablePoint.destination.name} list="destination-list-1" />
                                <datalist id="destination-list-1">
                                    {createDestinationsList()}
                                </datalist>
                            </div>

                            <div className="event__field-group  event__field-group--time">
                                <label className="visually-hidden" htmlFor="event-start-time-1">
                                    From
                                </label>
                                <Flatpickr
                                    options={{
                                        altInput: true,
                                        altFormat: `d/m/y H:i`,
                                        allowInput: true,
                                        enableTime: true,
                                        [`time_24hr`]: true,
                                        defaultDate: props.editablePoint.date_from || `today`,}}
                                    onChange={(v) => {
                                        props.updateDateFrom(v[0]);
                                    }}
                                    className="event__input  event__input--time" id="event-start-time-1" type="text"
                                    name="event-start-time" value={props.editablePoint.date_from} data-enable-time />


                                &mdash;
                                <label className="visually-hidden" htmlFor="event-end-time-1">
                                    To
                                </label>
                                <Flatpickr
                                    options={{altInput: true,
                                        altFormat: `d/m/y H:i`,
                                        allowInput: true,
                                        enableTime: true,
                                        [`time_24hr`]: true,
                                        minDate: props.editablePoint.date_from,
                                        defaultDate: props.editablePoint.date_to || props.editablePoint.date_from,}}
                                    onChange={(v) => {
                                        props.updateDateTo(v[0])
                                    }} className="event__input  event__input--time" id="event-end-time-1" type="text"
                                    name="event-end-time" value={props.editablePoint.date_to} />
                            </div>

                            <div className="event__field-group  event__field-group--price">
                                <label className="event__label" htmlFor="event-price-1">
                                    <span className="visually-hidden">Price</span>
                                    &euro;
                                </label>
                                <input onChange={(e) => {
                                    props.updatePrice(e.currentTarget.value);
                                }} className="event__input  event__input--price" id="event-price-1" type="text"
                                       name="event-price" value={props.editablePoint.base_price} />
                            </div>

                            <button className="event__save-btn  btn  btn--blue" type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.createPoint(props.editablePoint);
                                    }}>Save</button>
                            <button onClick={(e) => {
                                e.preventDefault();

                                props.undoChanges();
                            }} className="event__reset-btn" type="reset">Cancel</button>

                        </header>

                        <Details editablePoint={props.editablePoint} offers={props.offers} destinations={props.destinations} toggleOffer={props.toggleOffer}/>

                    </form>
                </li>
            </ul>
        </li>
    )
}
