import React, {useContext} from  "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import {SafeArea} from "../../../components/utility/safe-area.components"
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import {View} from "react-native";

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
    {isLoading && (
        <View style={{position:"absolute", top:"150%", left:"50%"}}>
              <ActivityIndicator 
              size={50}
              style={{marginLeft: -25}}
              animating={true} 
              color={Colors.red800} 
              />
        </View>
      )

      }
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
