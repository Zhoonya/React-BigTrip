import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderFiltersContainer from "./HeaderFiltersContainer";

export default function HeaderControls() {
    return (
        <div className="trip-main__trip-controls  trip-controls">
            <HeaderNav/>
            <HeaderFiltersContainer />
        </div>
    )
}
