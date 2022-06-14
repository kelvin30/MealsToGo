import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import {ThemeProvider} from "styled-components/native";
import {theme} from './src/infrastructure/theme';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { Navigation } from "./src/infrastructure/navigation";
import * as firebase from "firebase";
import { FavouritesContextProvider } from './src/services/favorites/favorites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';


const firebaseConfig = {
  apiKey: "AIzaSyA11gya4UYrZ-Zdgkf5-hrh1milnmcKPXE",
  authDomain: "mealstogo-5ed79.firebaseapp.com",
  projectId: "mealstogo-5ed79",
  storageBucket: "mealstogo-5ed79.appspot.com",
  messagingSenderId: "1057172839230",
  appId: "1:1057172839230:web:fef0632bb5cbf9a88d6a6f"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

//  const [isAuthenticated, setIsAuthenticated] = useState(false)

//  useEffect(() => {
//    setTimeout(() => {
//      signInWithEmailAndPassword("kelvin@rumani.io", "test123")
//      .then((user) => {
//         console.log(user);
//         setIsAuthenticated(true);
//      }).catch((e) => {
//        console.log("failed to authenticate", e);
//      })
//    }, 5000);
//  }, []);


  
    const [oswaldLoaded] = useOswald({
      Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
      Lato_400Regular,
    });

    if(!oswaldLoaded || !latoLoaded){
      return null;
    }
  
  

    return (
      <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
    );
  }
