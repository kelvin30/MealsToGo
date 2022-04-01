import React, {useState, useEffect, createContext} from "react";

import {locationTransform, locationRequest} from "./location.service";


export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    
    const [location, setLocation] = useState("san francisco");
    const [keyword, setKeyword] = useState(null);
    const[error, setError] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(searchKeyword).then(locationTransform).then(result => {
             setIsLoading(false);
             setLocation(result);
           
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        });
    }


    useEffect(() => {
        onSearch(keyword);
    }, [])
     
    return(
        <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}>

          {children}

        </LocationContext.Provider>

        
    )

}
    