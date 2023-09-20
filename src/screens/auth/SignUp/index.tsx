import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../../../component/button';
import AuthHeader from '../../../component/authheader';
import Input from '../../../component/input';
import CheckBox from '../../../component/checkbox';
import Seperator from '../../../component/seperator';
import GGButton from '../../../component/GGButton';
import {request} from '../../../utils/request';
import {API_BASE_URL} from '../../../utils/api';
import {UserContext} from '../../../../App';
import {signup} from '../../../utils/backendCalls';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {setUser} = useContext(UserContext);

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };
  const onSubmit = async () => {
    try {
      if (
        !values?.fullName ||
        !values?.email ||
        !values?.password ||
        !values?.confirmPassword
      ) {
        Alert.alert('All fields are required');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      if (!checked) {
        Alert.alert('Please agree to the terms');
        return;
      }

      const token = await signup(values);
      setUser({token});

      console.log('token :>> ', token);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => console.log('hi')} />
      <Input
        value={values.fullName}
        onChangeText={v => onChange('fullName', v)}
        label="Name"
        placeholder="John Doe"
      />
      <Input
        value={values.email}
        onChangeText={v => onChange('email', v)}
        label="E-mail"
        placeholder="example@gmail.com"
      />
      <Input
        value={values.password}
        onChangeText={v => onChange('password', v)}
        isPassword
        label="Password"
        placeholder="*******"
      />
      <Input
        value={values.confirmPassword}
        onChangeText={v => onChange('confirmPassword', v)}
        isPassword
        label="Confirm Password"
        placeholder="*******"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text>I agree with the Terms & Privacy </Text>
      </View>

      <Button style={styles.btn} title="Sign up" onPress={onSubmit} />

      <Seperator text="Or sign up with" />
      <GGButton />

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 34,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: '#FCA34D',
    fontSize: 40,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: '#4F63AC',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    marginVertical: 20,
  },
  footerText: {
    marginVertical: 40,
    color: '#4F63AC',
    marginBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
export default React.memo(SignUp);
