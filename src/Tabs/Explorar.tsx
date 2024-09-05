import {ScrollView,Text, Box} from "native-base"
import InputT from "../componetes/Input"
import Btn from "../componetes/Button"
import { Titulo } from "../componetes/Titulo"
import Card from "../componetes/Card"

export default function Explorar(){
    return(
        <ScrollView>
           <Box  height={150} w={350} p={3}  m={5} 
               >
                    <InputT placeholder="Digite a especialidade" width="100%" shadow={1} />
                    <InputT placeholder="Digite sua localização" width="100%" mt={3} shadow={1} />
                    <Btn mt={3} shadow={1} alignSelf="center">Buscar</Btn>
                </Box>

                <Titulo color={'blue.500'} fontSize={30}>Resultado da busca</Titulo>
                <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' />
                <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' foiAgendado foiAtendido/>
                <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' />
        </ScrollView>
    )
}