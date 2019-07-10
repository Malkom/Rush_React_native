import React from 'react';
import { View, WebView, Text } from "react-native";
import { AsyncStorage } from 'react-native';


export default class FavoritesScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            urlData: []
        }
    }

    render() {
        return (
            <View>
                <Text>Favorites page</Text>
            </View>
        )
    }
}