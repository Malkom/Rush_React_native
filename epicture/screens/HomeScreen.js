import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList
} from 'react-native';

import {_getHotImages} from "../API/ImgurAPI";


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  _loadHotImages() {
    _getHotImages()
        .then(results => {this.setState({images: results.data })})
        .catch((error) => {
            console.error(error);
        })

  }


  render() {
    // console.log('Images : ', this.state.images);
    if (this.state.images){
      Object.keys(this.state.images).map(key => {
        if (this.state.images[key]) {
          console.log('Images Id : ', this.state.images[key].id);
        }
      });
    }
    else
      console.log("Pas de data");


    return (
        <View>
          <Button title='Query test'  onPress={() => this._loadHotImages()}/>
          <FlatList
              data={this.state.images}
              keyExtractor={(item) => this.state.images[item].id.toString()}
              renderItem={({item}) => <View style={styles.postcontainer}>
                <Image
                    style={styles.postImage}
                    source={{uri:this.state.images[item].images.link}}
                />
                <View>
                  <Text style={[styles.font, styles.imagedata]}>{this.state.images[item].images.views}</Text>
                </View>
              </View> }
          />

          {/*<Image*/}
          {/*    style={{width: 300, height: 300}}*/}
          {/*    source={{uri: this.state.images.link}} />*/}

        </View>
    )
  }

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  postcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  postImage: {
    height: 100,
    width: 100,
  },
  imagedata: {
    fontSize: 13,
    marginLeft: 10,
  },

});
