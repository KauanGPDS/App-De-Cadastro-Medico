import { VStack, Text, Avatar } from "native-base";
import Btn from "./Button";

interface CardsProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export default function Card({
  nome,
  foto,
  especialidade,
  data,
  foiAtendido,
  foiAgendado,
}: CardsProps): JSX.Element {
  return (
    <VStack w={'100%'} bg={foiAtendido ? 'blue.100': 'white'} borderRadius={'lg'} shadow={'2'} p={5} mt={2} mb={5}>
      <VStack flexDirection={'row'}>
        <Avatar source={{ uri: foto }} size={"xl"} />
        <VStack pl={4} pt={3}>
          <Text fontSize={'md'} bold>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          {data && <Text>{data}</Text>}
        </VStack>
      </VStack>
      <Btn mt={4}>{foiAgendado ? 'Cancelar' : 'Agendar consulta'}</Btn>
    </VStack>
  );
}
