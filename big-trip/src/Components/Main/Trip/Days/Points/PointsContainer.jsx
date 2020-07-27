import React from "react";
import StoreContext from "../../../../storeContext";
import Points from "./Points";

// не используется

export default function PointsContainer() {
    return (
        <StoreContext.Consumer>{
            (store) => {
                return (
                    <Points points={store.getState().points}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
