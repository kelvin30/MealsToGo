import React, {useContext, useState} from  "react";
import {TouchableOpacity} from 'react-native';
import {RestaurantInfoCard} from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import {SafeArea} from "../../../components/utility/safe-area.components"
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import {Search} from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantList } from "../components/restaurant-list.styles";

import { FadeInView } from "../../../components/animations/fade.animation";



const Loading = styled(ActivityIndicator)`
margin-Left: -25px;`;

const LoadingContainer = styled.View`
position: absolute;
top: 150%;
left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
 const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};