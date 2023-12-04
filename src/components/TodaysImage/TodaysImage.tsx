import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PostImage} from '../../types';
import useHandleViewPress from '../CustomHooks/HandleViewPress/HandleViewPress';

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
  const handleViewPress = useHandleViewPress();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleViewPress({date, title, url, explanation})}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 5,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: '100%',
    borderRadius: 32,
    height: 190,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodaysImage;
