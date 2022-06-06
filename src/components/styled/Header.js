import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

const Container = styled.SafeAreaView`
    width: 100%;
    background-color: ${themes.padrao.colors.brand.azulEscuro};
    padding-top: 32px;         
    padding-bottom: 8px;
    height: 80px;              
    flex-direction: row;
    align-items: center;
    jutify-content: center;
`
const Title = styled.Text`
font-size: 22px;
color: ${themes.padrao.colors.neutral.neutral_0};
flex: 1
`
const Header =({ headerTitle }) => {
    return(
        <Container>
            <Title>{headerTitle}</Title>
        </Container>
    )
}
export default Header