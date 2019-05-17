import React from 'react';
import { View, WebView, Text } from "react-native";
import { AsyncStorage } from 'react-native';


export default class PostScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            urlData: []
        }
    }

    render() {
        return (
            <View>
                <Text>Post page</Text>
            </View>
        )
    }
}