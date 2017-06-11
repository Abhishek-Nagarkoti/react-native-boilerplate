import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Back = ({ onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Ionicons name="md-arrow-back" size={25} color="white" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 15,
    justifyContent: 'center',
  },
});

export default Back;