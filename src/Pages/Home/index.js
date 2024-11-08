
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import moment from 'moment';
import background_image from '../../../assets/images/background_image.png';

posts = [
  {
    id: '1',
    name: 'Roberto',
    text: 'Lorem ipsum dolor sit amet. Eos enim nesciunt aut cupiditate amet et incidunt autem. Ut distinctio aliquid ut ipsa necessitatibus a sint dignissimos? 33 quia repellendus qui excepturi blanditiis et exercitationem inventore.',
    timestamp: 1569109273726,
    avatar: require('../../../assets/images/avatar.png'),
    image: require('../../../assets/images/tempImage1.jpg')
  },
  {
    id: '2',
    name: 'Amanda',
    text: 'Lorem ipsum dolor sit amet. Eos enim nesciunt aut cupiditate amet et incidunt autem. Ut distinctio aliquid ut ipsa necessitatibus a sint dignissimos? 33 quia repellendus qui excepturi blanditiis et exercitationem inventore.',
    timestamp: 1569109273726,
    avatar: require('../../../assets/images/avatar.png'),
    image: require('../../../assets/images/tempImage2.jpeg')
  },
  {
    id: '3',
    name: 'Silvio Santos',
    text: 'Lorem ipsum dolor sit amet. Eos enim nesciunt aut cupiditate amet et incidunt autem. Ut distinctio aliquid ut ipsa necessitatibus a sint dignissimos? 33 quia repellendus qui excepturi blanditiis et exercitationem inventore.',
    timestamp: 1569109273726,
    avatar: require('../../../assets/images/avatar.png'),
    image: require('../../../assets/images/tempImage3.jpg')
  },
  {
    id: '4',
    name: 'Chapolin',
    text: 'Lorem ipsum dolor sit amet. Eos enim nesciunt aut cupiditate amet et incidunt autem. Ut distinctio aliquid ut ipsa necessitatibus a sint dignissimos? 33 quia repellendus qui excepturi blanditiis et exercitationem inventore.',
    timestamp: 1569109273726,
    avatar: require('../../../assets/images/avatar.png'),
    image: require('../../../assets/images/tempImage4.jpg')
  }
]

export default class HomeScreen extends React.Component {
  renderPost = post => {
    return(
    <ImageBackground
        style={styles.backgroundImage}
        source={background_image}
    >

      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={styles.name}>{}post.name</Text>
                    <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                </View>

                <Ionicons name='ellipsis-horizontal' size={24} color={'#737888'} />
            </View>

            <Text style={styles.posts}>{post.text}</Text>

            <Image source={post.image} style={styles.postImage} resizeMode='cover' />

            <View style={{flexDirection: 'row'}}>
                <Ionicons name='heart-outline' size={24} color={'#737888'} style={{marginRight: 16}} />
                <Ionicons name='chatbox-ellipses' size={24} color={'#737888'} />
            </View>
        </View>
      </View>

      </ImageBackground>
    )
  }

  render() {
    return(

    <ImageBackground
        style={styles.backgroundImage}
        source={background_image}
    >

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
        </View>

        <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          
        />
      </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECF4',
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    textShadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    backgroundColor: 'blue'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  feed: {
    
  },
  feedItem: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454D65'
  },
  timestamp: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: '#838899'
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});