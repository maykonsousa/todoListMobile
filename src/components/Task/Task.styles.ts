import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { Trash, Circle, CheckCircle } from "phosphor-react-native";



export const TaskContainer = styled.View`
    width: 100%;
    height: 64px;
    flex-direction: row;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme})=>theme.colors.gray_500};
    margin-bottom: 10px;
    padding: 12px 8px;
`;

export const UnactiveCheckButton = styled(TouchableOpacity)`
    

`;

export const UnactiveCheckIcon = styled(Circle).attrs(({theme})=>({
    color: theme.colors.blue_dark,
    size: 24,
}))``;

export const ActivedCheck = styled(CheckCircle).attrs(({theme})=>({
    color: theme.colors.purple_dark,
    size: 24,
    weight: "duotone",
    
}))`
   
`;

export const TrashButton = styled(TouchableOpacity)``;

export const TrashIcon  = styled(Trash).attrs(({theme})=>({
    color: theme.colors.gray_300,
    size: 24,
}))``;

export const TaskText = styled.Text`
flex: 1;
text-align: center;
${({theme})=>css`
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md};
    font-family: ${theme.fonts.regular};
`}


`;