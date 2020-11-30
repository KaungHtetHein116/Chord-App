import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {GetSongData, GetArtistData} from '../redux/actions/DataAction';
import SegmentedControl from 'rn-segmented-control';
import AllSongs from './components/AllSongs';
import Artist from './components/Artist';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 7px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Container>
        <SegmentedControl
          tabs={['All Songs', 'Artists']}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
          segmentedControlBackgroundColor="#86c4fd"
          activeSegmentBackgroundColor="#0482f7"
          activeTextColor="white"
          textColor="black"
          paddingVertical={18}
          width={360}
        />
    
      {tabIndex === 0 ? <AllSongs /> : <Artist />}
    </Container>
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
    fetchArtistData: () => dispatch(GetArtistData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
