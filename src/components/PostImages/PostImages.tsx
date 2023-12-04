import React, {FC} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {PostImage as PostImageType} from '../../types';
import useHandleViewPress from '../CustomHooks/HandleViewPress/HandleViewPress';

const PostImage: FC<PostImageType> = ({date, title, url, explanation}) => {
  const handleViewPress = useHandleViewPress();
  return (
    <View style={styles.container}>
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
    backgroundColor: 'rgba(18, 39, 113, 255)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PostImage;
function navigate(
  arg0: string,
  arg1: {title: any; date: any; url: any; explanation: any},
) {
  throw new Error('Function not implemented.');
}
