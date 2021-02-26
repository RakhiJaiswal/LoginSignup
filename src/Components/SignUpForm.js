import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Eye from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
Icon.loadFont();
Eye.loadFont();
const ReviewSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`),
  confirmpass: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Password do not match'),
});

export default function SignUpForm({screenName}) {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [toggleeye, setEye] = useState('eye-slash');

  const [showCon, setShowCon] = useState(true);
  const [toggleEyeCon, setEyeCon] = useState('eye-slash');

  function visibleMode2() {
    if (showCon) {
      setShowCon(false);
      setEyeCon('eye');
    } else {
      setShowCon(true);
      setEyeCon('eye-slash');
    }
  }

  function visibleMode() {
    if (show) {
      setShow(false);
      setEye('eye');
    } else {
      setShow(true);
      setEye('eye-slash');
    }
  }
  return (
    <>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{email: '', password: '', confirmpass: ''}}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}>
        {(props) => (
          <View style={styles.formView}>
            <Text style={styles.textLabel}>E-mail</Text>
            <View style={styles.view1}>
              <Icon name="person" size={25}></Icon>
              <TextInput
                keyboardType="email-address"
                style={styles.inp}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                placeholder="Your Email"
                onBlur={props.handleBlur('email')}></TextInput>
            </View>

            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <Text style={{...styles.textLabel, ...styles.marginPass}}>
              Password
            </Text>
            <View style={styles.view1}>
              <Icon name="lock" size={25}></Icon>
              <TextInput
                secureTextEntry={show}
                style={styles.inp}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                placeholder="Your Password"
                onBlur={props.handleBlur('password')}></TextInput>
              <Eye name={toggleeye} size={20} onPress={visibleMode} />
            </View>

            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>

            <Text style={{...styles.textLabel, ...styles.marginPass}}>
              Confirm Password
            </Text>
            <View style={styles.view1}>
              <Icon name="lock" size={25}></Icon>
              <TextInput
                secureTextEntry={showCon}
                style={styles.inp}
                onChangeText={props.handleChange('confirmpass')}
                value={props.values.confirmpass}
                placeholder="Confirm Your Password"
                onBlur={props.handleBlur('confirmpass')}></TextInput>
              <Eye name={toggleEyeCon} size={20} onPress={visibleMode2} />
            </View>

            <Text style={styles.errorText}>
              {props.touched.confirmpass && props.errors.confirmpass}
            </Text>

            <TouchableOpacity style={styles.btn1} onPress={props.handleSubmit}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => navigation.navigate(screenName)}>
              <Text
                style={{
                  color: 'rgb(0, 140, 111)',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  formView: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  textLabel: {
    fontSize: 17,
  },
  marginPass: {
    marginTop: 20,
  },
  inp: {
    marginVertical: 5,
    padding: 7,
    width: '88%',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  btn1: {
    //width: '100%',
    borderRadius: 17,
    backgroundColor: 'rgb(0, 140, 111)',
    marginTop: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    height: 40,
    marginTop: 20,
    marginBottom: 50,
    // width: '100%',
    borderRadius: 17,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'crimson',
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: 6,
    // marginVertical: 6,
  },
});
