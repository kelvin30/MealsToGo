import camelize from "camelize";
import {mocks} from "./mock";


export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
return new Promise((resolve, reject) => {
 const mock = mocks[location];
 if(!mock) 
 {
     reject("not found");
 }

 resolve(mock);

})
}

export const restaurantTransform = (result = []) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    })
    return camelize(mappedResults);
}

