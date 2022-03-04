import React from  "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from "../components/restaurant-info-card.components";
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
flex: 1;
marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
flex: 1;
padding: ${(props) => props.theme.space[3]};

`;


export const RestaurantsScreen = () => (
    
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantInfoCard>
        <RestaurantInfoCard />
      </RestaurantInfoCard>
      
      </SafeArea>
    );



// const styles = StyleSheet.create({
//     container:{
//      flex: 1,
//      marginTop: StatusBar.currentHeight
//     },
//     search:{
//      padding: 16,
//      backgroundColor: "white" 
//     },
   
//     list:{
//      flex: 1,
//      padding: 16,
//      backgroundColor: "blue"
//     }
// })
