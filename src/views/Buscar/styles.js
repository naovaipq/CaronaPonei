import styled from 'styled-components/native';
import themes from '../../themes';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${themes.padrao.colors.neutral.neutral_1};
`
export const Title = styled.Text`
color: ${props => props.theme.color};
font-size: 44px; 
`