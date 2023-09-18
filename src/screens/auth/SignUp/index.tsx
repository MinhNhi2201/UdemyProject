import React, {useState} from 'react';
import {
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

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => console.log('hi')} />
      <Input label="username" placeholder="John" />
      <Input label="email" placeholder="John@email.com" />
      <Input label="password" placeholder="*******" isPassword />
      <View style={styles.checkboxContainer}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text>I agree with the Terms & Privacy </Text>
      </View>
      <Button title="Sign up" onPress={() => console.log('Clicked')} />
      <Text> Or sign up width</Text>
      {/* <View>
      <Button title="Sign up" onPress={() => console.log('Clicked')} />
      </View> */}
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
});
export default SignUp;
