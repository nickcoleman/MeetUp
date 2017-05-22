import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles/LoadingScreen';

const LoadingScreen = () => (
    <View style={styles.root}>
        <ActivityIndicator size="large" />
        <Text>Loading Meetups</Text>
    </View>
);

export default LoadingScreen;
