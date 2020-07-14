// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import firebase from '../database/firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
      <View style={styles.container}>
        <Image
          source={require('../Images/MentorBoxIcon.jpeg')}
          style={styles.logo}
        />
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
        <Text style = {styles.textStyle}>
          Welcome to the Mentorbox homepage!!
        </Text>
        <Button
          color="#33782b"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#f7f7f7'
  },
  logo: {
    width: '90%',
    resizeMode: 'contain',
    margin: 10,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});