import React from "react";
import {NavLink} from "react-router-dom";

export default function HeaderNav() {
    return (
        <div>
            <h2 className="visually-hidden">Switch trip view</h2>
            <nav className="trip-controls__trip-tabs  trip-tabs">
                <NavLink className="trip-tabs__btn" activeClassName="trip-tabs__btn--active" to="/trip">Table</NavLink>
                <NavLink className="trip-tabs__btn" activeClassName="trip-tabs__btn--active" to="/stats">Stats</NavLink>
            </nav>
        </div>
    )
}
