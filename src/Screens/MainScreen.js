import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
export default function MainScreen({navigation}) {
  return (
    <View style={styles.mainCon}>
      <View style={styles.imgView}>
        <Image source={require('./../../assets/logo.png')} style={styles.img} />
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.text}>
          <Text style={styles.heading}>Stay connected with everyone! </Text>
          <Text style={styles.subheading}> Sign in with account </Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnText}>Get Started </Text>
          <Icon name="chevron-right" color="white" size={25} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: 'rgb(0, 140, 111)',
  },
  imgView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    paddingTop: 40,
    paddingLeft: 25,
  },
  heading: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  subheading: {
    color: 'gray',
    lineHeight: 30,
    fontSize: 17,
  },
  btn: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(0, 140, 111)',
    height: 40,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 20,
    marginVertical: 35,
    flexDirection: 'row',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
