import styled, {css} from "styled-components/native";
import { ClipboardText } from "phosphor-react-native";

export const EmptyListContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export const EmptyListTitle = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.fonts.bold};
        font-size: ${theme.font_size.xl};
        color: ${theme.colors.gray_300};
    `}
`;

export const EmptyListMessage = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.fonts.regular};
        font-size: ${theme.font_size.md};
        color: ${theme.colors.gray_300};
       
    `}
`;

export const EmptyListIcon = styled(ClipboardText).attrs(({theme})=>({
    size: 64,
    color: theme.colors.gray_300

}))``;