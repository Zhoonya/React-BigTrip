import React from "react";
import Days from "./Days";
import {connect} from "react-redux";
import {
    getPointsThunkCreator,
    getOffersThunkCreator, getDestinationsThunkCreator} from "../../../../redux/trip-reducer";
import Points from "./Points/Points";
import {SORT_TYPE} from "../../../../const";
import {filterPoints} from "../../../../common";


class DaysContainer extends React.Component {

    componentDidMount() {
        this.props.getOffers();
        this.props.getDestinations();
        this.props.getPoints();
    }

    render() {
        let points = this._filterPoints(this.props.points, this.props.filterParameter);
        points = this._sortPoints(points, this.props.sortType);

        if (this.props.sortType === SORT_TYPE.event) {
            return (
                <Days points={points} newPoint={this.props.newPoint}/>
            )
        } else {
            return (
                <ul className="trip-days">
                    <li className="trip-days__item  day">
                        <div className="day__info"></div>
                        <Points points={points} />
                    </li>
                </ul>
            )
        }
    }

    _sortPoints(points, sortType) {
        switch (sortType) {
            case SORT_TYPE.price:
                return points.sort((a, b) => {
                    return a.base_price - b.base_price;
                });
            case SORT_TYPE.duration:
                return points.sort((a, b) => {
                    return (new Date(a.date_to) - new Date(a.date_from)) - (new Date(b.date_to) - new Date(b.date_from));
                });
            default:
                return points;
        }
    }

    _filterPoints(points, filterParameter) {
        return filterPoints(points, filterParameter);
    }
}

let mapStateToProps = (state) => {
    return {
        points: state.trip.points,
        sortType: state.trip.sortType,
        filterParameter: state.trip.filterParameter,
        newPoint: state.trip.newPoint,
    };
};

export default connect(mapStateToProps, {getPoints: getPointsThunkCreator,
                                        getOffers: getOffersThunkCreator,
                                        getDestinations: getDestinationsThunkCreator,})(DaysContainer);
