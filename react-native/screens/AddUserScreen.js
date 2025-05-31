import React from 'react'
import {View} from 'react-native'
import {styles} from '../styles/mainStyles'
const AddUserScreen = ({navigation}) => {
    return (
        <View style={{...styles.containerUserListScreen, justifyContent: 'center'}}>
            <View style={styles.containerNameScreen}>
                <Text style={styles.textNameScreen}>Edit</Text>
            </View>
        </View>
    )
}
export default AddUserScreen