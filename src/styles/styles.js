//import liraries
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    bgImg:{position:'absolute',width:'100%',height:'100%'},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTittle:{
        marginTop:70,
        fontSize:66,
        color:'rgba(0,0,0,0.7)',
        fontWeight:'500',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    }, 
    _Input:{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        fontSize:16,
        color:'#333',
        width:'80%',
        height:43,
        padding:15,
        backgroundColor:'rgba(255,255,255,0.8)',
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        borderRadius:4,
    },
    subDescription:{
        textAlign:'center',
        marginBottom:10,
        fontSize:22,
        color:'rgba(255,255,255,.7)',
        fontWeight:'400',
        shadowColor: 'rgba(192, 57, 43,1)',
        shadowOffset: {
          width: 1,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    guide:{
        marginBottom:10,
        fontSize:22,
        color:'rgba(192, 57, 43,1)',
        fontWeight:'300',
    },
    menuButton:{   
        marginTop:10,
        width:'80%',
        height:40,
        padding:5,
        backgroundColor:'rgba(192, 57, 43,1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:1,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    registerButton:{   
        width:200,
        height:40,
        padding:5,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        borderRadius:1,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    ButtonText:{ fontSize: 20, color: '#fff',fontWeight:'300', },
    ratioText:{ fontSize: 20, color: '#rgba(192,57,43,1)',fontWeight:'300', },
    
    ratioContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    ratioButton:{
        borderRadius:4,
        width:160,
        height:40,
        borderColor:'rgba(192, 57, 43,1)',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',

    },
    ContainerScroll:{
        width:'100%',
        padding:10,
    },
    active:{
        backgroundColor:'rgba(192, 57, 43,1)',
    },

    card:{
        backgroundColor:'#fff',
        padding:15,
        marginLeft:15,
        marginRight:15,    
        marginTop:10,    
        borderRadius:6, 
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    row:{
        flexDirection:'row',
    },
    rateName:{
        color:'rgba(192, 57, 43,1)',
        fontSize:22,
        fontWeight:'300',
        marginRight:15,
    },
    rateNameContainer:{
        width:150,
        paddingLeft:'5%',
        justifyContent:'center',
        alignItems:'center',
        height:30,
    },
    dateName:{
        color:'rgba(192, 57, 43,1)',
        fontSize:18,
        fontWeight:'300',
        marginRight:15,
    },
    rateDateContainer:{
        paddingLeft:'1%',
        justifyContent:'center',
        height:30,
    },
    rateContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        marginLeft:5,
    },
    iconContainer:{
     },
     commentBox:{
        color: 'rgba(192, 57, 43,1)',
        width:'100%',
        fontSize:16,
        padding:10,
     },
     ButtonDone:{
         backgroundColor:'rgba(192, 57, 43,1)',
         marginBottom:15,
         flex:1,
         padding:15,
         marginLeft:15,
         marginRight:15,    
         marginTop:10,  
         borderRadius:6, 
         shadowColor: '#000000',
         shadowOffset: {
           width: 0,
           height: 2
         },
         shadowRadius: 5,
         shadowOpacity: 0.3
     },
     ButtonDoneText:{
         color:'#fff',
         fontWeight:'600',
     },
     disabledButton:{
         backgroundColor:'grey',
     },
     commentContainer:{
        margin:15,
        borderRadius:4,
        padding:15,
        backgroundColor:'#EFF0F1',
     },
     commentResult:{
         fontWeight:'500',
         marginTop:10,
         padding:10,
         fontSize:16,
         color:'#333',
         backgroundColor:'transparent',
         
     }
    
});

//make this component available to the app
export default styles;
