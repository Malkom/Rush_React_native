import React from 'react';
import { ScrollView, StyleSheet, View, ImageBackground, Image, FlatList } from 'react-native';
import { Button, Text } from 'native-base';
import { _getAccountData } from "../API/ImgurAPI";
import { _getAccountImages } from "../API/ImgurAPI";
import { AsyncStorage } from 'react-native';
import moment from "moment";
// import ProfileTabNavigator from '../navigation/ProfileTabNavigator'


export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.token = {};
        this.state = {
            accountData: [],
            accountImages: [],
        };
        // this.token = JSON.parse(AsyncStorage.getItem('Token'));
    }

    static navigationOptions = {
        title: 'Profile',
    };

    _login = () => {
        this.props.navigation.navigate("Login")
    };

    //// RECOVER ACCOUNT DATA ////
    async _loadAccountData () {
        this.token =  JSON.parse(await AsyncStorage.getItem('Token'));
        this._loadAccountImages();
        console.log('Token', this.token);
        // console.log('Token', this.token.account_username);
        _getAccountData(this.token.account_username, this.token.access_token)
            .then(results => {
                // console.log('Results', results);
                this.setState({accountData: results.data })})
            .catch((error) => {
                console.error(error);
            });

            // console.log('Log Array and Typ', typeof(this.state.accountData), this.state.accountData);
    }

    //// RECOVER ACCOUNT POST ////
    _loadAccountImages () {
        _getAccountImages(this.token.access_token)
            .then(results => {
                // console.log('Results', results);
                this.setState({accountImages: results.data })})
            .catch((error) => {
                console.error(error);
            });
        // console.log('Avatar', this.state.accountImages);
    }


    _onRefresh = (callback) => {
        networkRequest().then(response => callback(response))
    };



    render() {
        console.log('RENDER');

        if (Object.keys(this.state.accountData).length > 0) {

            // console.log(this.state.accountData);
            return (

                <ImageBackground
                    style={styles.backgroundImage}
                    source={{uri: this.state.accountData.cover}}>
                    <View style={styles.profile}>
                        <View style={styles.data}>
                            <Image
                                style={styles.avatar}
                                source={{uri: this.state.accountData.avatar}}
                            />
                            <Text style={[styles.font, styles.username]}> {this.state.accountData.url} </Text>
                            <Text style={[styles.font, styles.accountdata]}> Created {moment(this.state.accountData.created * 1000).format('DD-MM-YYYY')} </Text>
                            <Text style={[styles.font, styles.accountdata]}> Reputation : {this.state.accountData.reputation_name} </Text>

                        </View>
                        <View style={styles.barre}>
                            {/*<ProfileTabNavigator/>*/}
                        </View>
                        <View style={styles.scene}>

                            <View style={styles.profile}>
                                {/*{console.log('Images Account : ', this.state.accountImages)}*/}
                                <FlatList
                                    data={this.state.accountImages}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({item}) => <View style={styles.postcontainer}>
                                        <Image
                                            style={styles.postImage}
                                            source={{uri:item.link}}
                                        />
                                        <View>
                                            <Text style={[styles.font, styles.imagedata]}>{item.name}</Text>
                                        </View>
                                    </View> }
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            );
        }
        else {
            this._loadAccountData();
            // this._loadAccountImages();
            return (
                <ScrollView style={styles.container}>
                    <Button style={styles.button} title=""  onPress={() => this._login()}>
                        <Text>Sign In</Text>
                    </Button>
                </ScrollView>
            )
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#ffffff',
    },
    button: {
        height: 50,
        alignSelf: 'center',
    },
    profile: {
        flex:1,
    },
    data: {
        flex: 3,
        alignItems: 'center',
    },
    barre: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scene: {
        flex: 7,
        backgroundColor: '#333333',
    },
    backgroundImage: {
        flex: 1,
        height: 160,
    },
    font: {
        color: '#ffffff',
    },
    username: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    accountdata: {
        fontSize: 12,
    },
    imagedata: {
        fontSize: 13,
        marginLeft: 10,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 55,
        marginTop: 15,
    },
    postcontainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },

    rightcontainer: {
        flex: 1,
        backgroundColor: '#FF0000',
    },
    leftcontainer: {
        flex: 1,
        backgroundColor: '#dfff00',
    },
    postImage: {
        height: 100,
        width: 100,
    }
});