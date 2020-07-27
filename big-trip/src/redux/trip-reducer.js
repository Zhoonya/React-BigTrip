import {tripAPI} from "../api";

const START_EDIT_POINT = "START_EDIT_POINT";
const SET_POINTS = "SET_POINTS";
const SET_OFFERS = "SET_OFFERS";
const SET_DESTINATION = "SET_DESTINATION";
const UNDO_CHANGES = "UNDO_CHANGES";
const UPDATE_POINT = "UPDATE_POINT";
const UPDATE_DESTINATION = "UPDATE_DESTINATION";
const UPDATE_TYPE = "UPDATE_TYPE";
const TOGGLE_OFFER = "TOGGLE_OFFER";
const DELETE_POINT = "DELETE_POINT";

const initialState = {
    editablePoint: null,
    points: [
        // {
        //     "base_price": 110,
        //     "date_from": "May 2 2020 18:00:00 GMT+0300 (Москва, стандартное время)",
        //     "date_to": "May 2 2020 19:30:00 GMT+0300 (Москва, стандартное время)",
        //     "destination": {
        //         "name": "Chamonix",
        //     },
        //     "id": "0",
        //     "is_favorite": false,
        //     "offers": [
        //         {
        //             "title": "Choose meal",
        //             "price": 180
        //         }, {
        //             "title": "Upgrade to comfort class",
        //             "price": 50
        //         }
        //     ],
        //     "type": "sightseeing"
        // },
        // {
        //     "base_price": 111,
        //     "date_from": "Tue May 19 2020 16:03:00 GMT+0300 (Москва, стандартное время)",
        //     "date_to": "Tue May 19 2020 18:03:00 GMT+0300 (Москва, стандартное время)",
        //     "destination": {
        //         "name": "Moscow",
        //     },
        //     "id": "1",
        //     "is_favorite": false,
        //     "offers": [
        //         {title: "Choose meal", price: 130},
        //         {title: "Upgrade to business class", price: 150}
        //     ],
        //     "type": "ship"
        // },
        // {
        //     "base_price": 1112,
        //     "date_from": "Mon May 18 2020 20:00:00 GMT+0300 (Москва, стандартное время)",
        //     "date_to": "Mon May 18 2020 22:00:00 GMT+0300 (Москва, стандартное время)",
        //     "destination": {
        //         "name": "Paris",
        //     },
        //     "id": "2",
        //     "is_favorite": false,
        //     "offers": [
        //         {"title": "Order meal", "price": 100},
        //     ],
        //     "type": "bus"
        // },
        // {
        //     "base_price": 6789,
        //     "date_from": "Sun May 24 2020 20:00:00 GMT+0300 (Москва, стандартное время)",
        //     "date_to": "Sun May 24 2020 23:00:00 GMT+0300 (Москва, стандартное время)",
        //     "destination": {
        //         "name": "London",
        //     },
        //     "id": "3",
        //     "is_favorite": false,
        //     "offers": [
        //         {"title": "Choose meal", "price": 180},
        //         {"title": "Upgrade to comfort class", "price": 50}
        //     ],
        //     "type": "check-in"
        // },
        // {
        //     "base_price": 110,
        //     "date_from": "May 2 2020 18:00:00 GMT+0300 (Москва, стандартное время)",
        //     "date_to": "May 2 2020 19:30:00 GMT+0300 (Москва, стандартное время)",
        //     "destination": {
        //         "name": "Moscow",
        //     },
        //     "id": "4",
        //     "is_favorite": false,
        //     "offers": [],
        //     "type": "flight"
        // },
    ],
    offers: [
        // {
        //     "type": "taxi",
        //     "offers": [
        //         {"title": "Upgrade to a business class", "price": 120},
        //         {"title": "Choose the radio station", "price": 60}
        //     ]
        // },
        // {
        //     "type": "bus",
        //     "offers": [
        //         {"title": "Infotainment system", "price": 50},
        //         {"title": "Order meal", "price": 100},
        //         {"title": "Choose seats", "price": 190}
        //     ]
        // },
        // {
        //     "type": "ship",
        //     "offers": [
        //         {title: "Choose meal", price: 130},
        //         {title: "Choose seats", price: 160},
        //         {title: "Upgrade to comfort class", price: 170},
        //         {title: "Upgrade to business class", price: 150}
        //     ]
        // }
    ],
    destinations: [
        // {
        //     "description": "Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",
        //     "name": "Chamonix",
        //     "pictures": [
        //         {
        //             "src": "http://picsum.photos/300/200?r=0.0762563005163317",
        //             "description": "Chamonix parliament building"
        //         }
        //     ]
        // },
        // {
        //     "description": "Moscow, is a beautiful city.",
        //     "name": "Moscow",
        //     "pictures": [
        //         {
        //             "src": "http://picsum.photos/300/200?r=0.0762563005163317",
        //             "description": "Moscow parliament building"
        //         },
        //         {
        //             "src": "http://picsum.photos/300/200?r=0.0762563005163317",
        //             "description": "Moscow parliament building"
        //         }
        //     ]
        // }
    ],
    types: [
        "taxi", "bus", "train",
        "ship", "transport", "drive",
        "flight", "check-in", "sightseeing",
        "restaurant"
    ],
};

export const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POINTS: {
            const stateCopy = {
                ...state,
                points: action.points
            };
            return stateCopy;
        }
        case SET_OFFERS: {
            const stateCopy = {
                ...state,
                offers: action.offers
            };
            return stateCopy;
        }
        case SET_DESTINATION: {
            const stateCopy = {
                ...state,
                destinations: action.destinations
            };
            return stateCopy;
        }
        case START_EDIT_POINT: {
            const stateCopy = {
                ...state,
            };
            const point = stateCopy.points.filter((point) => {
                return action.id === point.id
            })[0];
            stateCopy.editablePoint = {...point};
            return stateCopy;
        }
        case UPDATE_DESTINATION: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            let destination = stateCopy.destinations.filter((destination) => {
                return destination.name === action.destinationName;
            });
            if (destination.length > 0) {
                destination = destination[0];
            }
            stateCopy.editablePoint.destination = {...destination};
            return stateCopy;
        }
        case UPDATE_TYPE: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.type = action.pointType;
            return stateCopy;
        }
        case TOGGLE_OFFER: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.offers = [...stateCopy.editablePoint.offers];
            const checkedOffers = stateCopy.editablePoint.offers;
            const offerTitle = action.offerName.split("-").join(" ");
            const offerId = checkedOffers.findIndex((offer) => {
                return offer.title === offerTitle;
            });
            if (offerId !== -1) {
                stateCopy.editablePoint.offers.splice(offerId, 1);
            } else {
                const thisTypeOffers = stateCopy.offers.find((item) => {
                    return action.pointType === item.type;
                }).offers;
                const newOffer = thisTypeOffers.find((offer) =>{
                    return offer.title === offerTitle;
                });
                stateCopy.editablePoint.offers.push({...newOffer})
            }
            return stateCopy;
        }
        case UNDO_CHANGES: {
            const stateCopy = {
                ...state,
                editablePoints: null,
            };
            return stateCopy;
        }
        case UPDATE_POINT: {
            const stateCopy = {
                ...state
            };
            if (action.id) {
                stateCopy.points[action.id] = {...stateCopy.editablePoint};
                stateCopy.editablePoint = null;
            }
            return stateCopy;
        }
        case DELETE_POINT: {
            const stateCopy = {
                ...state,
                points: [...state.points]
            };
            const pointIndex = stateCopy.points.findIndex((point) => {
                return point.id === action.id;
            });
            if (pointIndex !== -1) {
                stateCopy.points = stateCopy.points.slice(0, pointIndex).concat(stateCopy.points.slice(pointIndex + 1));
            }
            return stateCopy;
        }
        default:
            return state;
    }
};

export const setPointsActionCreator = (points) => {
    return ({type: SET_POINTS, points})
};

export const setOffersActionCreator = (offers) => {
    return ({type: SET_OFFERS, offers})
};

export const setDestinationsActionCreator = (destinations) => {
    return ({type: SET_DESTINATION, destinations})
};


export const startEditPointActionCreator = (id) => {
    return ({type: START_EDIT_POINT, id})
};

export const updateDestinationActionCreator = (destinationName) => {
    return ({type: UPDATE_DESTINATION, destinationName})
};

export const updateTypeActionCreator = (pointType) => {
    return ({type: UPDATE_TYPE, pointType})
};

export const toggleOfferActionCreator = (offerName, pointType) => {
    return ({type: TOGGLE_OFFER, offerName, pointType})
};

export const undoChangesActionCreator = () => {
    return ({type: UNDO_CHANGES})
};

export const updatePointActionCreator = (id = null) => {
    return ({type: UPDATE_POINT, id})
};

export const deletePointActionCreator = (id) => {
    return ({type: DELETE_POINT, id})
};

export const getPointsThunkCreator = () => {
    return ((dispatch) => {
        tripAPI.getPoints()
            .then((response) => {
                dispatch(setPointsActionCreator(response))
            })
    });
};

export const getOffersThunkCreator = () => {
    return ((dispatch) => {
        tripAPI.getOffers()
            .then((response) => {
                dispatch(setOffersActionCreator(response))
            })
    })
};

export const getDestinationsThunkCreator = () => {
    return ((dispatch) => {
        tripAPI.getDestinations()
            .then((response) => {
                dispatch(setDestinationsActionCreator(response))
            })
    })
};

export const updatePointThunkCreator = (id, data) => {
    return ((dispatch) => {
        tripAPI.updatePoint(id, data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updatePointActionCreator(id));
                }
            });
    });
};

export const deletePointThunkCreator = (id) => {
    return ((dispatch) => {
        tripAPI.deletePoint(id)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deletePointActionCreator(id));
                }
            })
    })
};
