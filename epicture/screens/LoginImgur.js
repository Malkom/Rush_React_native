import React from 'react';
import { View, WebView } from "react-native";

export default class LoginImgur extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=8defc05d2a54813&response_type=token'}}>
            </WebView>
        )
    }
}

