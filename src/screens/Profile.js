import React from 'react';
import {connect} from 'react-redux';
import {signOutUser} from '../redux/actions/AuthActions';

//UI
import {Button, Text, Avatar} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

const Profile = (props) => {
  console.log(props.userData);
  const signOut = () => {
    props.signOutUser();
  };
  return (
    <View>
      <Text>{props.userData.user.name}</Text>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: props.userData.user.profileImage,
        }}
      />
      <Button title="Log Out" type="clear" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  userData: state.auth,
});

export default connect(mapStateToProps, {signOutUser})(Profile);

// https://aboutreact.com/react-native-segmented-control-tab/

// import React in our code
// import React, {useState} from 'react';
// import {View} from 'react-native';
// import SegmentedControlTab from 'react-native-segmented-control-tab';

// export default function Profile() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleIndexChange = (index) => {
//     setSelectedIndex(index);
//   };
//   console.log(selectedIndex);
//   return (
//     <View>
//       <SegmentedControlTab
//         values={['All Songs', 'Artists']}
//         selectedIndex={selectedIndex}
//         onTabPress={handleIndexChange}
//       />
//     </View>
//   );
// }
