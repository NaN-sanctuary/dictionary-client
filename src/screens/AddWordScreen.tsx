import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddWordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Add Word Screen</Text>
      {/* Add word form or other components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddWordScreen;
