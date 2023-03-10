import { StyleSheet, View } from 'react-native';

import AddTaskButton from './AddTaskButton';

export default function Buttons({
    setVisibleTaskModal,
    setEditMode,
    setDefaultTitle,
    setDefaultDescription
}) {
    return (
        <View style={styles.container}>
            <AddTaskButton onPress={() => {
                setVisibleTaskModal(true);
                setEditMode(false);
                setDefaultTitle("");
                setDefaultDescription("");
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // backgroundColor: 'teal',
        height: '15%',
        justifyContent: 'space-evenly',
    },
});
