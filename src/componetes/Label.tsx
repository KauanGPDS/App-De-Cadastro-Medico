import { FormControl,ITextProps } from "native-base";
import {  ReactNode} from "react";
import InputT from "./Input";

interface Conteudo extends ITextProps{
    childrenLabel:ReactNode
    placeholder:string
    identificao?:string
}

export default function Label({childrenLabel,placeholder,identificao,...rest}:Conteudo){
    return(
        <FormControl  {...rest}>
            <FormControl.Label  {...rest}>{childrenLabel}</FormControl.Label>
            <InputT placeholder={placeholder} id={identificao} />
        </FormControl>
    )
}