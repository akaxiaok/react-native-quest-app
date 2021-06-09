import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Step = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.arrow}>←</Text>
      <View style={styles.progress}>
        <View style={styles.track}></View>
        <View style={styles.bar}></View>
      </View>
      <Text style={styles.step}>1/8</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    height:50,
  },
  arrow: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    height:50,
  },
  progress: {
    flexGrow: 1,
    height: 10,
    alignSelf: 'center',
    borderRadius:5,
    position:'relative',
    marginHorizontal:40
  },
  track: {
    backgroundColor: '#f0f0f0',
    width:'100%',
    height: 10,
    position:'absolute',
    borderRadius:5,
  },
  bar: {
    backgroundColor: '#7bccd6',
    width:'12.5%',
    height: 10,
    position:'absolute',
    borderRadius:5,
  },
  step: {
    fontSize: 16,
    alignSelf:'center'
  }
});

export default Step;
