import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../../themes'

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: ${themes.padrao.colors.neutral.neutral_0};
    flex-direction: row;
    border-radius: 32px;
    padding-left: 16px;
    align-items: center;
    margin-bottom: 16px;
`
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${themes.padrao.colors.neutral.neutral_6};
    margin-left: 8px;
`

const BotaoTouch = styled.TouchableOpacity`
    padding-right: 8px; 
`

export default ({ icon, placeholder, value, onChangeText, password}) => {
    const [senha, setSenha] = useState(password);
    return (
        <InputArea>
            <MaterialCommunityIcons name={icon} size={25} color={themes.padrao.colors.neutral.neutral_6} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={themes.padrao.colors.neutral.neutral_6}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={senha}
            />
            {password &&
                <BotaoTouch onPress={() => setSenha(!senha)}>
                    <MaterialCommunityIcons name={senha ? 'eye' : 'eye-off'} size={25} color={themes.padrao.colors.neutral.neutral_6} />
                </BotaoTouch>}
        </InputArea>
    )
}