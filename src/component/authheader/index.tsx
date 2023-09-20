import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          source={require('../../assets/img/left_arrow_icon.png')}
          style={styles.img}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  img: {
    width: 18,
    height: 18,
  },
  title: {
    color: '#4F63AC',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
export default React.memo(AuthHeader);
