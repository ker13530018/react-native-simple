import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/home'
import DocumentScreen from './src/document'
import SquareScreen from './src/square'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Hello',
      },
    },
    Document: {
      screen: DocumentScreen,
      navigationOptions: {
        title: 'Document',
      },
    },
    Square: {
      screen: SquareScreen,
    },
  },
  {
    initialRouteName: 'Square',
  },
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return <AppContainer />
}

export default App
