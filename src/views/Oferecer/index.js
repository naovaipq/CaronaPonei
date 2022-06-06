import React from "react";
import { Container, Title } from './styles';
import { useNavigation } from "@react-navigation/native";

import Fab from '../../components/styled/Fab'

const Oferecer = () => {

    const navigation = useNavigation()

    return (
        <>
            <Container>
                <Fab
                    title="Nova Carona"
                    onPress={() => navigation.navigate('Carona')}
                />

            </Container>
        </>
    )
}

export default Oferecer;