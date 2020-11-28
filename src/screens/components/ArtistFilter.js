import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ArtistFilter} from '../../redux/actions/DataAction';
import SongCard from './SongCard';

const ArtistSong = (props) => {
  const {artist} = props.route.params;
  useEffect(() => {
    props.fetchArtistFilter(artist);
  }, []);

  return (
    <View>
      {console.log(props.Data.artistFilter)}
      <FlatList
        data={props.Data.artistFilter}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SongCard item={item} />}
      />
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
    fetchArtistFilter: (artist) => dispatch(ArtistFilter(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSong);
