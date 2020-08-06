import React from "react";
import logo from "../../img/logo.png"
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderControls from "./HeaderControls/HeaderControls";
import NewEventButton from "./NewEventButton";
import {startCreateNewPointActionCreator} from "../../redux/trip-reducer";
import {connect} from "react-redux";
import {FILTER_PARAMETER, SORT_TYPE} from "../../const";

class HeaderContainer extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="page-body__container  page-header__container">
                    <img className="page-header__logo" src={logo} width="42" height="42" alt="Trip logo" />
                    <div className="trip-main">
                        <HeaderInfo/>
                        <HeaderControls/>
                        <NewEventButton newPoint={this.props.newPoint} startCreateNewPoint={this.props.startCreateNewPoint} />
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        newPoint: state.trip.newPoint,
    });
};

export default connect(mapStateToProps, {startCreateNewPoint: startCreateNewPointActionCreator})(HeaderContainer);
