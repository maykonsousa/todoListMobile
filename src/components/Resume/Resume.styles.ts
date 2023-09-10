import styled, {css} from "styled-components/native";

export const ResumeContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;


export const DoneContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AllContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DoneLabel = styled.Text`
margin-right: 8px;
${({theme})=>css`
font-family: ${theme.fonts.bold};
font-size: ${theme.font_size.lg};
color: ${theme.colors.purple_dark};
`}
`;

export const AllLabel = styled.Text`
margin-right: 8px;
${({theme})=>css`
font-family: ${theme.fonts.bold};
font-size: ${theme.font_size.lg};
color: ${theme.colors.blue_dark};
`}

`;

export const CountBadge = styled.View`
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.colors.gray_400};
    border-radius: 999px;
`;


export const CountBadgeText = styled.Text`
   ${({theme})=>css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.font_size.sm};
    color: ${theme.colors.gray_100};
   `}
`;

