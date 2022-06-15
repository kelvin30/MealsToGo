import React from "react";
import { Spacer } from "../../../components/spacer/spacer.components";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
    return ( 
    <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
    <LottieView 
      keyword="animation"
      autoPlay
      resizeMode="cover"
      source={require("../../../../assets/burger.json")}
    />
    </AnimationWrapper>
    <Title>Meals To Go</Title>
    <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
  </AccountBackground>
    )
  };