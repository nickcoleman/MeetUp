import Expo, { AppLoading } from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { cachedFonts } from './helper';
import Root from './src/Root';

EStyleSheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this.loadAssestsAsync();
  }

  async loadAssestsAsync() {
    const fontAssests = cachedFonts([
      { montserrat: require('./assets/fonts/Montserrat-Regular.ttf') },
      { montserratBold: require('./assets/fonts/Montserrat-Bold.ttf') },
      { montserratLight: require('./assets/fonts/Montserrat-Light.ttf') },
      { montserratMed: require('./assets/fonts/Montserrat-Medium.ttf') },
    ]);

    await Promise.all(fontAssests);
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <Root />;
  }
}

Expo.registerRootComponent(App);
