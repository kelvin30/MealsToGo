import React from "react";
import styled from "styled-components/native";
import {ScrollView, TouchableOpacity} from "react-native";
import { Spacer } from "../../components/spacer/spacer.components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component"
import { Text } from "../typography/text.components"


const FavouritesWrapper = styled.View`
padding: 10px;
`;


export const FavouritesBar = ({ favourites, onNavigate }) => (
  <FavouritesWrapper>

    <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
    </Spacer>

     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       {favourites.map((restaurant) => {
           const key= restaurant.name.split(" ").join("");
           return(
               <Spacer key={key} position = "left" size = "medium">
                  <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {
                  restaurant,
                })}>
                   <CompactRestaurantInfo restaurant={restaurant}/>
                  </TouchableOpacity>
                </Spacer>
           )
       })}
     </ScrollView>
  </FavouritesWrapper>
);