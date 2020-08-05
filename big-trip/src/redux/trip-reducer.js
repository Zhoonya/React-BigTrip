import {tripAPI} from "../api";
import {FILTER_PARAMETER, SORT_TYPE} from "../const";

const START_EDIT_POINT = "START_EDIT_POINT";
const START_CREATE_NEW_POINT = "START_CREATE_NEW_POINT";
const SET_POINTS = "SET_POINTS";
const SET_OFFERS = "SET_OFFERS";
const SET_DESTINATION = "SET_DESTINATION";
const UNDO_CHANGES = "UNDO_CHANGES";
const UPDATE_POINT = "UPDATE_POINT";
const CREATE_POINT = "CREATE_POINT";
const UPDATE_DESTINATION = "UPDATE_DESTINATION";
const UPDATE_PRICE = "UPDATE_PRICE";
const UPDATE_TYPE = "UPDATE_TYPE";
const UPDATE_DATE_FROM = "UPDATE_DATE_FROM";
const UPDATE_DATE_TO = "UPDATE_DATE_TO";
const TOGGLE_OFFER = "TOGGLE_OFFER";
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
const DELETE_POINT = "DELETE_POINT";
const CHANGE_SORT_TYPE = "CHANGE_SORT_TYPE";
const CHANGE_FILTER_PARAMETER = "CHANGE_FILTER_PARAMETER";

const initialState = {
    editablePoint: null,
    newPoint: false,
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
    sortType: SORT_TYPE.event,
    filterParameter: FILTER_PARAMETER.everything,
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
        case START_CREATE_NEW_POINT: {
            const stateCopy = {
                ...state,
            };
            stateCopy.newPoint = true;
            stateCopy.editablePoint = {
                    "base_price": null,
                    "date_from": new Date(),
                    "date_to": new Date(),
                    "destination": {
                    },
                    "id": "new point",
                    "is_favorite": false,
                    "offers": [],
                    "type": "taxi"
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
            if (stateCopy.newPoint) {
                stateCopy.newPoint = false;
            }
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
        case UPDATE_DATE_FROM: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.date_from = action.dateFrom;
            if (stateCopy.editablePoint.date_from > new Date(stateCopy.editablePoint.date_to)) {
                stateCopy.editablePoint.date_to = stateCopy.editablePoint.date_from;
            }
            return stateCopy;
        }
        case UPDATE_DATE_TO: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.date_to = action.dateTo;
            return stateCopy;
        }
        case UPDATE_PRICE: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.base_price = Number(action.price);
            return stateCopy;
        }
        case TOGGLE_FAVORITE: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            stateCopy.editablePoint.is_favorite = !stateCopy.editablePoint.is_favorite;
            return stateCopy;
        }
        case UPDATE_TYPE: {
            const stateCopy = {
                ...state,
                editablePoint: {...state.editablePoint}
            };
            if (stateCopy.editablePoint.type !== action.pointType) {
                stateCopy.editablePoint.type = action.pointType;
                stateCopy.editablePoint.offers = [];
            }
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
                editablePoint: null,
                newPoint: false,
            };
            return stateCopy;
        }
        case UPDATE_POINT: {
            const stateCopy = {
                ...state,
                points: [...state.points]
            };
            if (action.id) {
                const pointIndex = stateCopy.points.findIndex((point) => {
                    return point.id === action.id;
                });
                stateCopy.points[pointIndex] = {...stateCopy.editablePoint};
                stateCopy.editablePoint = null;
                stateCopy.newPoint = false;
            }
            return stateCopy;
        }
        case CREATE_POINT: {
            const stateCopy = {
                ...state,
                points: [...state.points]
            };

            stateCopy.points = [...stateCopy.points, {...action.data}];

            stateCopy.editablePoint = null;
            stateCopy.newPoint = false;
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
        case CHANGE_SORT_TYPE: {
            const stateCopy = {
                ...state,
                sortType: action.sortType
            };
            return stateCopy;
        }
        case CHANGE_FILTER_PARAMETER: {
            const stateCopy = {
                ...state,
                filterParameter: action.filterParameter
            };
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

export const startCreateNewPointActionCreator = () => {
    return ({type: START_CREATE_NEW_POINT})
};

export const updateDestinationActionCreator = (destinationName) => {
    return ({type: UPDATE_DESTINATION, destinationName})
};

export const updatePriceActionCreator = (price) => {
    return ({type: UPDATE_PRICE, price})
};

export const updateDateToActionCreator = (dateTo) => {
    return ({type: UPDATE_DATE_TO, dateTo})
};

export const updateDateFromActionCreator = (dateFrom) => {
    return ({type: UPDATE_DATE_FROM, dateFrom})
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

export const createPointActionCreator = (data) => {
    return ({type: CREATE_POINT, data})
};

export const toggleFavoriteActionCreator = () => {
    return ({type: TOGGLE_FAVORITE})
};

export const deletePointActionCreator = (id) => {
    return ({type: DELETE_POINT, id})
};

export const changeSortTypeActionCreator = (sortType) => {
    return ({type: CHANGE_SORT_TYPE, sortType})
};

export const changeFilterParameterActionCreator = (filterParameter) => {
    return ({type: CHANGE_FILTER_PARAMETER, filterParameter})
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

export const createPointThunkCreator = (data) => {
    return ((dispatch) => {
        tripAPI.createPoint(data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(createPointActionCreator(response.data));
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
