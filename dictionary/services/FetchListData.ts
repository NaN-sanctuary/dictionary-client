import { DictionaryItem } from "../interfaces";

const fetchListData = async (): Promise<DictionaryItem[]> => {
  try {
    const response = await fetch('http://localhost:5005/api/DictionaryItems', {method: "GET"}); // Adjust the URL as per your server endpoint
    if (!response.ok) {
      throw new Error('Unable to fetch data from the server');
    }
    const data: DictionaryItem[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching list data: ${error.message}`);
  }
};

export default fetchListData;