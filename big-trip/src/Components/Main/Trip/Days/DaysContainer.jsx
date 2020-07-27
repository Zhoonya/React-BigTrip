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
    getOffersThunkCreator, getDestinationsThunkCreator, updateTypeActionCreator
} from "../../../../redux/trip-reducer";

class DaysContainer extends React.Component {
    componentDidMount() {
        this.props.getOffers();
        this.props.getDestinations();
        this.props.getPoints();
    }

    render() {
        return (
            <Days points={this.props.points} offers={this.props.offers}
                  destinations={this.props.destinations}
                  editablePoint={this.props.editablePoint}
                  startEditPoint={this.props.startEditPoint}
                  updateDestination={this.props.updateDestination}
                  updateType={this.props.updateType}
                  undoChanges={this.props.undoChanges}
                  updatePoint={this.props.updatePoint}
                  deletePoint={this.props.deletePoint}
                  toggleOffer={this.props.toggleOffer}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        points: state.trip.points,
        editablePoint: state.trip.editablePoint,
        offers: state.trip.offers,
        destinations: state.trip.destinations,
    };
};

export default connect(mapStateToProps, {getPoints: getPointsThunkCreator,
                                        getOffers: getOffersThunkCreator,
                                        getDestinations: getDestinationsThunkCreator,
                                        startEditPoint: startEditPointActionCreator,
                                        updateDestination: updateDestinationActionCreator,
                                        updateType: updateTypeActionCreator,
                                        undoChanges: undoChangesActionCreator,
                                        updatePoint: updatePointThunkCreator,
                                        deletePoint: deletePointThunkCreator,
                                        toggleOffer: toggleOfferActionCreator})(DaysContainer);
