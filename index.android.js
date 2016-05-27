import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

class reactNative extends Component {

    render() {

        var datas = {
            title: "This is a React Native app",
            copyright: "Created by Webarranco",
            year: '2015', 
            posters: {
                thumbnail: 'http://webarranco.fr/img/link2.png'
            }
        }

        return (

            <View style={styles.container}>

                <Image style={styles.thumbnail} source={{uri: datas.posters.thumbnail}} />

                <Text style={styles.welcome}>
                    {datas.title}
                </Text>

                <Text style={styles.instructions}>
                    {datas.copyright}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 2,
    },
    thumbnail: {
        width: 130,
        height: 173
    }
});

AppRegistry.registerComponent('reactNative', () => reactNative);
