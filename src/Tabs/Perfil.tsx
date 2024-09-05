import {Text,ScrollView,Avatar,Divider,VStack, Center} from "native-base"
import { Titulo } from "../componetes/Titulo"

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.800"}>Meu Perfil</Titulo>
                <Avatar source={{uri:"https://avatars.githubusercontent.com/u/107084933?v=4"}} mt={5} size={"xl"} ></Avatar>
                <Titulo color={"blue.800"} >Informações Pessoais</Titulo>
                <Titulo fontSize={"lg"}>Kauan Guilherme</Titulo>
                <Titulo fontSize={"lg"}>26/11/2004</Titulo>
                <Titulo fontSize={"lg"}>Bahia</Titulo>

                <Divider mt={5} mb={1}>
                    
                    
                </Divider>
                <Titulo color={"blue.800"}>Historico Medico</Titulo>
                    <Text fontSize={"lg"}>Sinusite</Text>
                    <Text fontSize={"lg"}>Rinite</Text>
            </VStack>
        </ScrollView>
    )
}