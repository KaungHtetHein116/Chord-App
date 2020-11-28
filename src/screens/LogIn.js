import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/AuthActions';
import {GoogleSignin} from '@react-native-community/google-signin';

//UI
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Text, Header, Button} from 'react-native-elements';

GoogleSignin.configure({
  webClientId:
    '940348927071-60eneoskv1jvalh8uven3qn0ri30lulv.apps.googleusercontent.com',
});

const LogIn = (props) => {
  const [email, setEmail] = useState('test@mail.com');
  const [password, setPassword] = useState('password');
  const handleSubmit = () => {
    props.loginUser({email, password});
  };
  const errorShown = () => {
    if (props.error) return <Text>{props.error}</Text>;
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(() => console.log('google sign in success'))
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Header
        centerComponent={{text: 'Welcome to MyanChord', style: {color: '#fff'}}}
      />
      <Text>Email Address</Text>
      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="black" />}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" loading={props.loading} onPress={handleSubmit} />
      <Button title="Google Sign-In" onPress={() => onGoogleButtonPress()} />
      {errorShown()}
      <TouchableOpacity onPress={() => props.navigation.push('SignUp')}>
        <Text>Sign Up Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {loginUser})(LogIn);
