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
 const restaurantContext = useContext(RestaurantContext);
 console.log(restaurantContext);
  return (  
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
       <RestaurantList 
       data={[{name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
        {name: 5},
        {name: 6},
        {name: 7},
        {name: 8}]}
       renderItem={() => <>
       <Spacer position="bottom" size = "large">
       <RestaurantInfoCard />
       </Spacer>
       </>}
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
