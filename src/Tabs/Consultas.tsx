import {ScrollView,Text, Divider} from "native-base"
import Card from '../componetes/Card'
import { Titulo } from "../componetes/Titulo"
import Btn from "../componetes/Button"
export default function Consultas(){
    return(
        <ScrollView p={5} mb={4}>
            <Titulo color={'blue.500'} fontSize={30}>
                Minhas consultas
            </Titulo>
            <Btn mt={3}>
                Agendar outra consultas
            </Btn>
            <Text color={'blue.500'} mt={5} fontSize={20} bold>
                Próximas Consultas
            </Text>
            <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4'/>
            <Divider mt={5} color={'black'}/>
            <Text color={'blue.500'} mt={5} fontSize={20} bold>
               Consultas passadas
            </Text>
            <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' foiAgendado foiAtendido/>
            <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' foiAgendado foiAtendido/>
            <Card nome={'Dr.Kauan'} especialidade={'Cardiologista'} data={'26/11/2004'} foto='https://avatars.githubusercontent.com/u/107084933?v=4' foiAgendado foiAtendido />
            
            
        </ScrollView>
    )
}