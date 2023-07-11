interface DictionaryItem {
  id: number;
  word: string;
  definition: string;
  example: string;
  upvotes: number;
  downvotes: number;
  user: User;
}

interface User {
  id: number;
  name: string;
}

interface ListItemProps {
  item: DictionaryItem;
}

export { DictionaryItem, ListItemProps, User };

