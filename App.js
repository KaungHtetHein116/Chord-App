import React from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');
function App() {
  usersCollection
    .get()
    .then((snapshot) =>
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      }),
    )
    .catch((err) => console.log(err));
  return (
    <View>
      <Text>Hiaksdfaskdjf</Text>
    </View>
  );
}

export default App;
