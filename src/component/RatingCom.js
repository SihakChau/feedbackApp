//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles.js';
import Button from 'react-native-button';
import { Icon } from 'react-native-elements';
// create a component
class RatingCom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
        }
    }
    onRate = (value) => {
        this.state.rating=value;
            switch (this.state.rating) {
                case 0:
                this.setState({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false
                })
                break;
                case 1:
                    this.setState({
                        one: true,
                        two: false,
                        three: false,
                        four: false,
                        five: false
                    })
                    break;
                case 2:
                    this.setState({
                        one: true,
                        two: true,
                        three: false,
                        four: false,
                        five: false
                    })
                    break;
                case 3:
                    this.setState({
                        one: true,
                        two: true,
                        three: true,
                        four: false,
                        five: false
                    })
                    break;
                case 4:
                    this.setState({
                        one: true,
                        two: true,
                        three: true,
                        four: true,
                        five: false
                    })
                    break;
                case 5:
                    this.setState({
                        one: true,
                        two: true,
                        three: true,
                        four: true,
                        five: true,
                    })
                    break;
            }
            this.props.value(value);
    }


    render() {
        return (
            <View style={[styles.card, styles.row]}>
                <View style={styles.rateNameContainer}>
                    <Text style={styles.rateName}>{this.props.NameRate}</Text>
                </View>
                <View style={styles.rateContainer}>
                    <View style={[styles.iconContainer, styles.row]}>
                        <Icon
                            onPress={() => [this.state.one?this.onRate(0):this.onRate(1)]}
                            iconStyle={styles.icon}
                            size={32}
                            name={this.state.one ? this.props.icon : this.props.disActiveIcon}
                            type='ionicon'
                            color='rgba(192, 57, 43,1)'
                        />
                        <Icon
                            onPress={() => this.onRate(2)}
                            iconStyle={styles.icon}
                            size={32}
                            name={this.state.two ? this.props.icon : this.props.disActiveIcon}
                            type='ionicon'
                            color='rgba(192, 57, 43,1)'
                        />
                        <Icon
                            onPress={() => this.onRate(3)}
                            iconStyle={styles.icon}
                            size={32}
                            name={this.state.three ? this.props.icon : this.props.disActiveIcon}
                            type='ionicon'
                            color='rgba(192, 57, 43,1)'
                        />
                        <Icon
                            onPress={() => this.onRate(4)}
                            iconStyle={styles.icon}
                            size={32}
                            name={this.state.four ? this.props.icon : this.props.disActiveIcon}
                            type='ionicon'
                            color='rgba(192, 57, 43,1)'
                        />
                        <Icon
                            onPress={() => this.onRate(5)}
                            iconStyle={styles.icon}
                            size={32}
                            name={this.state.five ? this.props.icon : this.props.disActiveIcon}
                            type='ionicon'
                            color='rgba(192, 57, 43,1)'
                        />
                    </View>
                </View>
            </View>
        );
    }
}


export default RatingCom;
