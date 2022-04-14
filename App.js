import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/homeScreen';
import AboutChoycesScreen from './src/screens/aboutChoycesScreen';
import GameScreen from './src/screens/gameScreen';
import BooksScreen from './src/screens/booksScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutChoycesScreen,
    Games: GameScreen,
    Books: BooksScreen

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Choyces',
        headerShown: false
    }
});

export default createAppContainer(navigator);