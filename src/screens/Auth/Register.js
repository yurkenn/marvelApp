// create register screen with formik and yup validation schema and redux

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {register} from '../../redux/userSlice';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = values => {
    dispatch(register(values));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagebgc}
        source={require('../../assets/spider-down.png')}>
        <Image
          style={styles.marvel}
          source={require('../../assets/marvel.png')}
        />
        <Formik
          initialValues={{email: '', password: '', confirmPassword: ''}}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.inner_container}>
              <TextInput
                style={styles.textInput}
                label="Email"
                mode="outlined"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.textInput}
                label="Password"
                mode="outlined"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <TextInput
                style={styles.textInput}
                label="Confirm Password"
                mode="outlined"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={true}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                title="Register">
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                title="Login">
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagebgc: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  marvel: {
    height: '30%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  textInput: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5,
  },
  button: {
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
  },

  error: {
    color: 'white',
  },
});
export default Register;
