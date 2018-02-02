//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { Icon } from 'react-native-elements';

class HeaderCom extends Component {

    onBack = () => {
        this.props.onButton()
    }
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity
            style={styles.backButton} 
            onPress={() => this.onBack()}                                           
            >
                    <Icon
                        style={{backgroundColor:'transparent'}}
                        size = {62}
                        name='chevron-left'
                        type='evilicon'
                        color='rgba(255,255,255,0.7)'
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}> {this.props.Tittle} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        paddingTop: 20,
        paddingBottom:20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(192, 57, 43,1)',
    },
    
    backButton: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 100,
        height: 90,
        backgroundColor: 'transparent',
        position: 'absolute',
        top:'1%',
        left: '1%',
    },
    backText: {
        color: 'rgba(28, 90, 200,1)',
        fontSize: 20,
        fontWeight: '500',
    },
    headerText: {
        marginTop:10,
        color: '#fff',
        fontSize: 26,
        fontWeight: '500',
    }

});

//make this component available to the app
export default HeaderCom;
