import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function AddTaskButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Feather name="plus-circle" size="80%" color="teal" />
    </TouchableOpacity>
  );
}
