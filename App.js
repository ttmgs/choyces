import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/homeScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Choyces',
        headerShown: false
    }
});

export default createAppContainer(navigator);