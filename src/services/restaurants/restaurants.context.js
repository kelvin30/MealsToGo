import React, {useEffect, useState, useMemo, createContext, useContext} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";
import {LocationContext} from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);
    const {location} = useContext(LocationContext);

    const retriveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([])
          setTimeout(() => {
          restaurantsRequest(loc)
          .then(restaurantsTransform)
          .then((results) => {
            setIsLoading(false);
            setError(null);
            setRestaurants(results)
            // setRestaurants(restaurants);
          }).catch((err) => {
            setIsLoading(false);
            setError(err);
          })
        }, 2000)
    }

    useEffect(() => {
      if (location) {
        const locationString = `${location.lat},${location.lng}`;
        retriveRestaurants(locationString);
      }
    }, [location]);


    return (
    <RestaurantContext.Provider value={{
        restaurants,
        isLoading,
        error,
    }}>
        {children}
    </RestaurantContext.Provider>
    )
}



