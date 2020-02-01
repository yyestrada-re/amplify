import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home';
import NavBar from './components/NavBar';

const RootStack = createStackNavigator({
  Home: { //original list
    screen: Home
  },
  NavBar: {
    screen: NavBar
  },
})

const App = createAppContainer(RootStack);

 export default App;
