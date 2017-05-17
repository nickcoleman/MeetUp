import Expo from 'expo';
import React from 'react';
import { 
  ActivityIndicator,
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import { fetchMeetups } from './constants/api';

class App extends React.Component {
  static defaultProps = {
    fetchMeetups,
  }

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const data = await this.props.fetchMeetups();
    console.log('Meetup Data', data)
    this.setState({ loading: false, meetups: data.meetups })
  }

  renderMeetups() {
    this.state.meetups.map((meetup, i) => {
      return (
        <div key={i}>
          {meetup.title}
        </div>
      )
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Meetup Mobile App</Text>
        {this.state.meetups.map((meetup, i) => (
          <Text key={i}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
