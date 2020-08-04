import React from "react";
import moment from "moment";
import {LOCATIONS} from "../../../../../const";

export default function PointViewing(props) {

    const transformDate = (date) => {
        return moment(date).format("HH:mm")
    };

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

    const getDuration = () => {
        const difference = Math.floor((new Date(props.point.date_to) - new Date(props.point.date_from)) / 60000);
        if (difference < 60) {
            return (`${difference}M`);
        } else if (difference >= 60 && difference < 1440) {
            const hour = Math.floor(difference / 60);
            const minute = difference - (hour * 60);
            return (`${hour}H ${minute}M`);
        } else {
            let remainder = difference;
            const day = Math.floor(difference / 1440);
            remainder = remainder - (day * 1440);
            const hour = Math.floor(remainder / 60);
            remainder = remainder - (hour * 60);
            const minute = remainder;
            return (`${day}D ${hour}H ${minute}M`);
        }
    };

    getDuration();

    const createOffersList = (offers) => {
        if (offers.length > 0) {
            const createOffers = (offers) => {
                return offers.map((offer, index) => {
                    return (
                            <li className="event__offer" key={index}>
                                <span className="event__offer-title">{offer.title}</span>
                                &nbsp;+&nbsp;&euro;&nbsp;
                                <span className="event__offer-price">{offer.price}</span>
                            </li>
                        )
                })
            };
            return (
                <ul className="event__selected-offers">
                    {createOffers(offers)}
                </ul>
            )
        } else {
            return "";
        }
    };

    return (
        <li className="trip-events__item">
            <div className="event">
                <div className="event__type">
                    <img className="event__type-icon" width="42" height="42"
                         src={require(`../../../../../img/icons/${props.point.type}.png`)} alt="Event type icon" />
                </div>
                <h3 className="event__title">{transformType(props.point.type)} {getPreposition(props.point.type)} {props.point.destination.name}</h3>

                <div className="event__schedule">
                    <p className="event__time">
                        <time className="event__start-time" dateTime="2019-03-18T10:30">{transformDate(props.point.date_from)}
                        </time>
                        &mdash;
                        <time className="event__end-time" dateTime="2019-03-18T11:00">{transformDate(props.point.date_to)}
                        </time>
                    </p>
                    <p className="event__duration">{getDuration()}</p>
                </div>

                <p className="event__price">
                    &euro;&nbsp;<span className="event__price-value">{props.point.base_price}</span>
                </p>

                <h4 className="visually-hidden">Offers:</h4>
                {createOffersList(props.point.offers)}

                <button className="event__rollup-btn" type="button" onClick={() => {
                    props.startEditPoint(props.point.id);
                    props.activateEditMode();
                }}>
                    <span className="visually-hidden">Open event</span>
                </button>
            </div>
        </li>
    )
}
