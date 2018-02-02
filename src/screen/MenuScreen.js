//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Keyboard, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.js';
import Button from 'react-native-button';
import firebase from 'react-native-firebase';

class MenuScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            authenticating: false,
        };
    }

    onLogin = () => {
        if(this.state.name == ''){
            alert('Please type any thing in the box.');
        }
        else{
         this.setState({ authenticating: true })
         firebase.auth().signInAnonymously(this.state.name)
         .then((user) => {
            if (user) {
                this.setState({ authenticating: false });
                this.props.navigation.navigate('FeedBackScreen');
            }
            
          })
         .catch((error) =>{
          
        })
    }}


    

    onInputEmail = (value) => {
        this.setState({
            name: value
        })
    }
    // onInputPassword = (value) => {
    //     this.setState({
    //         password: value
    //     })
    // }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image
                    resizeMode='stretch'
                    style={styles.bgImg}
                    source={require('../img/background.jpg')}
                />
                <LinearGradient
                    colors={['rgba(192, 57, 43,0.5)', 'rgba(192, 57, 43,0.7)', 'rgba(192, 57, 43,0.4)']}
                    style={styles.mainContainer}>
                    <View style={[styles.container, { flex: 1 }]}>
                        <Text style={styles.mainTittle}>Log In</Text>
                        <Text style={styles.subDescription}>This is an anonymous feedback, so please don't worry of someone will know who you are.</Text>


                    </View>
                    <View style={[styles.container, { flex: 1 }]}>
                        <TextInput
                            autoCapitalize = {'none'}
                            type = {'email'}
                            onSubmitEditing={Keyboard.dismiss}
                            onChangeText={(value) => this.onInputEmail(value)}
                            placeholder='email@example.com'
                            placeholderTextColor='rgba(0,0,0,0.5)'
                            style={styles._Input}
                        />
                        
                        <Button
                            onPress={() => this.onLogin()}
                            containerStyle={styles.menuButton}
                            style={styles.ButtonText}>
                            Login
                        </Button>
                        <Button
                            onPress={() => this.props.navigation.navigate('ResultScreen')}
                            containerStyle={[styles.menuButton,{backgroundColor:'#fff'}]}
                            style={[styles.ButtonText,{color:'#333'}]}>
                            Review Feedback
                        </Button>
                        {/* <Button
                            onPress={() => firebase.auth().signOut()}
                            containerStyle={styles.menuButton}
                            style={styles.ButtonText}>
                            Login
                        </Button> */}


                    </View>
                </LinearGradient>
            </View>
        );
    }
}


export default MenuScreen;
