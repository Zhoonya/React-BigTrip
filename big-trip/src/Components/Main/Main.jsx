import React from "react";
import Trip from "./Trip/Trip";
import Stats from "./Stats/Stats";
import {Route} from "react-router-dom";

export default function () {
    return (
        <main className="page-body__page-main  page-main">
            <div className="page-body__container">
                <Route path="/trip" render={() => <Trip/>}/>
                <Route path="/stats" render={() => <Stats />}/>
            </div>
        </main>
    )
}
