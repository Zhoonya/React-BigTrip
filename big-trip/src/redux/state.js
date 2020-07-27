import React from "react";
import {getData} from "../api";

export const store = {
    _state: {
        editablePoint: null,
        points: [
            {
                "base_price": 110,
                "date_from": "May 2 2020 18:00:00 GMT+0300 (Москва, стандартное время)",
                "date_to": "May 2 2020 19:30:00 GMT+0300 (Москва, стандартное время)",
                "destination": "Chamonix",
                "id": "0",
                "is_favorite": false,
                "offers": [
                    {
                        "title": "Choose meal",
                        "price": 180
                    }, {
                        "title": "Upgrade to comfort class",
                        "price": 50
                    }
                ],
                "type": "sightseeing"
            },
            {
                "base_price": 111,
                "date_from": "Tue May 19 2020 16:03:00 GMT+0300 (Москва, стандартное время)",
                "date_to": "Tue May 19 2020 18:03:00 GMT+0300 (Москва, стандартное время)",
                "destination": "Moscow",
                "id": "1",
                "is_favorite": false,
                "offers": [
                    {title: "Choose meal", price: 130},
                    {title: "Upgrade to business class", price: 150}
                ],
                "type": "ship"
            },
            {
                "base_price": 1112,
                "date_from": "Mon May 18 2020 20:00:00 GMT+0300 (Москва, стандартное время)",
                "date_to": "Mon May 18 2020 22:00:00 GMT+0300 (Москва, стандартное время)",
                "destination": "Paris",
                "id": "2",
                "is_favorite": false,
                "offers": [
                    {"title": "Order meal", "price": 100},
                ],
                "type": "bus"
            },
            {
                "base_price": 6789,
                "date_from": "Sun May 24 2020 20:00:00 GMT+0300 (Москва, стандартное время)",
                "date_to": "Sun May 24 2020 23:00:00 GMT+0300 (Москва, стандартное время)",
                "destination": "London",
                "id": "3",
                "is_favorite": false,
                "offers": [
                    {"title": "Choose meal", "price": 180},
                    {"title": "Upgrade to comfort class", "price": 50}
                ],
                "type": "check-in"
            },
            {
                "base_price": 110,
                "date_from": "May 2 2020 18:00:00 GMT+0300 (Москва, стандартное время)",
                "date_to": "May 2 2020 19:30:00 GMT+0300 (Москва, стандартное время)",
                "destination": "Moscow",
                "id": "4",
                "is_favorite": false,
                "offers": [],
                "type": "flight"
            },
        ],
        offers: [
            {
                "type": "taxi",
                "offers": [
                    {"title": "Upgrade to a business class", "price": 120},
                    {"title": "Choose the radio station", "price": 60}
                ]
            },
            {
                "type": "bus",
                "offers": [
                    {"title": "Infotainment system", "price": 50},
                    {"title": "Order meal", "price": 100},
                    {"title": "Choose seats", "price": 190}
                ]
            },
            {
                "type": "ship",
                "offers": [
                    {title: "Choose meal", price: 130},
                    {title: "Choose seats", price: 160},
                    {title: "Upgrade to comfort class", price: 170},
                    {title: "Upgrade to business class", price: 150}
                ]
            }
        ],
        destinations: [
            {
                "description": "Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",
                "name": "Chamonix",
                "pictures": [
                    {
                        "src": "http://picsum.photos/300/200?r=0.0762563005163317",
                        "description": "Chamonix parliament building"
                    }
                ]
            },
            {
                "description": "Moscow, is a beautiful city.",
                "name": "Moscow",
                "pictures": [
                    {
                        "src": "http://picsum.photos/300/200?r=0.0762563005163317",
                        "description": "Moscow parliament building"
                    },
                    {
                        "src": "http://picsum.photos/300/200?r=0.0762563005163317",
                        "description": "Moscow parliament building"
                    }
                ]
            }
        ],
        types: ["taxi", "bus", "train",
            "ship", "transport", "drive",
            "flight", "check-in", "sightseeing",
            "restaurant"],

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    setPoints() {
        getData()
            .then((response) => {
                this._state.points = response;
                this._callSubscriber();
            });
    },

    startEditPoint(id) {
        const point = this._state.points.filter((point) => {
            return id === point.id
        })[0];
        this._state.editablePoint = {...point};
        this._callSubscriber();
    },

    updateDestination(destination) {
        this._state.editablePoint.destination.name = destination.name;
        this._callSubscriber();
    },

    toggleOffer(e, type) {
        this._state.editablePoint.offers = [...this._state.editablePoint.offers];
        const checkedOffers = this._state.editablePoint.offers;
        const offerTitle = e.currentTarget.id.split("-").join(" ");
        const offerId = checkedOffers.findIndex((offer) => {
            return offer.title === offerTitle;
        });
        if (offerId !== -1) {
            this._state.editablePoint.offers.splice(offerId, 1);
        } else {
            const thisTypeOffers = this._state.offers.find((item) => {
                return type === item.type;
            }).offers;
            const newOffer = thisTypeOffers.find((offer) =>{
                return offer.title === offerTitle;
            });
            this._state.editablePoint.offers.push({...newOffer})
        }
        this._callSubscriber();
    },

    updatePoint(id = null) {
        if (id) {
            this._state.points[id] = {...this._state.editablePoint};
            this._state.editablePoint = null;
        } else {
            console.log("сделать объект для новой точки");
        }
        this._callSubscriber();
    },

    undoChanges() {
        this._state.editablePoint = null;
        this._callSubscriber();
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


};

window.store = store;
