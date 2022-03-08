import { StatusBar, SafeAreaView} from 'react-native';
import styled from "styled-components/native";





export const SafeArea = styled(SafeAreaView)`
marginTop: ${StatusBar.currentHeight}px;
`;
