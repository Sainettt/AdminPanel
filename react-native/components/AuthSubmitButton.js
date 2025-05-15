import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import {styles} from '../styles/authStyles'

const AuthSubmitButton = ({onPress}) => {
    return (
        <View style={styles.authSubmitButton}>
            <TouchableOpacity style={styles.authSubmitButtonClickableArea} onPress={ () => onPress() }>
                <Text style={{...styles.btnText, fontSize : 18}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AuthSubmitButton