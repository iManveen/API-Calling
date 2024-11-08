import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const AllFlatlists = () => {
  const data = [
    {
      id: '1',
      title: 'Item 1',
      description: 'This is the description for item 1',
    },
    {
      id: '2',
      title: 'Item 2',
      description: 'This is the description for item 2',
    },
    {
      id: '3',
      title: 'Item 3',
      description: 'This is the description for item 3',
    },
    {
      id: '4',
      title: 'Item 4',
      description: 'This is the description for item 4',
    },
    {
      id: '5',
      title: 'Item 5',
      description: 'This is the description for item 5',
    },
    {
      id: '6',
      title: 'Item 6',
      description: 'This is the description for item 6',
    },
    {
      id: '7',
      title: 'Item 7',
      description: 'This is the description for item 7',
    },
    {
      id: '8',
      title: 'Item 8',
      description: 'This is the description for item 8',
    },
    {
      id: '9',
      title: 'Item 9',
      description: 'This is the description for item 9',
    },
    {
      id: '10',
      title: 'Item 10',
      description: 'This is the description for item 10',
    },
  ];
  const renderData = ({item}) => {
    return <View style={{height:100,width:300,alignItems:"center",justifyContent:"center",backgroundColor:"yellow",
      marginBottom:30,marginLeft:30,
      alignSelf:"center",
    }}>
        <Text style={{fontWeight:600,fontSize:22}}>{item.title}</Text>
        <Text style={{fontWeight:400,fontSize:18}}>{item.description}</Text>



    </View>;
  };
  const renderListFooterComponent = () => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 20,backgroundColor:"green" }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>The End</Text>
      </View>
    );
  };

const renderListHeaderComponent=()=>{
  return(
    <View style={{backgroundColor:"green",
   
    }}>
      <Text>Heading</Text>
    </View>
  )
}
const ITEM_HEIGHT = 100;

  // Fix getItemLayout - make sure it returns an object with the correct properties
  // const getItemLayout = (data, index) => ({
  //   length: ITEM_HEIGHT, // height of each item
  //   offset: ITEM_HEIGHT * index, // offset for the current item based on the index
  //   index, // index of the item
    
  // });

  return (
    <View>
      {/* Always take flatlist in a view, specially when we want to take a horizontal flatlist */}
      <View style={{marginTop:50}}>  
      <FlatList
  showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderData}
      // horizontal
      ListFooterComponent={renderListFooterComponent}
      ListFooterComponentStyle={{backgroundColor:"yellow"}}
      ListHeaderComponent={renderListHeaderComponent}
      ListHeaderComponentStyle={{backgroundColor:"red",height:50,marginBottom:50}}
      // numColumns={2}
      // columnWrapperStyle={{padding:100,justifyContent:"space-between"}}
      // getItemLayout={getItemLayout}
      initialScrollIndex={5}
      inverted={true}

      
      />
      </View>
    </View>
  );
};

export default AllFlatlists;

const styles = StyleSheet.create({});
