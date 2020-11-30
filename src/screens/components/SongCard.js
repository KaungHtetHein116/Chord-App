import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RNBounceable from '@freakycoder/react-native-bounceable';
import ImageView from 'react-native-image-viewing';
import {isSongLiked, Like, Unlike} from '../../redux/actions/DataAction';
import {connect} from 'react-redux';

const Card = ({item, Data, LikeSong, UnlikeSong, ShowFav, LikedOrUnliked}) => {
  const [visible, setIsVisible] = useState(false);
  // const [favorite, setFavorite] = useState(false);
  const [songLiked, setSongLiked] = useState(false);

  const {email} = Data.user;
  const {songId} = item;

  const showFavFunction = async () => {
    await ShowFav(email, songId);
  };

  useEffect(() => {
    showFavFunction();
    setSongLiked(LikedOrUnliked.songLiked);
  }, [songLiked]);

  const images = [
    {
      uri: item.image,
    },
  ];

  const pressLike = () => {
    LikeSong(email, songId);
  };
  const pressUnlike = () => {
    UnlikeSong(email, songId);
  };

  const favShown = () => {
    console.log('favShown :: ', songLiked);
    if (songLiked) {
      return (
        <TouchableOpacity
          onPress={() => {
            setSongLiked(!songLiked);
            pressUnlike();
          }}>
          <View style={styles.icon}>
            <Icon color="red" size={30} name="heart" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            setSongLiked(!songLiked);
            pressLike();
          }}>
          <View style={styles.icon}>
            <Icon color="red" size={30} name="hearto" />
          </View>
        </TouchableOpacity>
      );
    }
  };

  const profileImg = item.thumbnail;

  return (
    <RNBounceable onPress={() => setIsVisible(true)}>
      <View style={styles.container}>
        {console.log(LikedOrUnliked)}
        <View style={styles.card}>
          <View style={styles.header}>
            <Image style={styles.profileImg} source={{uri: profileImg}} />
            <View style={{marginRight: 100, flex: 1}}>
              <Text style={styles.songName}>{item.songNameBurmese}</Text>
              <Text style={styles.singerName}>{item.artistNameBurmese}</Text>
            </View>

            {favShown()}
          </View>
        </View>
        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </RNBounceable>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
  singerName: {
    fontSize: 13,
    marginTop: 6,
  },
  songName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  card: {
    height: 90,
    width: '94%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    Data: state.auth,
    LikedOrUnliked: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LikeSong: (email, songId) => dispatch(Like(email, songId)),
    UnlikeSong: (email, songId) => dispatch(Unlike(email, songId)),
    ShowFav: (email, songId) => dispatch(isSongLiked(email, songId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
