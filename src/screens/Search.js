import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {GetSongData} from '../redux/actions/DataAction';
import _ from 'lodash';
import Card from './components/SongCard';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    props.fetchSongData();
    setFilteredDataSource(props.Data.dataSong);
    setMasterDataSource(props.Data.dataSong);
  }, []);

  const searchFilterFunction = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(masterDataSource, (song) => {
      if (
        song.songNameEnglish.includes(formattedQuery) ||
        song.songNameBurmese.includes(formattedQuery) ||
        song.artistNameBurmese.includes(formattedQuery) ||
        song.artistNameBurmese.includes(formattedQuery)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredDataSource(data);
    setSearch(text);
  };

  return (
    <View>
      <SearchBar
        lightTheme
        selectionColor="black"
        searchIcon={{size: 24}}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="မျှော်လင့်ခြင်းကွင်းပြင်"
        value={search}
      />
      <View>
        {props.Data.loadingSong ? (
          <View
            style={{
              position: 'absolute',
              margin: Dimensions.get('window').width / 2,
            }}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={filteredDataSource}
            renderItem={({item}) => <Card item={item} />}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    backgroundColor: 'red',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'tomato',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  card: {
    overflow: 'hidden',
    elevation: 10,
    borderRadius: 15,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 2,
    margin: 5,
    height: Dimensions.get('window').width / 3,
  },
});

const mapStateToProps = (state) => {
  return {
    Data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongData: () => dispatch(GetSongData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// import React, {useState, useEffect} from 'react';
// import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
// import {SearchBar} from 'react-native-elements';
// import {connect} from 'react-redux';
// import {GetData} from '../redux/actions/DataAction';

// const Search = () => {
//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

// const searchFilterFunction = (text) => {
//   if (text) {
//     const newData = masterDataSource.filter(function (item) {
//       const itemData = item.songNameEnglish
//         ? item.songNameEnglish.toUpperCase()
//         : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     setFilteredDataSource(newData);
//     setSearch(text);
//   } else {
//     setFilteredDataSource(masterDataSource);
//     setSearch(text);
//   }
// };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <SearchBar
//           round
//           lightTheme
//           selectionColor="black"
//           searchIcon={{size: 24}}
//           onChangeText={(text) => searchFilterFunction(text)}
//           onClear={(text) => searchFilterFunction('')}
//           placeholder="Type Here..."
//           value={search}
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item}) => {
//             return (
//               <Text style={styles.itemStyle}>
//                 {item.id}
//                 {item.title.toUpperCase()}
//               </Text>
//             );
//           }}
//           ItemSeparatorComponent={() => {
//             return (
//               <View
//                 style={{
//                   height: 0.5,
//                   width: '100%',
//                   backgroundColor: '#C8C8C8',
//                 }}
//               />
//             );
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });

// const mapStateToProps = (state) => {
//   return {
//     Data: state.data,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(GetData()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Search);
