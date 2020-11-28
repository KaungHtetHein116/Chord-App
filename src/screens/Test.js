// import React from 'react';
// import {Text, View, StyleSheet, Image} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/AntDesign';

// export default function App() {
//   const profileImg =
//     'https://reactnativemaster.com/wp-content/uploads/2019/11/React-native-master-logo-only.png';

//   const data = [{id: 1}, {id: 2}, {id: 3}];

//   return (
//     <View style={{flex: 1 / 2}}>
//       <FlatList
//         numColumns={2}
//         data={data}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.container}>
//             <View style={styles.card}>
//               <View style={styles.header}>
//                 <Image style={styles.profileImg} source={{uri: profileImg}} />
//                 <Text style={styles.songName}>React</Text>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   icon: {
//     fontSize: 30,
//     marginLeft: 37,
//     color: 'red',
//   },
//   singerName: {
//     fontSize: 13,
//     marginTop: 6,
//   },
//   songName: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//     alignItems: 'center',
//   },
//   card: {
//     flex: 0.5,
//     height: 120,
//     width: '94%',
//     backgroundColor: 'white',
//     borderRadius: 15,
//     elevation: 10,
//     padding: 10,
//   },
//   profileImg: {
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     marginRight: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// import React from 'react';
// import {
//   View,
//   ImageBackground,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';

// const profileImg =
//   'https://reactnativemaster.com/wp-content/uploads/2019/11/React-native-master-logo-only.png';

// export default function Test() {
//   const data = [{id: 1}, {id: 2}, {id: 3}];
//   return (
//     <View>
//       <FlatList
//         numColumns={2}
//         data={data}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <ImageBackground source={{uri: profileImg}} style={styles.image}>
//               <Text style={styles.text} numberOfLines={2}>
//                 Lay Phyu
//               </Text>
//             </ImageBackground>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   text: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     opacity: 100,
//     alignContent: 'center',
//     flex: 1 / 4,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     width: '100%',
//     height: '100%',
//     justifyContent: 'flex-end',
//   },
//   card: {
//     overflow: 'hidden',
//     elevation: 10,
//     borderRadius: 15,
//     backgroundColor: 'tomato',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1 / 2,
//     margin: 7,
//     height: Dimensions.get('window').width / 3,
//   },
// });

import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Test = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{width: 100, height: 100, borderRadius: 50, margin: 20}}
          />
          <View style={{marginLeft: 20}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{width: 100, height: 100, borderRadius: 50, margin: 20}}
          />
          <View style={{marginLeft: 20}}>
            <View style={{width: 120, height: 20, borderRadius: 4}} />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default Test;
