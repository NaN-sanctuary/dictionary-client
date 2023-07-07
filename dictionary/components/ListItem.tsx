import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItemProps } from '../interfaces';


const ListItem: React.FC<ListItemProps> = ({ item }) => {
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
        <Text style={styles.votesText}>
          {item.upvotes} Upvotes | {item.downvotes} Downvotes
        </Text>
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
  votesContainer: {},
  votesText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default ListItem;
