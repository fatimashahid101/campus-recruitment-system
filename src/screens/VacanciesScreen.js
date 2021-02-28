import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function VacanciesScreen() {
  const [items, setItems] = React.useState([
    { name: 'IBEX.COM', code: '#3498db', text: 'Requirment: Web developer', text2: 'Salary: 40,000' },
    { name: 'HASHPOTATOES.COM', code: '#3498db' , text: 'Requirment: database developer', text2: 'Salary: 80,000' },
    { name: 'CODELAB.COM', code: '#3498db', text: 'Requirment: Backend developer', text2: 'Salary: 75,000' },
    { name: 'PRIMECODER.COM', code: '#3498db' , text: 'Requirment: Mobile application developer', text2: 'Salary: 100,000' },
    { name: 'MAKSOFT.COM', code: '#3498db' , text: 'Requirment: Senior android develop', text2: 'Salary: 130,000'},
    { name: 'XACLETECH.COM', code: '#3498db' , text: 'Requirment: UI/UX developer', text2: 'Salary: 50,000' },
    { name: 'ITECHAVENGERS.COM',code: '#3498db', text: 'Requirment: React developer', text2: 'Salary: 120,000' },
    
    // { name: 'WISTERIA', code: '#8e44ad' },
    // { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    // { name: 'SUN FLOWER', code: '#f1c40f' },
    // { name: 'CARROT', code: '#e67e22' },
    // { name: 'ALIZARIN', code: '#e74c3c' },
    // { name: 'CLOUDS', code: '#ecf0f1' },
    // { name: 'CONCRETE', code: '#95a5a6' },
    // { name: 'ORANGE', code: '#f39c12' },
    // { name: 'PUMPKIN', code: '#d35400' },
    // { name: 'POMEGRANATE', code: '#c0392b' },
    // { name: 'SILVER', code: '#bdc3c7' },
    // { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
          <Text style={styles.itemText2}>{item.text2}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  itemName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  itemText2: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'transparent',
  },
});