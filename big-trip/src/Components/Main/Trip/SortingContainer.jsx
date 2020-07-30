import React from "react";
import Sorting from "./Sorting";
import {connect} from "react-redux";
import {changeSortTypeActionCreator} from "../../../redux/trip-reducer";

// class SortingContainer extends React.Component{
//     render() {
//         return(
//             <Sorting sortType={this.props.sortType} changeSortType={this.props.changeSortType}/>
//         )
//     }
// }

function SortingContainer(props){
    return(
        <Sorting sortType={props.sortType} changeSortType={props.changeSortType}/>
    )
}

const mapStateToProps = (state) => {
  return ({
      sortType: state.trip.sortType,
  });
};

export default connect(mapStateToProps, {changeSortType: changeSortTypeActionCreator})(SortingContainer)
