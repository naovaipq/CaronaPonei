import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'
import { MaterialIcons } from '@expo/vector-icons';

export default ({ data }) => {
    const navigation = useNavigation()
    const navegaDetalhe = () => {
        navigation.navigate('Carona', { carona: data })
    }

    return (
        <Area onPress={navegaDetalhe}>
            <InfoArea>
                <Header>
                    <Ponei>{data.ponei}</Ponei>
                    <Avatar source={{ uri: `https://ui-avatars.com/api?background=FFE5AA&color=3B5998&name=${data.ponei}` }} />
                </Header>

                <Data>Data: {data.data}</Data>

                <LogradouroOrigem>
                    De:
                    <MaterialIcons
                        name='location-on'
                        size={20}
                        color={themes.padrao.colors.neutral.neutral_0} />
                    <Logradouro>{data.logradouro_origem}</Logradouro>
                </LogradouroOrigem>

                <LogradouroDestino>
                    Para:
                    <MaterialIcons
                        name='location-on'
                        size={20}
                        color={themes.padrao.colors.neutral.neutral_0} />
                    <Logradouro>{data.logradouro_destino}</Logradouro>
                </LogradouroDestino>

                <Preco>Preço: R${data.preco}</Preco>
            </InfoArea>
        </Area>
    )
}

const InfoArea = styled.View`
margin-left: 24px;
justify-content: space-between;
`

const Area = styled.TouchableOpacity`
background: ${themes.padrao.colors.brand.azulClaro};
margin-top: 16px;
border-radius: 10px;
padding: 8px;
flex-direction: row;
width: 350px
`

const Header = styled.View`
flex-direction: row
align-items: center;
justify-content: center;
`

const Ponei = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.neutral.neutral_0};
font-weight: bold;
padding-right: 50%
`

const Avatar = styled.Image`
width: 60px;
height: 60px;
border-radius: 30px;
pedding-left-: 50%
`

const Data = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_0};
font-size: 14px;
margin-top: 4px;
`

const LogradouroOrigem = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_0};
`

const LogradouroDestino = styled.Text`
color: ${themes.padrao.colors.neutral.neutral_0};
`

const Logradouro = styled.Text`
flex-direction: col;
color: ${themes.padrao.colors.neutral.neutral_0};
`

const Preco = styled.Text`
font-size: 16px;
margin-left: 175px;
font-weight: bold;
color: ${themes.padrao.colors.neutral.neutral_0};
`

const BotaoDetalhes = styled.View`
width: 140px;
height: 32px;
background: ${themes.padrao.colors.brand.azulClaro};
border-radius: 8px;
justify-content: center;
align-items: center;
`

const BotaoDetalhesText = styled.Text`
font-size: 13px;
padding: 8px;
color: ${themes.padrao.colors.neutral.neutral_0}
`
