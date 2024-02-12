import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainAppbar from './components/MainAppBar';
import Settings from './screens/Settings'
import ThemeProvider from './context/ThemeProvider'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './screens/Home'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="Light-content" />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{header: (props) =>
              <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
          }}
        >
          <Stack.Screen name="Home">
            {() =>
              <Home />
            }
          </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});