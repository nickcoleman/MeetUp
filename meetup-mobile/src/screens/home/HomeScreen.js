import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MeetupApi } from '../../../constants/api';
import styles from './styles/HomeScreen';

import { LoadingScreen } from '../../common';
import { MyMeetupsList } from './components';

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
  static defaultProps = {
    meetupApi,
  }

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const meetups = await this.props.meetupApi.fetchGroupMeetup();
    console.log('HomeScreen componentDidMount called', meetups[0]);
    // setTimeout(() => this.setState({ loading: false, meetups }), 2000);
    this.setState({ loading: false, meetups });
  }

  renderMeetups() {
    return this.state.meetups.map(meetup => {
      return (
        <View key={meetup._id}>
            <Text>{meetup.title}</Text>
        </View>
      );
    });
  }


  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={this.state.meetups} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
