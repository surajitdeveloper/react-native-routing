import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import App from './App'

const Nav = createStackNavigator({
  Home: { screen: Home },

});