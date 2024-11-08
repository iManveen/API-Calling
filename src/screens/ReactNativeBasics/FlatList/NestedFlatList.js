import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const NestedFlatList = () => {
  const data1 = [
    {
      items: 'Item1',
    },
    {
      items: 'Item2',
    },
    {
      items: 'Item3',
    },
  ];

  const data2 = [
    {
      subItems: 'subItem1',
    },
    {
      subItems: 'subItem2',
    },
    {
      subItems: 'subItem3',
    },
    {
      subItems: 'subItem4',
    },
    {
      subItems: 'subItem5',
    },
    {
      subItems: 'subItem6',
    },
  ];

  const renderData1 = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.items}</Text>
        <FlatList
          data={data2}
          renderItem={renderData2}
          style={styles.subList}
        />
      </View>
    );
  };

  const renderData2 = ({ item }) => {
    return (
      <View style={styles.subItemContainer}>
        <Text style={styles.subItemText}>{item.subItems}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={renderData1}
 
      />
    </View>
  );
};

export default NestedFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subList: {
    marginTop: 10,
  },
  subItemContainer: {
    padding: 8,
    marginLeft: 16,
    backgroundColor: '#eaeaea',
    borderRadius: 6,
  },
  subItemText: {
    fontSize: 16,
    color: '#555',
  },
});
