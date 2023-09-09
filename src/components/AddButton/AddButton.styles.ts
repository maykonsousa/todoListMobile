import { PlusCircle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const AddButtonContainer = styled(TouchableOpacity)`
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.blue_dark};
    border-radius: 8px;
    margin-left: 4px;
`;

export const AddButtonIcon = styled(PlusCircle).attrs(({theme})=>({
    size: 16,
    color: theme.colors.gray_100
}))`
   
`;
