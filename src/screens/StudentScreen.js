
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Fatima shahid',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Abid Ali',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Umer Asad',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'hiba Ahmad',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Laraib Abbasi',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Haram Ahad',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Bilal Khan',
      },
  ];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const StudentScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "blue";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default StudentScreen;