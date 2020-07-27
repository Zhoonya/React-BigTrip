import React from "react";

export default function Details(props) {

    const createOffers = (type) => {
        let offers = props.offers.filter((offer) => {
            return offer.type === type;
        });

        if (offers.length > 0) {
            offers = offers[0].offers;
        }

        const checkedOffers = props.editablePoint.offers.map((offer) => {
            return offer.title;
        });

        if (offers.length > 0) {
            const offersList = offers.map((offer, index) => {
                const isChecked = checkedOffers.includes(offer.title);
                const offerId = offer.title.split(" ").join("-");
                return (
                    <div className="event__offer-selector" key={index}>
                        <input onChange={(e) => {props.toggleOffer(e.currentTarget.id, props.editablePoint.type)}}
                               className="event__offer-checkbox  visually-hidden" id={offerId}
                               type="checkbox" name="event-offer-luggage" checked={isChecked} />
                        <label className="event__offer-label" htmlFor={offerId}>
                            <span className="event__offer-title">{offer.title}</span>
                            &nbsp;+&nbsp;&euro;&nbsp;
                            <span className="event__offer-price">{offer.price}</span>
                        </label>
                    </div>
                )
            });

            return (
                <section className="event__section  event__section--offers">
                    <h3 className="event__section-title  event__section-title--offers">Offers</h3>
                    <div className="event__available-offers">
                        {offersList}
                    </div>
                </section>
            )
        } else {
            return "";
        }

    };

    const createDestinationDescription = () => {
        const createPictures = () => {
            if (props.editablePoint.destination.pictures) {
                return (
                    props.editablePoint.destination.pictures.map((picture) => {
                        return (
                            <img className="event__photo" src={picture.src} alt={picture.description}  />
                        )
                    })
                )
            } else {
                return "";
            }

        };

        return (
            <section className="event__section  event__section--destination">
                <h3 className="event__section-title  event__section-title--destination">Destination</h3>
                <p className="event__destination-description">{props.editablePoint.destination.description}</p>

                <div className="event__photos-container">
                    <div className="event__photos-tape">
                        {createPictures()}
                    </div>
                </div>
            </section>
        )

    };


    return (
        <section className="event__details">
            {createOffers(props.editablePoint.type)}

            {createDestinationDescription()}


        </section>
    )

}
