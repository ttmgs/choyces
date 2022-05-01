import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/homeScreen';
import AboutChoycesScreen from './src/screens/about/aboutChoycesScreen';
import GameScreen from './src/screens/games/gameScreen';
import BooksScreen from './src/screens/books/booksScreen';
import BookDetailScreen from './src/screens/books/bookDetailScreen';
import VideoScreen from './src/screens/videos/videosScreen';
import TriviaGameScreen from './src/screens/games/Trivia/triviaGameScreen';
import TriviaStartScreen from './src/screens/games/Trivia/triviaStartScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutChoycesScreen,
    Games: GameScreen,
    Books: BooksScreen,
    BookDetail: BookDetailScreen,
    Videos: VideoScreen,
    Trivia: TriviaGameScreen,
    TriviaStart: TriviaStartScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Choyces',
        headerShown: false
    }
});

export default createAppContainer(navigator);