import { VStack, Image, Text, Box, FormControl, Input, Link, Checkbox } from "native-base"
import Logo from "./assets/Logo.png"
import { Titulo } from "./componetes/Titulo";
import Btn from "./componetes/Button";
import Label from "./componetes/Label";
import { useState } from "react";
import { idText } from "typescript";


export default function Cadastro() {

  const [numSecao, setNumeroSecao] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  function avancar() {
    if (numSecao < 1 || numSecao < 2) {
      return setNumeroSecao(numSecao + 1)
    } 

  }
  function voltar(){
    if(numSecao >0){
      return setNumeroSecao(numSecao - 1)
    }
  }


  const obj = [
    {
      id: 1,
      tituloSessao: "Insira alguns dados\nBásicos:",
      entradaDeTexto: [{
        id: 1,
        tituloLabel: "Nome",
        placeholderInput: "Digite Seu Nome Completo"
      }, {
        id: 2,
        tituloLabel: "Email",
        placeholderInput: "Insira seu endereço de email"
      }, {
        id: 3,
        tituloLabel: "Crie Uma Senha",
        placeholderInput: "Insira Sua Senha"
      }, {
        id: 4,
        tituloLabel: "Repita a senha",
        placeholderInput: "Insira Novamente Sua Senha Sua Senha"
      }]
    }, {
      id: 2,
      tituloSessao: "Agora, mais alguns dados\nsobre você:",
      entradaDeTexto: [{
        id: 1,
        tituloLabel: "Cep",
        placeholderInput: "Insira seu cep",
        identificao:"cepId"
      }, {
        id: 2,
        tituloLabel: "Endereço",
        placeholderInput: "Insira seu endereço",
        identificao:"enderecoId"
      }, {
        id: 3,
        tituloLabel: "Número",
        placeholderInput: "Insira seu número",
        identificao:"numeroId"
      }, {
        id: 4,
        tituloLabel: "Complemento",
        placeholderInput: "Insira seu complemento",
        identificao:"complementoId"
      }, {
        id: 5,
        tituloLabel: "Telefone",
        placeholderInput: "(00) 00000-0000"
      }]
    },{
      id: 3,
      tituloSessao: "Para finalizar, qual é seu plano de saúde:",
      caixaDeCheck: [{
        id: 1,
        value:"SulAmerica"
      },{
        id: 2,
        value:"Unimed"
      }, {
        id: 3,
        value:"Bradesco"
      }, {
        id: 4,
        value:"Amil"
      }, {
        id: 5,
        value:"Biosaúde"
      },{
        id: 6,
        value:"Biovida"
      },{
        id: 7,
        value:"Outros"
      },{
        id: 8,
        value:"Não tenho plano"
      }]
    }
  ]
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo" />
      <Titulo>
        {obj[numSecao].tituloSessao}
      </Titulo>
      {
        numSecao < 2 ? (obj[numSecao].entradaDeTexto.map((texto) => (
          <Label
            childrenLabel={texto.tituloLabel}
            placeholder={texto.placeholderInput}
            identificao={texto.identificao || texto.tituloLabel}
            key={texto.id}
          />
        ))) :(<Box display='flex' flexDirection="column" alignItems="flex-start" key={10} w={'100%'} mt={5}>
          <Titulo color={'blue.800'} fontSize={'20'} mb={3} fontWeight={'bold'}>
              Selecione o plano:
          </Titulo>
          {
          obj[2].caixaDeCheck.map((checkbox) =>(
            <Checkbox key={checkbox.id} value={checkbox.value}  mb={3} isChecked={selectedValue === checkbox.value}
            onChange={() => setSelectedValue(checkbox.value)}>
             <Text fontSize={20}>{checkbox.value}</Text>
            </Checkbox>)

          )
        }
        </Box>)
      }
      {
         numSecao > 0 && (
          <Btn bg={"grey.400"} onPress={voltar}>
            Voltar
          </Btn>
        )
      }
      {
        numSecao >= 0 && numSecao < 2 ?
        (<Btn onPress={avancar}>
        Avançar
      </Btn>) : (
        <Btn onPress={avancar}>
        Finalizar Cadastro!
      </Btn>
      )
      }
    </VStack>
  );
}


