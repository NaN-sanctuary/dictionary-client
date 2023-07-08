import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { default as React, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FAB, SearchBar } from 'react-native-elements';
import ListItem from '../components/ListItem';
import { DictionaryItem } from '../interfaces';
import fetchListData from '../services/FetchListData';
import Navbar from '../components/navbar/NavBar';

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<DictionaryItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
  }, []);

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const listData = await fetchListData();
      setData(listData);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
    }
  };

  const renderItem = ({ item }: { item: DictionaryItem }) => (
    <ListItem item={item} />
  );

  const navigation = useNavigation();

  const handleAddWord = () => {
    navigation.navigate('AddWord');
  };

  const handleSearch = (searchText: string) => {
    // Implement search logic based on the provided searchText
    console.log('Search:', searchText);
  };

  return (
    <View style={styles.container}>
      <Navbar/>
      <SearchBar
        placeholder="Search..."
        onChangeText={handleSearch}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={100}
          refreshing={refreshing}
          onRefresh={fetchData}
        />
      </ScrollView>
      <FAB
        color="#FFD700"
        size="large"
        title="Add Word"
        icon={{ name: 'add', color: '#000' }}
        placement='right'
        onPress={handleAddWord}
        visible={true}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navigationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: '#f2f2f2',
  },
  searchBarInput: {
    fontSize: 16,
  },
});

export default HomeScreen;
