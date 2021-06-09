import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Continue = (props) => {
  return (
    <View style={[styles.container,props.style]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.touch}
      >
        <Text style={styles.textStyle}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  touch: {
    backgroundColor: '#7bccd6',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 22,
    alignSelf: 'center',
  },
});

export default Continue;
