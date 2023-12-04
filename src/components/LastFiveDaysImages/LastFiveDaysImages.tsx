import React, {FC} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImages/PostImages';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImage key={postImage.title} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;
