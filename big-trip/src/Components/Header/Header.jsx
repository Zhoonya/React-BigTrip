import React from "react";
import logo from "../../img/logo.png"
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderControls from "./HeaderControls/HeaderControls";
import NewEventButton from "./NewEventButton";

export default function Header () {
    return (
        <header className="page-header">
            <div className="page-body__container  page-header__container">
                <img className="page-header__logo" src={logo} width="42" height="42" alt="Trip logo" />
                <div className="trip-main">
                    <HeaderInfo/>
                    <HeaderControls/>
                    <NewEventButton />
                </div>
            </div>
        </header>
    )
}
