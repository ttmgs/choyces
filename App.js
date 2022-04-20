import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/homeScreen';
import AboutChoycesScreen from './src/screens/about/aboutChoycesScreen';
import GameScreen from './src/screens/games/gameScreen';
import BooksScreen from './src/screens/books/booksScreen';
import BookDetailScreen from './src/screens/books/bookDetailScreen';
import VideoScreen from './src/screens/videos/videosScreen';


const navigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutChoycesScreen,
    Games: GameScreen,
    Books: BooksScreen,
    BookDetail: BookDetailScreen,
    Videos: VideoScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Choyces',
        headerShown: false
    }
});

export default createAppContainer(navigator);