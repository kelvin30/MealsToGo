import React, {useContext} from  "react";
import {FlatList, TouchableOpacity} from 'react-native';
import {RestaurantInfoCard} from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.components";
import {SafeArea} from "../../../components/utility/safe-area.components"
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import {Search} from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
   padding: 16
}
})`
margin-bottom: ${(props) => props.theme.space[5]};
`;

const Loading = styled(ActivityIndicator)`
margin-Left: -25px;`;

const LoadingContainer = styled.View`
position: absolute;
top: 150%;
left: 50%;
`;


export const RestaurantsScreen = ({navigation}) => {
 const {isLoading, restaurants} = useContext(RestaurantContext);
 console.log(navigation);
  return (  
    <SafeArea>
    {isLoading && (
        <LoadingContainer>
              <Loading
                 size={50}
                 style={{marginLeft: -25}}
                 animating={true} 
                 color={Colors.blue300} 
              />
        </LoadingContainer>
      )
      }
      <Search />
       <RestaurantList 
       data={restaurants}
       renderItem={({item}) => {
         return(
          <TouchableOpacity 
          onPress={() => 
          navigation.navigate("RestaurantDetail", {
            restaurant: item,
          })
        }
      >
        <Spacer position = "left" size = "large">
          <RestaurantInfoCard restaurant={item} />
          </Spacer>
      
       </TouchableOpacity>
      )}
      }
       keyExtractor={(item) => item.name}

       />
       
      </SafeArea>
    
    )
       };