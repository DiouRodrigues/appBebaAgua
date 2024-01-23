import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { Routes} from './src/routes/routes';
import { UserProvider } from './src/Contexts/UserContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
      <StatusBar style="auto" />
      <Routes/>
      </UserProvider>
    </NativeBaseProvider>
    
  );
}

