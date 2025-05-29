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
                    <Image source={require("../assets/images/workLogsLogo.svg")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit}>
                    <Image source={require("../assets/images/editUserLogo.svg")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Image source={require("../assets/images/deleteUserLogo.svg")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UserItem