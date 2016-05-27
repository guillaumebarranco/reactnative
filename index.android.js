import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Linking,
    Vibration,
    Animated
} from 'react-native';

class reactNative extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            bounceValue: '90deg',
            value: 90
        };
    }

    componentDidMount() {
    }

    render() {

        setInterval(() => {

            this.state.value++;
            this.state.bounceValue = this.state.value+'deg';

        }, 100);

        var datas = {
            title: "This is a React Native app",
            copyright: "Created by Webarranco",
            year: '2015', 
            url: "http://webarranco.fr",
            posters: {
                thumbnail: 'http://webarranco.fr/img/link2.png'
            }
        };

        return (

            <View style={styles.container}>

                <Image style={styles.thumbnail} source={{uri: datas.posters.thumbnail}} />

                <Text style={styles.welcome}>
                    {datas.title}
                </Text>

                <Text onPress={this.checkIt.bind(this, datas.url)} style={styles.link}>
                    {datas.copyright}
                </Text>

                <Animated.Image
                    source={{uri: 'http://image.noelshack.com/fichiers/2015/05/1422296941-south-park-s04e04-timmy-2000-4x3.jpg'}}
                    style={{
                        transform: [
                            {rotate: this.state.bounceValue}
                        ],
                        width: 120,
                        height: 90
                    }}
                />

            </View>
        );
    }

    checkIt(url) {
        // Linking.openURL(url);
        Vibration.vibrate([0, 500], false);
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
    link: {
        textAlign: 'center',
        color: 'blue',
        marginBottom: 2,
        textDecorationLine: 'underline'
    },
    thumbnail: {
        width: 130,
        height: 173
    }
});

AppRegistry.registerComponent('reactNative', () => reactNative);
