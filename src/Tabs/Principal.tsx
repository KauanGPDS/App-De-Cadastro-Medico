import { VStack, Text, Image, ScrollView, Box, Divider } from "native-base"
import Logo from "../assets/Logo.png"
import { Titulo } from "../componetes/Titulo"
import InputT from "../componetes/Input"
import Btn from "../componetes/Button"

export default function Princpal() {
    return (
        <ScrollView>
            <VStack>
                <Box display={'flex'} m={30}  >
                    <Image source={Logo} alt="Logo" />
                    <Titulo color={'blue.500'} fontSize={30}
                        textAlign="left"
                    >
                        Boas-vindas!
                    </Titulo>
                </Box>
               
                <Box  height={150} w={350} p={3}  m={5} 
               >
                    <InputT placeholder="Digite a especialidade" width="100%" shadow={1} />
                    <InputT placeholder="Digite sua localização" width="100%" mt={3} shadow={1} />
                    <Btn mt={3} shadow={1} alignSelf="center">Buscar</Btn>
                </Box>
                <Titulo color={'blue.800'} fontSize={30}>
                    Depoimentos
                </Titulo>
                <Box   justifyContent="center"
                w='100%'
                alignItems="center"
                mt={4}>
                    <Box
                     width={280}
                    >
                    <Text fontSize={18}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </Text>
                    <Titulo fontSize={20}>
                        Júlio,40 anos,São Paulo/sp
                    </Titulo>
                    </Box>
                    <Divider mt={5} mb={5}/>
                    <Box
                     width={280}
                    >
                    <Text fontSize={18}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </Text>
                    <Titulo fontSize={20}>
                        Júlio,40 anos,São Paulo/SP
                    </Titulo>
                    </Box>
                    <Divider mt={5} mb={5}/>
                    <Box
                     width={280}
                    >
                    <Text fontSize={18}>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    </Text>
                    <Titulo fontSize={20} mt={5}>
                        Júlio,40 anos,São Paulo/SP
                    </Titulo>
                    </Box>
                    <Divider mt={5} mb={5}/>
                    <Box
                     width={280}
                    >
                    <Text fontSize={18} mt={5}>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
                    </Text>
                    <Titulo fontSize={20} mt={5} mb={50}>
                        Júlio,40 anos,São Paulo/SP
                    </Titulo>
                    </Box>
                </Box>
                
            </VStack>
        </ScrollView>
    )
}