import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem';
import { DictionaryItem } from './interfaces';
import fetchListData from './services/FetchListData';


export default function App() {
  const [data, setData] = useState<DictionaryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listData = await fetchListData();
        setData(listData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: DictionaryItem }) => (
    <ListItem item={item} />
  );
  console.log(data)
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={100}
    />
  );
}
