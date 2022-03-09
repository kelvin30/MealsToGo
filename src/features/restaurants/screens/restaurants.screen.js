import React, {useContext} from  "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import {SafeArea} from "../../../components/utility/safe-area.components"
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
   padding: 16
}
})`
margin-bottom: ${(props) => props.theme.space[5]};
`;

export const RestaurantsScreen = () => {
 const {isLoading, error, restaurants} = useContext(RestaurantContext);
 
  return (  
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
       <RestaurantList 
       data={restaurants}
       renderItem={({item}) => {
         return(
       <Spacer position="bottom" size = "large">
       <RestaurantInfoCard restaurant={item}/>
       </Spacer>
      )}
      }
       keyExtractor={(item) => item.name}

       />
       
      </SafeArea>
    
    )
       };
       


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
