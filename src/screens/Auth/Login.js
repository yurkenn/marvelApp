import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/authSlice';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async values => {
    try {
      const loginAuth = await auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          console.log('User signed in!');
        });
      dispatch(login(values));
      return loginAuth;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagebgc}
        source={require('../../assets/spider.png')}>
        <Image
          style={styles.marvel}
          source={require('../../assets/marvel.png')}
        />
        <Formik
          initialValues={{email: '', password: ''}}
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
              <TouchableOpacity
                style={styles.button}
                mode="contained"
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                mode="contained"
                onPress={() => navigation.navigate('Register')}
                Register>
                <Text style={styles.buttonText}>Register</Text>
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

export default Login;
