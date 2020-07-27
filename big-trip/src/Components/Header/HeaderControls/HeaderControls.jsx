import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderFilters from "./HeaderFilters";

export default function HeaderControls() {
    return (
        <div className="trip-main__trip-controls  trip-controls">
            <HeaderNav/>
            <HeaderFilters/>
        </div>
    )
}
