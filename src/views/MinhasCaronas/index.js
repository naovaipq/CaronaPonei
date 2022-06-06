import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator, Text } from 'react-native'
import { Container, Title } from './styles'
import Header from '../../components/styled/Header'
import Api from '../../resources/api/Api'
import themes from '../../themes'
import ListaCarona from '../../components/styled/ListaCaronas'
import Fab from '../../components/styled/Fab'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function MinhasCaronas() {

    const [loading, setLoading] = useState(false)
    const [listaCaronas, setListaCaronas] = useState([])
    const navigation = useNavigation()

    async function getCaronas() {
        setLoading(true)
        let res = await Api.getCaronas()
        res.ok === 0
            ? alert(`Não foi possível obter a lista de Caronas ${res.codeName}`)
            : setListaCaronas(res)

            console.log(listaCaronas)
        setLoading(false)
    }
    //Carregando os dados na primeira vez
    useEffect(() => {
        getCaronas()
    }, [])

    return (
        <>
            <Header headerTitle="Minhas Caronas" />
            <Container>
                <ScrollView>
                    {loading &&
                        <ActivityIndicator size="large"
                            color={themes.padrao.colors.brand.azulEscuro} />
                    }
                    {listaCaronas.length === 0 && !loading &&
                        <Text>Não existe nenhuma carona cadastrado.</Text>
                    }
                    <Text>Atualizar Caronas &nbsp;
                        <MaterialCommunityIcons name="cloud-refresh" size={16} color={themes.padrao.colors.brand.azulEscuro} onPress={() => getCaronas()} />
                    </Text>
                    {listaCaronas.map((carona, k) => (
                        <ListaCarona key={k} data={carona} />
                    ))}
                </ScrollView>
                
            </Container>
        </>
    )
}