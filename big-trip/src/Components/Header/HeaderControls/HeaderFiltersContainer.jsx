import React from "react";
import HeaderFilters from "./HeaderFilters";
import {connect} from "react-redux";
import {changeFilterParameterActionCreator} from "../../../redux/trip-reducer";

// class HeaderFiltersContainer extends React.Component{
//     render() {
//         return (
//             <HeaderFilters changeFilterParameter={this.props.changeFilterParameter} />
//         )
//     }
// }

function HeaderFiltersContainer(props) {
    return (
        <HeaderFilters changeFilterParameter={props.changeFilterParameter} points={props.points}/>
    )
}

const mapStateToProps = (state) => {
    return ({
        filterParameter: state.trip.filterParameter,
        points: state.trip.points,
    })
};

export default connect(mapStateToProps, {changeFilterParameter: changeFilterParameterActionCreator})(HeaderFiltersContainer);
