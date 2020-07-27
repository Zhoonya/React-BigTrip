import React from "react";
import {LOCATIONS} from "../../../../../const";
import Details from "./Details";
import moment from "moment";

export default function PointEdit(props) {

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

    const transformDate = (date) => {
        return moment(date).format("DD/MM/YY HH:mm");
    };

    const createDestinationsList = () => {
        return props.destinations.map((destination, index) => {
            return (
                <option key={index} value={destination.name}></option>
            )
        })
    };

    return (
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

                            <div className="event__type-list">
                                <fieldset className="event__type-group">
                                    <legend className="visually-hidden">Transfer</legend>

                                    <div className="event__type-item">
                                        <input id="event-type-taxi-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="taxi" />
                                            <label className="event__type-label  event__type-label--taxi"
                                                   htmlFor="event-type-taxi-1">Taxi</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-bus-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="bus" />
                                            <label className="event__type-label  event__type-label--bus"
                                                   htmlFor="event-type-bus-1">Bus</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-train-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="train" />
                                            <label className="event__type-label  event__type-label--train"
                                                   htmlFor="event-type-train-1">Train</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-ship-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="ship" />
                                            <label className="event__type-label  event__type-label--ship"
                                                   htmlFor="event-type-ship-1">Ship</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-transport-1"
                                               className="event__type-input  visually-hidden" type="radio"
                                               name="event-type" value="transport" />
                                            <label className="event__type-label  event__type-label--transport"
                                                   htmlFor="event-type-transport-1">Transport</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-drive-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="drive" />
                                            <label className="event__type-label  event__type-label--drive"
                                                   htmlFor="event-type-drive-1">Drive</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-flight-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="flight" checked />
                                            <label className="event__type-label  event__type-label--flight"
                                                   htmlFor="event-type-flight-1">Flight</label>
                                    </div>
                                </fieldset>

                                <fieldset className="event__type-group">
                                    <legend className="visually-hidden">Activity</legend>

                                    <div className="event__type-item">
                                        <input id="event-type-check-in-1" className="event__type-input  visually-hidden"
                                               type="radio" name="event-type" value="check-in" />
                                            <label className="event__type-label  event__type-label--check-in"
                                                   htmlFor="event-type-check-in-1">Check-in</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-sightseeing-1"
                                               className="event__type-input  visually-hidden" type="radio"
                                               name="event-type" value="sightseeing" />
                                            <label className="event__type-label  event__type-label--sightseeing"
                                                   htmlFor="event-type-sightseeing-1">Sightseeing</label>
                                    </div>

                                    <div className="event__type-item">
                                        <input id="event-type-restaurant-1"
                                               className="event__type-input  visually-hidden" type="radio"
                                               name="event-type" value="restaurant" />
                                            <label className="event__type-label  event__type-label--restaurant"
                                                   htmlFor="event-type-restaurant-1">Restaurant</label>
                                    </div>
                                </fieldset>
                            </div>
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
                        <input className="event__input  event__input--time" id="event-start-time-1" type="text"
                               name="event-start-time" value={transformDate(props.editablePoint.date_from)} />
                            &mdash;
                            <label className="visually-hidden" htmlFor="event-end-time-1">
                                To
                            </label>
                            <input className="event__input  event__input--time" id="event-end-time-1" type="text"
                                   name="event-end-time" value={transformDate(props.editablePoint.date_to)} />
                    </div>

                    <div className="event__field-group  event__field-group--price">
                        <label className="event__label" htmlFor="event-price-1">
                            <span className="visually-hidden">Price</span>
                            &euro;
                        </label>
                        <input className="event__input  event__input--price" id="event-price-1" type="text"
                               name="event-price" value={props.editablePoint.base_price} />
                    </div>

                    <button className="event__save-btn  btn  btn--blue" type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                props.updatePoint(props.editablePoint.id, props.editablePoint);
                                props.deactivateEditMode();
                            }}>Save</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        props.deletePoint(props.editablePoint.id);
                        props.deactivateEditMode();
                    }} className="event__reset-btn" type="reset">Delete</button>

                    <input id="event-favorite-1" className="event__favorite-checkbox  visually-hidden" type="checkbox"
                           name="event-favorite" checked />
                        <label className="event__favorite-btn" htmlFor="event-favorite-1">
                            <span className="visually-hidden">Add to favorite</span>
                            <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                                <path
                                    d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                            </svg>
                        </label>

                        <button className="event__rollup-btn" type="button" onClick={() => {
                            props.deactivateEditMode();
                            props.undoChanges()}}>
                            <span className="visually-hidden">Open event</span>
                        </button>
                </header>

                <Details editablePoint={props.editablePoint} offers={props.offers} destinations={props.destinations} toggleOffer={props.toggleOffer}/>

            </form>
        </li>
    )
}
