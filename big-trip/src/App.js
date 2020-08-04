import React from "react";
import "./css/style.css";
import "flatpickr/dist/themes/light.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="App page-body">
                <HeaderContainer />
                <Main />
            </div>
        </BrowserRouter>
  );
}

export default App;
