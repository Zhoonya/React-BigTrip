import React from "react";
import HeaderRout from "./HeaderRout";
import HeaderCost from "./HeaderCost";

export default function HeaderInfo() {
    return (
        <section className="trip-main__trip-info  trip-info">
            <HeaderRout/>
            <HeaderCost/>
        </section>
    )
}
