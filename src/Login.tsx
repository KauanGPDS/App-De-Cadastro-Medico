import {VStack,Image,Text,Box,FormControl,Input,Link} from "native-base"
import {TouchableOpacity} from 'react-native'
import Logo from "./assets/Logo.png"
import { Titulo } from "./componetes/Titulo";
import Btn from "./componetes/Button";
import Label from "./componetes/Label";
import InputT from "./componetes/Input";

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo"/>
      
      <Titulo>
        Faca Login Em sua Conta
      </Titulo>
      <Box>
        <Label childrenLabel="Email" placeholder="Insira Seu Endereço De Email"/>
         
        <Label childrenLabel="Senha" placeholder="Insira A Sua Senha"/>
        
      </Box>
        <Btn onPress={() => navigation.navigate('tabs')}>
          Entrar
        </Btn>
      <Box w={"100%"} alignItems={"center"} justifyContent={"center"} mt={10}>
      <Link>
      Esqueceu Senha ?
      </Link>
      <Box w={"100%"} flexDirection={'row'} marginLeft={10}>
        <Text> Ainda Não Possui Cadastro ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color={"blue.500"}>
            Faça Seu Cadastro
          </Text>
        </TouchableOpacity>
      </Box>
      </Box>
    </VStack>
  );
}


