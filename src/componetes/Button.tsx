import { Button,ITextProps } from "native-base";
import { ReactNode } from "react"
interface Titulo extends ITextProps{
    children:ReactNode
}

export default function Btn({children,...rest}:Titulo){
    return(
        <Button  w={"100%"}
        bg={"blue.800"}mt={10}
        borderRadius={"lg"}
        shadow={3}
        {...rest}>
            {children}
        </Button>
    )
}