import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


export default class Signup extends Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      phoneNumber: '',
      isLoading: false
    }
  }

  restrictNum(val) {

  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '' && this.state.phoneNumber === '') {
      Alert.alert('Enter details to Sign Up!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '',
          password: '',
          phoneNumber: '',
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#7b7d8f"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Image
          source={require('../Images/MentorBoxIcon.jpeg')}
          style={styles.logo}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputStyle}
          inputType = "Number"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChangeText={(val) => this.updateInputVal(val, 'phoneNumber')}
          maxLength={10}
        />
        <Button
          color="#33782b"
          title="Sign Up"
          onPress={() => this.registerUser()}
        />
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#f7f7f7'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 5,
    paddingBottom: 5,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#4612e3',
    marginTop: 25,
    textAlign: 'center'
  },
  logo: {
    width: '90%',
    resizeMode: 'contain',
    margin: 10,
    alignItems: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});