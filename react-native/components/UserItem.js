import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/mainStyles'

const UserItem = ({user, onShow, onEdit, onDelete}) => {
    const { userName, role } = user
    return (
        <View style={styles.containerUserComponent}>
            <Text>{userName}</Text>
            <Text>{role}</Text>
            <View style={styles.containerUserFunctions}>
                <TouchableOpacity onPress={onShow}>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit}>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Image/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UserItem