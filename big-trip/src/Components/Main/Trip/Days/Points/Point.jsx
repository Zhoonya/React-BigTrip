import React from "react";
import PointViewing from "./PointViewing";
import PointEdit from "./PointEdit";
import Day from "../Day";

export default class Point extends React.Component{
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
                              updateType={this.props.updateType}
                              undoChanges={this.props.undoChanges}
                              updatePoint={this.props.updatePoint}
                              deletePoint={this.props.deletePoint}
                              toggleOffer={this.props.toggleOffer} />
        }
    }
};
