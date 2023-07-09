import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


const ListItem: React.FC<ListItemProps> = ({ item }) => {
  
  // const upvote = async () => {
  //   const fetchData = async () => {
  //     try {
  //       setRefreshing(true);
  //       const listData = await fetchListData();
  //       setData(listData);
  //       setFilteredData(listData);
  //       setRefreshing(false);
  //     } catch (error) {
  //       console.error(error);
  //       setRefreshing(false);
  //     }
  //   };
  // }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.termContainer}>
          <Text style={styles.termText}>{item.word}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.userText}>{item.user.name}</Text>
        </View>
      </View>

      <View style={styles.definitionContainer}>
        <Text style={styles.definitionText}>{item.definition}</Text>
      </View>
      <View style={styles.exampleContainer}>
        <Text style={styles.exampleText}>{item.example}</Text>
      </View>
      <View style={styles.votesContainer}>
        <Button
          icon={
            <MaterialIcons name="arrow-drop-up" size={24} color="#fff" />
          }
          buttonStyle={styles.voteButtonStyle}
          title={`${item.upvotes}`}
        />
        <Button
          icon={
            <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
          }
          buttonStyle={styles.voteButtonStyle}
          title={`${item.downvotes}`}

        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005BBB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  userContainer: {},
  userText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  termContainer: {
    marginBottom: 8,
  },
  termText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  definitionContainer: {
    marginBottom: 8,
  },
  definitionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  exampleContainer: {
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  votesContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  voteButtonStyle: {
    backgroundColor: '#005BBB',
    color: '#fff'
  }
});

export default ListItem;
