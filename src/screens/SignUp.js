import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signupUser} from '../redux/actions/AuthActions';
import ImagePicker from 'react-native-image-picker';

//UI
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  Input,
  Text,
  Header,
  Button,
  Avatar,
  Accessory,
} from 'react-native-elements';

const LogIn = (props) => {
  const [name, setName] = useState('Jack King');
  const [email, setEmail] = useState('test@mail.com');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('password');
  const [image, setImage] = useState(
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
  );
  const [fileUrl, setFileUrl] = useState(
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
  );

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response) {
        setImage(response.uri);
        console.log(response);
        uploadImage(response.uri, response.fileName);
      }
    });
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child('images/' + imageName);
    await fileRef.put(blob);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const newUser = {
    name,
    email,
    password,
    image: fileUrl,
  };

  const handleSubmit = () => {
    props.signupUser(newUser);
  };

  const errorShown = () => {
    if (props.error) return <Text style={{color: 'red'}}>{props.error}</Text>;
  };
  return (
    <View>
      <Header
        centerComponent={{text: 'Welcome to MyanChord', style: {color: '#fff'}}}
      />
      <Avatar
        size="large"
        onPress={selectImage}
        source={{
          uri: image,
        }}>
        <Accessory />
      </Avatar>
      <Input
        placeholder="Name"
        leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Input
        placeholder="Email"
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
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        leftIcon={<Icon name="key" size={24} color="black" />}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <Button title="Login" loading={props.loading} onPress={handleSubmit} />
      {errorShown()}
      <TouchableOpacity onPress={() => props.navigation.push('LogIn')}>
        <Text>Login In Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (newUser) => dispatch(signupUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
