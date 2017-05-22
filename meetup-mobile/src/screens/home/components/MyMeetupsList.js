import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles/MyMeetupsList';

const MyMeetupsList = ({ meetups }) => (
  <View style={styles.root}>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Meetups</Text>
    </View>

    <View style={styles.contentContainer}>
      <ScrollView horizontal>
          {meetups.map((meetup, i) => (

            <View key={i} style={styles.meetupCard}>

              <View style={styles.meetupCardTopContainer}>
                <Text style={styles.meetupCardTitle}>
                  {meetup.title}
                </Text>
              </View>

              <View style={styles.meetupCardBottomContainer}>
                <Text style={styles.meetupCardMetaName}>
                  {meetup.group.name}
                </Text>
                <Text style={styles.meetupCardMetaData}>
                  Jul 3 4:00pm
                </Text>
              </View>

            </View>
          ))}
      </ScrollView>
    </View>
  </View>

);

export default MyMeetupsList;
