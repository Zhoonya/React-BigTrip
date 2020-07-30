import React from "react";
import PointViewing from "./PointViewing";
import PointEdit from "./PointEdit";
import {connect} from "react-redux";
import {
    deletePointThunkCreator,
    startEditPointActionCreator,
    toggleOfferActionCreator,
    undoChangesActionCreator,
    updateDateFromActionCreator,
    updateDateToActionCreator,
    updateDestinationActionCreator,
    updatePointThunkCreator,
    updatePriceActionCreator,
    updateTypeActionCreator
} from "../../../../../redux/trip-reducer";

class PointContainer extends React.Component{
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    };

    render() {
        if (!this.state.editMode) {
            return <PointViewing point={this.props.point} activateEditMode={this.activateEditMode} startEditPoint={this.props.startEditPoint} />
        } else {
            return <PointEdit point={this.props.point} deactivateEditMode={this.deactivateEditMode}  offers={this.props.offers}
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
                              toggleOffer={this.props.toggleOffer} />
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
    deletePoint: deletePointThunkCreator,
    toggleOffer: toggleOfferActionCreator})(PointContainer);
