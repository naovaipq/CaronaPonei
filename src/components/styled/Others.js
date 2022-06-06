import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

export const Container = styled.SafeAreaView`
background-color: ${themes.padrao.colors.brand.azulClaro};
flex: 1;
justify-content: center;
align-items: center;
`

export const ImagemSVG = styled.View`
transform: scale(${props => props.escala});
flex: 1;
`
export const InputArea = styled.ScrollView`
padding: 16px;
width: 90%;
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px; 
`

const MessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 16px;
margin-bottom: 16px;
`
const MessageButtonText = styled.Text`
font-size: 16px;
color: ${props => props.theme.color};
`
const MessageButtonTextBold = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.neutral.neutral_6};
font-weight: bold;
margin-left: 8px;
`

// const PonyButtonTab = styled.View`
// width: 60px,
// height: 60px;
// margin-bottom: 20px
// `

export const StyledMessageButton = ({ text, textBold, onPress }) => {
    return (
        <MessageButton
            onPress={onPress}>
            <MessageButtonText>{text}</MessageButtonText>
            <MessageButtonTextBold>{textBold}</MessageButtonTextBold>
        </MessageButton>
    )
}

const CustomButton = styled.TouchableOpacity`
flex-direction: row;
height: 64px;
background-color: ${themes.padrao.colors.neutral.neutral_6};
margin-top: 16px;
border-radius: 0px;
justify-content: center;
align-items: center;
border-radius: 10px;
`
const CustomButtonText = styled.Text`
margin-left: 16px;
font-size: 18px;
color: ${themes.padrao.colors.neutral.neutral_0};
`

export const StyledButton = ({ icon, text, onPress }) => {
    return (
        <CustomButton
            onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={30} color={themes.padrao.colors.neutral.neutral_0} />
            <CustomButtonText>{text}</CustomButtonText>
        </CustomButton>
    )
}
