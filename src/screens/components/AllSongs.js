import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GetSongData } from '../../redux/actions/DataAction';
import Loading from '../Loading';
import Card from './SongCard';

const Conatiner = styled.View`
  flex: 1;
  width: 100%;
`;

const AllSongs = (props) => {
  useEffect(() => {
    props.fetchSongData();
  }, []);

  return props.Data.loadingSong ? (
    <Conatiner>
      <Loading />
    </Conatiner>
  ) : (
    <Conatiner>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.Data.dataSong}
        renderItem={({item}) =>  <Card item={item} /> }
      />
    </Conatiner>
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
