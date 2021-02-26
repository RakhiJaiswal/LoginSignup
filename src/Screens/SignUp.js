import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import SignUpForm from '../Components/SignUpForm';
import * as Animatable from 'react-native-animatable';
export default function SignUp() {
  return (
    <View style={styles.mainCon}>
      <View style={styles.header}>
        <View style={styles.heading1View}>
          <Text style={styles.heading1}> Register Now!</Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <KeyboardAvoidingView behavior="height">
            <SignUpForm screenName="SignIn" />
          </KeyboardAvoidingView>
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
    flex: 2,
    justifyContent: 'flex-end',
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
    flex: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
