import { TextInput, TextInputProps } from "react-native";
import styled, {css} from "styled-components/native";

export interface InputProps extends TextInputProps {
    isFocused?: boolean;
}

export const InputContainer = styled(TextInput).attrs(({theme})=>({
placeholderTextColor: theme.colors.gray_300,
underlineColorAndroid: 'transparent'

}))<InputProps>`
    flex: 1;
    max-height: 54px;
    min-height: 54px;
    width: 100%;
    padding:16px;
    ${({theme, isFocused})=>css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.font_size.lg};
    color: ${theme.colors.gray_100};
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    border-color: ${isFocused ? theme.colors.purple_dark : theme.colors.gray_300};
    `}


    `;