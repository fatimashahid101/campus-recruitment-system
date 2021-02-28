import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const CompanyFormScreen = () => {
    const [companyName,setCompanyName] = useState("");
    const [email,setEmail] = useState("");
    const [requirement,setRequirement] = useState("");
    const [qualification, setQualification] = useState("");
    const [salary,setSalary] = useState("");
    const submit_data = () => {
    let users = {
        companyName,
        email,
        requirement,
        qualification,
        salary    
    }
    database().ref('/').child('users').push(users)
    setCompanyName("")
    setEmail("")
    setRequirement("")
    setQualification("")
    setSalary("")
    // console.log("user===>" , user)
    }
    return (
        <View>
            <Text style={{justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' , color: 'blue'} }>Company Form</Text>
      <View style={{margin:20}}>
      <ScrollView>
          <TextInput 
          placeholder="Company Name"
          onChangeText={(text)=>setCompanyName(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Email"
          onChangeText={(text)=>setEmail(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
           onChangeText={(text)=>setRequirement(text)}
          placeholder="Requirement"
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Qualification"
          onChangeText={(text)=>setQualification(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Salary"
          onChangeText={(text)=>setSalary(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
         </ScrollView>
          <Button onPress={submit_data} title="Submit"/>
          </View>
      </View>
    );
};

export default CompanyFormScreen;

