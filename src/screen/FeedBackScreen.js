//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.js';
import Button from 'react-native-button';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import HeaderCom from '../component/HeaderCom.js';
import RatingCom from '../component/RatingCom.js';
import firebase from 'react-native-firebase';

var SENDGRID_API_KEY = '8ATbKCnQZ-Kq3-1fhOhOQ';

class FeedBackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            quality: 0,
            speed: 0,
            value: 0,
            creativity: 0,
            strategy: 0,
            date: '',
            varify: false,
            comment: '',
            sumRate: 0,
        };

    }


    // onSend = () => {
    //     const sgMail = require('@sendgrid/mail');
    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //     const msg = {
    //       to: 'chau.sihak@gmail.com',
    //       from: 'Annonymous Feedback Tools',
    //       subject: '',
    //       text: 'Hello World',
       
    //     };
    //     sgMail.send(msg);
    // }

    onRatio = (value) => {
        this.setState({
            type: value,
        })
    };

    onHeader = () => {
        this.props.navigation.goBack()
    }


    sumRate = () => {
        
            quality = this.state.quality,
            speed = this.state.speed,
            value = this.state.value,
            creativity = this.state.creativity,
            strategy = this.state.strategy,
            this.state.sumRate = ((quality + speed + value + creativity + strategy) / 5).toFixed();
    }

    autoVarify = () => {
        if (!this.state.comment == ''
            && !this.state.type == ''
            && !this.state.quality == 0
            && !this.state.speed == 0
            && !this.state.creativity == 0
            && !this.state.value == 0
            && !this.state.strategy == 0
        ) {
            this.setState({
                varify: true,
                date: moment().format('lll'),
            });
        }
        else {
            this.setState({ varify: false })
        }
    }


    PushData = () => {
        const data = {
            type : this.state.type,
            quality: this.state.quality,
            speed: this.state.speed,
            value: this.state.value,
            creativity: this.state.creativity,
            strategy: this.state.strategy,
            date: this.state.date,
            comment : this.state.comment,
            sumRate: this.state.sumRate,
        }
        this.ref = firebase.firestore().collection('feedback').doc(this.state.date).set(data);    
    }


    // InsertData = () => {
    //     AsyncStorage.multiSet(['date', this.state.date], ['type', this.state.type], ['quality', this.state.quality], ['speed', this.state.speed],
    //         ['value', this.state.value], ['creativity', this.state.creativity], ['strategy', this.state.strategy], ['comment', this.state.comment]);
    // }

    onVarify = () => {

        if (this.state.varify == false) {
            Alert.alert(
                'Miss information',
                'Please fill all the box.',
                [
                    { text: 'I got it.', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }

        else {
            this.sumRate();
            this.PushData();
            Alert.alert(
                'Completed',
                'Thank you for your feedback.',
                [
                    { text: "You're welcome", onPress: () => this.props.navigation.navigate('MenuScreen') },
                ],
                { cancelable: false }
            )
        }
    }


    onRate = (value, type) => {
        switch (type) {
            case 'quality':
                this.state.quality = value;
                this.autoVarify();
                break;
            case 'speed':
                this.state.speed = value;
                this.autoVarify();
                break;
            case 'value':
                this.state.value = value;
                this.autoVarify();
                break;
            case 'creativity':
                this.state.creativity = value;
                this.autoVarify();
                break;
            case 'strategy':
                this.state.strategy = value;
                this.autoVarify();
                break;
        }
    }

    onText = (value) => {
        this.onEnglish(value);
    }


    onEnglish(text) {
        let newText = '';
        let numbers = ' ?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=_+,./{}()!@#$';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                alert("please enter english only");
            }
        }
        this.state.comment = newText
        this.autoVarify();
    }

    render() {
        return (
            <View
                style={styles.mainContainer}>



                <HeaderCom
                    onButton={() => this.onHeader()}
                    Tittle={'Feedback'}
                />

                <LinearGradient
                    colors={['rgba(255,255,255,1)']}
                    style={styles.container}>
                    <ScrollView style={{ marginTop: 10 }}>
                        <View style={styles.card}>
                            <Text style={styles.guide}>Please select your position:</Text>
                            <View style={styles.ratioContainer}>
                                <Button
                                    onPress={() => this.onRatio('client')}
                                    containerStyle={[styles.ratioButton, this.state.type == 'client' && styles.active]}
                                    style={[styles.ratioText, this.state.type == 'client' && { color: '#fff' }]}>
                                    Client
                    </Button>
                                <Button
                                    onPress={() => this.onRatio('employee')}
                                    containerStyle={[styles.ratioButton, this.state.type == 'employee' && styles.active]}
                                    style={[styles.ratioText, this.state.type == 'employee' && { color: '#fff' }]}>
                                    Employee
                    </Button>
                            </View>
                        </View>
                        <RatingCom
                            NameRate='QUALITY'
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline'
                            value={(value) => this.onRate(value, 'quality')}
                        />
                        <RatingCom
                            NameRate='SPEED'
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline'
                            value={(value) => this.onRate(value, 'speed')}
                        />
                        <RatingCom
                            NameRate='VALUE'
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline'
                            value={(value) => this.onRate(value, 'value')}
                        />
                        <RatingCom
                            NameRate='CREATIVITY'
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline'
                            value={(value) => this.onRate(value, 'creativity')}
                        />
                        <RatingCom
                            NameRate='STRATEGY'
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline'
                            value={(value) => this.onRate(value, 'strategy')}
                        />
                        <View style={styles.card}>
                            <View style={styles.ratioContainer}>
                                <TextInput
                                    onSubmitEditing={Keyboard.dismiss}
                                    onChangeText={(value) => this.onText(value)}
                                    onChange={(value) => this.onText(value)}
                                    multiline={true}
                                    placeholder='please leave you comment...'
                                    placeholderTextColor='rgba(0,0,0,0.5)'
                                    style={styles.commentBox}
                                />
                            </View>
                        </View>
                        <Button
                            onPress={() => this.onVarify()}
                            containerStyle={[styles.ButtonDone, !this.state.varify && styles.disabledButton]}
                            style={[styles.ButtonDoneText, !this.state.varify && styles.disabledButtonText]}>
                            Done
                        </Button>
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}


export default FeedBackScreen;
