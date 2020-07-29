import React from "react";
import HeaderRout from "./HeaderRout";
import HeaderCost from "./HeaderCost";
import {connect} from "react-redux";
import {getDestinationsThunkCreator, getOffersThunkCreator, getPointsThunkCreator} from "../../../redux/trip-reducer";

class HeaderInfo extends React.Component{
    render() {
        return (
            <section className="trip-main__trip-info  trip-info">
                <HeaderRout points={this.props.points}/>
                <HeaderCost points={this.props.points}/>
            </section>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        points: state.trip.points,
    };
};

export default connect(mapStateToProps)(HeaderInfo);
