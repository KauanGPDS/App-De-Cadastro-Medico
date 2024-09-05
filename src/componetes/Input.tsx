import {Input,ITextProps} from "native-base"

interface Conteudo extends  ITextProps{
    placeholder:string
    identificao?:string
}

export default function InputT({placeholder,identificao,...rest}:Conteudo){
    return(
        <Input
            placeholder={placeholder}
            size={'lg'}
            w={"100%"}
            borderRadius={"lg"}
            bgColor={'gray.100'}
            shadow={3} 
            id={identificao}
            {...rest}
          />
    )
}