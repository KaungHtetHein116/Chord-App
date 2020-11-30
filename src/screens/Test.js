import React, {useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const Test = () => {
  const [fetchData, setFetchData] = useState('');
  const storeData = () => {
    firestore()
      .collection('country')
      .doc()
      .set({
        name: 'american',
        cities: ['abc', 'def', 'ghi'],
      })
      .then(() => console.log('stored'))
      .catch((err) => console.log(err));
  };

  const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
  const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

  const addToArray = () => {
    firestore()
      .collection('country')
      .doc('4c6yJU020ewTREgXjqna')
      .update({
        cities: arrayUnion('klk'),
      });
  };

  const removeFromArray = () => {
    firestore()
      .collection('country')
      .doc('4c6yJU020ewTREgXjqna')
      .update({
        cities: arrayRemove('klk'),
      });
  };

  let Data;
  const getData = () => {
    firestore()
      .collection('country')
      .doc('4c6yJU020ewTREgXjqna')
      .get()
      .then(function (doc) {
        if (doc.exists) {
          Data = doc.data();
        } else {
          console.log('No such document!');
        }
      })
      .then(async () => {
        await setFetchData(Data.cities);
        console.log(fetchData);
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  };

  const find = () => {
    fetchData.map((i) =>
      firestore()
        .collection('test')
        .doc(i)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log(doc.data());
          } else {
            console.log('No such document!');
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error);
        }),
    );
  };

  return (
    <View>
      <Text>hi</Text>
      <Button title="Add Data" onPress={storeData} />
      <Button title="add item from an Array" onPress={addToArray} />
      <Button title="add item from an Array" onPress={removeFromArray} />
      <Button title="Get data from collection" onPress={getData} />
      <Button title="test" onPress={find} />
    </View>
  );
};

export default Test;
