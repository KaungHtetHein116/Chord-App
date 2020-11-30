import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {GetSongData} from '../../redux/actions/DataAction';
import {connect} from 'react-redux';
import Card from './SongCard';
import Loading from '../Loading';

const AllSongs = (props) => {
  useEffect(() => {
    props.fetchSongData();
  }, []);

  return props.Data.loadingSong ? (
    <View style={{marginTop: 25}}>
      <Loading />
    </View>
  ) : (
    <View style={{marginTop: 40}}>
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.Data.dataSong}
          renderItem={({item}) =>  <Card item={item} /> }
        />
      </View>
    </View>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AllSongs);
