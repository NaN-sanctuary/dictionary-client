import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem';

import { DictionaryItem } from './interfaces';
import fetchListData from './services/FetchListData';

export default function App() {
  const [data, setData] = useState<DictionaryItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
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

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={100}
      refreshing={refreshing}
      onRefresh={fetchData}
    />
  );
}
