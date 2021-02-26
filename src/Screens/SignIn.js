import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SignInForm from '../Components/SignInForm';
import * as Animatable from 'react-native-animatable';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignIn() {
  return (
    <View style={styles.mainCon}>
      <View style={styles.header}>
        <View style={styles.heading1View}>
          <Text style={styles.heading1}> Welcome!</Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <SignInForm screenName="SignUp" />
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: 'rgb(0, 140, 111)',
  },
  header: {
    //flex: 2,
    justifyContent: 'flex-end',
    height: windowHeight * 0.3,
  },
  heading1View: {
    marginBottom: 50,
    marginLeft: 20,
  },
  heading1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    //flex: 5,
    height: windowHeight * 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
