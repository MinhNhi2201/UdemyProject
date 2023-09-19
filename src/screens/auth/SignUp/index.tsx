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
import Seperator from '../../../component/seperator';
import GGButton from '../../../component/GGButton';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    navigation.navigate('SignIn')
}
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

      <Button
        style={styles.btn}
        title="Sign up"
        onPress={() => console.log('Clicked')}
      />

      <Seperator text="Or sign up with" />
      <GGButton/>

      <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
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
    marginVertical:40,
    color: '#4F63AC',
    marginBottom: 56,
    textAlign: 'center'
},
footerLink: {
    fontWeight: 'bold',
}
});
export default React.memo(SignUp);
