import React, {useEffect, useState, useMemo, createContext} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";


export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    const retriveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
          restaurantsRequest().then(restaurantsTransform).then((results) => {
            setIsLoading(false);
            setError(null);
            setRestaurants(results)
            // setRestaurants(restaurants);
          }).catch((err) => {
            setRestaurants([]);
            setIsLoading(false);
            setError(err);
          })
        }, 2000)
    }

    useEffect(() => {
      retriveRestaurants();
    }, []);


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



