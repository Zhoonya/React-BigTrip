import React from "react";

export default function Details(props) {

    let offers = props.offers.filter((offer) => {
        return offer.type === props.editablePoint.type;
    })[0].offers;

    const createOffers = () => {
        const checkedOffers = props.editablePoint.offers.map((offer) => {
            return offer.title;
        });

        if (offers.length > 0) {
            const offersList = offers.map((offer) => {
                const isChecked = checkedOffers.includes(offer.title);
                const offerId = offer.title.split(" ").join("-");
                return (
                    <div className="event__offer-selector" key={offer.title}>
                        <input onChange={(e) => {props.toggleOffer(e.currentTarget.id, props.editablePoint.type)}}
                               className="event__offer-checkbox  visually-hidden" id={offerId}
                               type="checkbox" name={offerId} checked={isChecked} />
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
        if (props.editablePoint.destination.name) {
            const createPictures = () => {
                if (props.editablePoint.destination.pictures) {
                    return (
                        props.editablePoint.destination.pictures.map((picture) => {
                            return (
                                <img key={picture.src} className="event__photo" src={picture.src} alt={picture.description}  />
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
        } else {
            return "";
        }
    };

    if (props.editablePoint.destination.name || offers.length > 0) {
        return (
            <section className="event__details">
                {createOffers()}
                {createDestinationDescription()}
            </section>
        )
    } else {
        return "";
    }
}
