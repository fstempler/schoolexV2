
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import  store  from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts(fonts)


  if(!fontsLoaded) {
    return null
  } 
return  ( 
  <Provider store={store}>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </Provider>
)

}

