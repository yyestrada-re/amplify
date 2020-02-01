import { createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './components/Home';
import NavBar from './components/NavBar';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  NavBar: {
    screen: NavBar
  },
});

const App = createAppContainer(RootStack);

export default App;