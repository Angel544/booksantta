import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
export default class Welcomescreen extends React.Component{
 constructor(){
     super()
     this.state={
         emailId:'',
         password:''
     }
    }
     render(){
         return(
             <View>
                 <Text>Booksanta</Text>
                 <View> 
                     <TextInput
                     placeholder='emailId'
                     keyboardType='email-address'
                     onChangeText={(Text)=>{
                         this.setState({
                             emailId:Text
                         })
                     }}
                     >
                        
                     </TextInput>
                     <TextInput
                     placeholder='password'
                     secureTextEntry={true}
                     onChangeText={(Text)=>{
                         this.setState({
                             password:Text
                         })
                     }}
                     >
                        
                     </TextInput>
                     <TouchableOpacity>
                         <Text>login</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                         <Text>signup</Text>
                     </TouchableOpacity>
                 </View>
             </View>
         )
     }
     
 }
