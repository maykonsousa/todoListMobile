import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=>theme.colors.gray_700};
`;

export const HomeContent = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-bottom: 24px;
    background-color: ${({theme})=>theme.colors.gray_600};
    position: relative;
`;

export const FormContainer = styled.View`
    width: 100%;
    flex-direction: row;
    min-height: 56px;
    max-height: 56px;
    align-items: center;
    justify-content: center;
    transform: translateY(-24px);
`;


