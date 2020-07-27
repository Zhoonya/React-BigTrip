import React from "react";
import "./css/style.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="App page-body">
                <Header />
                <Main />
            </div>
        </BrowserRouter>
  );
}

export default App;
