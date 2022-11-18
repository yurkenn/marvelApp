import auth from '@react-native-firebase/auth';

const login = async values => {
  const {email, password} = values;
  try {
    const loginAuth = await auth().signInWithEmailAndPassword(email, password);
    return loginAuth;
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    if (error.code === 'auth/user-disabled') {
      console.log('User account disabled!');
    }

    if (error.code === 'auth/user-not-found') {
      console.log('User not found!');
    }

    if (error.code === 'auth/wrong-password') {
      console.log('Wrong password!');
    }
  }
};

const register = async values => {
  const {email, password} = values;
  try {
    const registerAuth = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return registerAuth;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/weak-password') {
      console.log('Password should be at least 6 characters');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};

const logout = async () => {
  try {
    await auth().signOut();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {login, register, logout};
