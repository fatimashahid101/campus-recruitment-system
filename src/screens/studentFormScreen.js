import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
const studentFormScreen = () => {
    const [firstName,setFirstName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [age,setAge] = useState("");
    const [qualification, setQualification] = useState("");
    const [skills,setSkills] = useState("");
    const [department,setDepartment] = useState("");
    const student_data = () => {
    let users = {
        firstName,
        secondName,
        age,
        qualification,
        skills,
        department

    }
    database().ref('/').child('users').push(users)
    setFirstName("")
    setSecondName("")
    setAge("")
    setQualification("")
    setSkills("")
    setDepartment("")
    // console.log("user===>" , user)
    }
    return (
        <View>
            <Text style={{justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' , color: 'blue'} }>Student Form</Text>
      <View style={{margin:20}}>
          <ScrollView>
          <TextInput 
          placeholder="First Name"
          onChangeText={(text)=>setFirstName(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Second Name"
          onChangeText={(text)=>setSecondName(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Age"
          onChangeText={(text)=>setAge(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Qualification"
          onChangeText={(text)=>setQualification(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          <TextInput 
          placeholder="Skills"
          onChangeText={(text)=>setSkills(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
            <TextInput 
          placeholder="Department"
          onChangeText={(text)=>setDepartment(text)}
          style={{borderWidth: 2, borderColor: "blue", margin:20}}
          />
          </ScrollView>
          <Button onPress={student_data} title="Submit"/>
          </View>
      </View>
    );
};

export default studentFormScreen;