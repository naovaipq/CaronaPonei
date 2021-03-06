import React, { useEffect } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
// expo install @react-native-async-storage/async-storage
import themes from '../../themes'
import Api from '../../resources/api/Api'
import { Container, Title } from './styles'
import { ActivityIndicator } from 'react-native'

import PonyLogin from '../../components/svg/PonyLogin'

export default function Preload() {
    const navigation = useNavigation()
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) { //Se o token existir, verificamos se é válido
                let res = await Api.checkToken(token)
                if (res.access_token) { //Se retornou o token, está ok
                    await AsyncStorage.setItem('token', res.access_token)
                    navigation.navigate('Signin')
                } else {
                    navigation.navigate('Signin') //Token é inválido
                }
            } else { //Token não existe no AsyncStorage
                navigation.navigate('Signin')
            }
        }
        checkToken()
    }, [])

    return (
        <Container>
            <PonyLogin />
            <ActivityIndicator size="large"
                color={themes.padrao.colors.brand.azulEscuro} />
            <Title>Aguarde...</Title>
        </Container>
    )
}