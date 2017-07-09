import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { BackIcon } from '../components/icons';
import Colors from '../styles/Colors';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-settings" size={23} color={tintColor} />
    ),
    headerStyle: {
      backgroundColor: Colors.PINK_100,
    },
    headerTitle: 'Settings',
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: Colors.WHITE,
  },
});

export default SettingsScreen;
