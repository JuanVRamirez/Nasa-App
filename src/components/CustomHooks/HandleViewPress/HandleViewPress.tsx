import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  PostImage as PostImageType,
  RootStackParams,
} from '../../../types/index';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const useHandleViewPress = () => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewPress = (postImage: PostImageType) => {
    navigate('Detail', postImage);
  };

  return handleViewPress;
};

export default useHandleViewPress;
