/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View, } from 'react-native';

import Ruler from "./src/components/Ruler";
import Step from "./src/components/Step";
import Continue from "./src/components/Continue";


const App: () => Node = () => {

  const backgroundStyle = {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <Step/>
        <Text style={styles.question}>
          How old are you?
        </Text>
        <Ruler style={styles.ruler}/>
        <Continue style={styles.continue}/>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  question: {
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  ruler: {},
  continue: {
    position: 'absolute',
    bottom: 50,
    width: '100%'
  },
  container: {
    flex: 1
  }
});

export default App;
