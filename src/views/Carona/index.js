import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, ActivityIndicator, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '../../components/styled/Header'
import themes from '../../themes'
import Api from '../../resources/api/Api'
import { Alert } from 'react-native-web'

export default ({ route }) => {
    const navigation = useNavigation()

    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.carona :
        {
            ponei: '',
            data: '',
            horario: '',
            logradouro_origem: '',
            logradouro_destino: '',
            preco: '',
        }

    const [carona, setCarona] = useState(registroInicial)

    const salvarCarona = async (dadosCarona) => {
        let salvar = dadosCarona.hasOwnProperty('_id') ? await Api.alteraCarona(dadosCarona) : await Api.incluiCarona(dadosCarona)
        if (salvar.hasOwnProperty('errors')) {
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if (salvar.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? alert(`✅Tudo OK: Carona salva com sucesso `) : Alert.alert("✅Tudo OK", 'Carona salva com sucesso')
            navigation.navigate('Tabs')
        }
    }

    const excluirCarona = async (dadosCarona) => {
        let excluir = await Api.excluiCarona(dadosCarona)
        if (excluir.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? alert(`✅Tudo OK: Carona excluida com sucesso `) : Alert.alert("✅Tudo OK", 'Carona excluida com sucesso')
            navigation.navigate('Tabs')
        }

    }
    return (
        <>
            <Header headerTitle="Nova Carona" />
            <View>
                <Text>Preencha as informações abaixo para cadastrar uma carona</Text>

                <Text style={styles.label}>Ponei</Text>
                <TextInput
                    name='ponei'
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, ponei: text })}
                    value={carona.ponei}
                    keyboardType='default'
                    placeholder='Seu nome'
                    maxLength={250}
                />

                <Text style={styles.label}>Data</Text>
                <TextInput
                    name='data'
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, data: text })}
                    value={carona.data}
                    keyboardType='numbers-and-punctuation'
                    placeholder='YYYY-MM-DD'
                    maxLength={10}
                />

                <Text style={styles.label}>Horario</Text>
                <TextInput
                    name='horario'
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, horario: text })}
                    value={carona.horario}
                    keyboardType='numbers-and-punctuation'
                    placeholder='Horário'
                    maxLength={100}
                />

                <Text style={styles.label}>Logradouro Origem</Text>
                <TextInput
                    name="logradouro_origem"
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, logradouro_origem: text })}
                    value={carona.logradouro_origem}
                    keyboardType="default"
                    placeholder='Logradouro da origem'
                />

                <Text style={styles.label}>Logradouro Destino</Text>
                <TextInput
                    name="logradouro_destino"
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, logradouro_destino: text })}
                    value={carona.logradouro_destino}
                    keyboardType="default"
                    placeholder='Logradouro da destino'
                />

                <Text style={styles.label}>Preço</Text>
                <TextInput
                    name="Preco"
                    style={styles.input}
                    onChangeText={(text) => setCarona({ ...carona, preco: text })}
                    value={carona.preco}
                    keyboardType="default"
                    placeholder='Preço'
                />

                <Button
                    style={styles.button}
                    onPress={() => salvarCarona(carona)}
                    title='Salvar a Carona'
                    color={themes.padrao.colors.alerts.sucess}
                    accessibilityLabel='Salvar Carona'
                />
                <Button
                    style={styles.button}
                    onPress={() => navigation.navigate('Tabs')}
                    title='Cancelar'
                    color={themes.padrao.colors.neutral.neutral_6}
                    accessibilityLabel='Cancelar'
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 8,
        borderColor: themes.padrao.colors.brand.laranja,
    },
    label: {
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 4,
        fontSize: 14
    },
    button: {
        marginTop: 16,
        width: 50,
    }

})