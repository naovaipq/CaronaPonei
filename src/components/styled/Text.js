import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Titulo = styled.Text`
font-size: 48px;
color: ${themes.padrao.colors.neutral.neutral_0};
margin-top: 24px;
margin-bottom: 16px;
justify-content: center;
align-items: center;
`

export const SubTitulo = styled.Text`
font-size: 16px;
padding-left: 8px;
padding-right: 8px;
color: ${props => props.theme.color};
margin-top: 8px;
margin-bottom: 8px;
`

const LinkLegenda = styled.TouchableOpacity`
flex-direction: row;
height: 32px;
margin-top: 8px;
border-radius: 0px;
justify-content: center;
align-items: center;
`
export const Legenda = styled.Text`
margin-left: 16px;
font-size: 14px;
color: ${themes.padrao.colors.neutral.neutral_0};
`

export const StyledLinkLegenda = ({ text, onPress }) => {
    return (
        <LinkLegenda
            onPress={onPress}>
            <Legenda>{text}</Legenda>
        </LinkLegenda>
    )
}