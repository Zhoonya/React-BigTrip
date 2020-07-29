import React from "react";
// import StoreContext from "../../../../redux/storeContext";
import Days from "./Days";
import {connect} from "react-redux";
import {
    startEditPointActionCreator,
    updateDestinationActionCreator,
    getPointsThunkCreator,
    undoChangesActionCreator,
    updatePointThunkCreator,
    toggleOfferActionCreator,
    deletePointThunkCreator,
    getOffersThunkCreator, getDestinationsThunkCreator, updateTypeActionCreator, updatePriceActionCreator
} from "../../../../redux/trip-reducer";

class DaysContainer extends React.Component {
    componentDidMount() {
        this.props.getOffers();
        this.props.getDestinations();
        this.props.getPoints();
    }

    render() {
        return (
            <Days points={this.props.points} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        points: state.trip.points,
    };
};

export default connect(mapStateToProps, {getPoints: getPointsThunkCreator,
                                        getOffers: getOffersThunkCreator,
                                        getDestinations: getDestinationsThunkCreator,})(DaysContainer);
