import React, {useEffect, useState, useMemo, createContext} from "react";
import {restaurantRequest, restaurantTransform} from "./restaurants.service";


export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    return (
    <RestaurantContext.Provider value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8]
    }}>
        {children}
    </RestaurantContext.Provider>
    )
}



