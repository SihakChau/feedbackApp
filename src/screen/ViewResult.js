//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles.js';
import Button from 'react-native-button';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import HeaderCom from '../component/HeaderCom.js';
import RateCom from '../component/RateCom.js';
import firebase from 'react-native-firebase';

var SENDGRID_API_KEY = '8ATbKCnQZ-Kq3-1fhOhOQ';

class ViewResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.navigation.state.params.type,
            date: this.props.navigation.state.params.date,
            quality: this.props.navigation.state.params.quality,
            speed: this.props.navigation.state.params.speed,
            value: this.props.navigation.state.params.value,
            creativity: this.props.navigation.state.params.creativity,
            strategy: this.props.navigation.state.params.strategy,
            comment: this.props.navigation.state.params.comment,
        };
    }




    onHeader = () => {
        this.props.navigation.goBack()
    }


    render() {
        return (
            <View
                style={styles.mainContainer}>



                <HeaderCom
                    onButton={() => this.onHeader()}
                    Tittle={this.state.date}
                />

                <LinearGradient
                    colors={['rgba(255,255,255,1)']}
                    style={styles.container}>
                    <ScrollView style={{ marginTop: 10 }}>
                        <View style={styles.card}>
                            <Text style={styles.guide}>Please select your position:</Text>
                            <View style={styles.ratioContainer}>
                                <Button
                                    containerStyle={[styles.ratioButton, this.state.type == 'client' && styles.active]}
                                    style={[styles.ratioText, this.state.type == 'client' && { color: '#fff' }]}>
                                    Client
                    </Button>
                                <Button
                                    containerStyle={[styles.ratioButton, this.state.type == 'employee' && styles.active]}
                                    style={[styles.ratioText, this.state.type == 'employee' && { color: '#fff' }]}>
                                    Employee
                    </Button>
                            </View>
                        </View>
                        <RateCom
                            star={this.state.quality}
                            NameRate={'Quality'}
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline' />
                        <RateCom
                            star={this.state.speed}
                            NameRate={'Speed'}
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline' />
                        <RateCom
                            star={this.state.value}
                            NameRate={'value'}
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline' />
                        <RateCom
                            star={this.state.creativity}
                            NameRate={'Creativity'}
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline' />
                        <RateCom
                            star={this.state.strategy}
                            NameRate={'Strategy'}
                            icon='ios-heart'
                            disActiveIcon='ios-heart-outline' />
                            <View style={styles.commentContainer}>
                        <Text style={styles.commentResult}>{this.state.comment}</Text>
                    </View>

                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}


export default ViewResultScreen;
