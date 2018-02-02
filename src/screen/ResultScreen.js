//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import styles from '../styles/styles.js';
import HeaderCom from '../component/HeaderCom.js';
import MainRate from '../component/MainRate.js';
import firebase from 'react-native-firebase';

// create a component
class ResultScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.ref = firebase.firestore().collection('feedback');
        this.unsubscribe = null;
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot((querySnaphot) => {
            const todos = [];
            querySnaphot.forEach((doc) => {
                todos.push({
                    _key: doc.id,
                    type: doc.data().type,
                    quality: doc.data().quality,
                    speed: doc.data().speed,
                    value: doc.data().value,
                    creativity: doc.data().creativity,
                    strategy: doc.data().strategy,
                    date: doc.id,
                    sumRate: doc.data().sumRate,
                    comment: doc.data().comment,

                });
            });
            this.setState({
                items: todos,
                loading: false,
                refresh: false,
            })

        });
    }
    go = (value,itemID) => {
        this.props.navigation.navigate(value,itemID)
    }
    onHeader = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <HeaderCom
                    onButton={() => this.onHeader()}
                    Tittle={'Result'}
                />
                <FlatList style={styles.ContainerScroll}
                    data={this.state.items}
                    keyboardShouldPersistTaps="always"
                    renderItem={({ item }) => {
                        return (
                            <MainRate
                                type = {item.type}
                                quality = {item.quality}
                                speed = {item.speed}
                                value = {item.value}
                                creativity = {item.creativity}
                                strategy = {item.strategy}
                                onNavigate={this.go}
                                itemID={item._key}
                                star={item.sumRate}
                                comment={item.comment}
                                NameRate={item._key}
                                icon='ios-star'
                                disActiveIcon='ios-star-outline'
                            />)
                    }}
                />
            </View>
        );
    }
}


export default ResultScreen;
