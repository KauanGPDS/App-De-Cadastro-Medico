import Rotas  from "./src/Rotas";
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'; // Importe os provedores necessários do NativeBase
import { TEMAS } from './src/estilos/temas';

export default function App() {
  return (
    <NativeBaseProvider>
          <StatusBar backgroundColor={TEMAS.colors.gray[300]} barStyle="light-content" />
          <Rotas/>
    </NativeBaseProvider>
  );
}