import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

const CheckBox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style={styles.innercontainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/img/Check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 4,
    height: 22,
    width: 22,
  },
  innercontainer: {
    backgroundColor: '#C5C5C5',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: '100%',
    height: '100%',
  },
});
export default CheckBox;
