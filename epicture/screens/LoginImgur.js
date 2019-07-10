import React from 'react';
import { View, WebView } from "react-native";
import { AsyncStorage } from 'react-native';


export default class LoginImgur extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            urlData: []
        }
    }

//// RECOVER URL DATA AND PARSE IT IN A TOKEN ////
    static async _onNavigationStateChange(webViewState){
        // console.log(webViewState.url);
        let urlData = {};
        const regex = /[#&]([^=#]+)=([^&#]*)/gm;
        let m;
        while ((m = regex.exec(webViewState.url)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            urlData[m[1]] = m[2];
        }
        console.log(urlData);
        await AsyncStorage.setItem('Token', JSON.stringify(urlData));
        // console.log(await AsyncStorage.getItem('Token'));
        // this.props.navigation.navigate("Profile")
    }




    render() {
        return (
            <WebView
                source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=8defc05d2a54813&response_type=token'}}
                onNavigationStateChange={LoginImgur._onNavigationStateChange.bind(this)}>
            </WebView>
        )
    }
}

