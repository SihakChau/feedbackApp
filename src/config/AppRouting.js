//import liraries
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import MenuScreen from '../screen/MenuScreen.js';
import FeedBackScreen from '../screen/FeedBackScreen.js';
import ResultScreen from '../screen/ResultScreen.js';
import ViewResultScreen from '../screen/ViewResult.js';

const RootAppNavigator = StackNavigator({
    MenuScreen: {
        screen: MenuScreen,
    },
    FeedBackScreen:{
        screen:FeedBackScreen
    },
    ResultScreen:{
        screen: ResultScreen,
     },
     ViewResultScreen:{
        screen: ViewResultScreen,
     }

},{
    headerMode:'none',
    mode:'card',
});

export default RootAppNavigator;
