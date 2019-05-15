import React from 'react';
import { ScrollView, StyleSheet, WebView } from 'react-native';
import { Button, Text } from 'native-base';


export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Profile',
    };

    _login = () => {
        this.props.navigation.navigate("Login")
    };

    render() {

        return (
            <ScrollView style={styles.container}>

                    <Button style={styles.button} onPress={() => this._login()}>
                    <Text>Sign In</Text>
                </Button>



                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    button: {
        height: 50,
        alignSelf: 'center',
    },
});