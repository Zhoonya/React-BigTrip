import React from "react";
import PointViewing from "./PointViewing";
import PointEdit from "./PointEdit";
import {connect} from "react-redux";
import {
    createPointThunkCreator,
    deletePointThunkCreator,
    startEditPointActionCreator, toggleFavoriteActionCreator,
    toggleOfferActionCreator,
    undoChangesActionCreator,
    updateDateFromActionCreator,
    updateDateToActionCreator,
    updateDestinationActionCreator,
    updatePointThunkCreator,
    updatePriceActionCreator,
    updateTypeActionCreator
} from "../../../../../redux/trip-reducer";
import PointCreating from "./PointCreating";

class PointContainer extends React.Component{
    state = {
        editMode: this.props.editMode || false
    };

    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true,
    //     });
    // };
    //
    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false,
    //     });
    // };

    render() {
        if (this.props.newPoint) {
            return <PointCreating offers={this.props.offers}
                                  destinations={this.props.destinations}
                                  editablePoint={this.props.editablePoint}
                                  updateDestination={this.props.updateDestination}
                                  updatePrice={this.props.updatePrice}
                                  updateDateTo={this.props.updateDateTo}
                                  updateDateFrom={this.props.updateDateFrom}
                                  updateType={this.props.updateType}
                                  undoChanges={this.props.undoChanges}
                                  createPoint={this.props.createPoint}
                                  toggleOffer={this.props.toggleOffer} />
        } else if (this.props.editablePoint && this.props.editablePoint.id === this.props.point.id) {
            return <PointEdit point={this.props.point}
                              offers={this.props.offers}
                              destinations={this.props.destinations}
                              editablePoint={this.props.editablePoint}
                              updateDestination={this.props.updateDestination}
                              updatePrice={this.props.updatePrice}
                              updateDateTo={this.props.updateDateTo}
                              updateDateFrom={this.props.updateDateFrom}
                              updateType={this.props.updateType}
                              undoChanges={this.props.undoChanges}
                              updatePoint={this.props.updatePoint}
                              deletePoint={this.props.deletePoint}
                              toggleOffer={this.props.toggleOffer}
                              toggleFavorite={this.props.toggleFavorite}/>
        } else {
            return <PointViewing point={this.props.point} startEditPoint={this.props.startEditPoint} />
        }
    }
};

let mapStateToProps = (state) => {
    return {
        editablePoint: state.trip.editablePoint,
        offers: state.trip.offers,
        destinations: state.trip.destinations,
    };
};

export default connect(mapStateToProps, {startEditPoint: startEditPointActionCreator,
    updateDestination: updateDestinationActionCreator,
    updatePrice: updatePriceActionCreator,
    updateDateTo: updateDateToActionCreator,
    updateDateFrom: updateDateFromActionCreator,
    updateType: updateTypeActionCreator,
    undoChanges: undoChangesActionCreator,
    updatePoint: updatePointThunkCreator,
    createPoint: createPointThunkCreator,
    deletePoint: deletePointThunkCreator,
    toggleOffer: toggleOfferActionCreator,
    toggleFavorite: toggleFavoriteActionCreator})(PointContainer);
