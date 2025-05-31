import React from "react";
import {View, Text, TextInput} from 'react-native'
import {styles} from '../styles/mainStyles'

const UserEdit = ({text, editText, onChangeText}) => {
    return (
        <View style={styles.containerEditInfo}>
            <View style={styles.containerNameText}>
                <Text style={styles.textNameText}>{text}</Text>
            </View>
            <View style={styles.containerNameEditText}>
                <TextInput
                 style={styles.textNameEditText}
                 value={editText}
                 editable={true}
                 onChangeText={onChangeText}
                 />
            </View>
        </View>
    )
}
export default UserEdit