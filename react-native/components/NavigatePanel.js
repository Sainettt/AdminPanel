import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import {styles} from '../styles/mainStyles'

const NavigatePanel = ({onPressList, onPressAdd}) => {
    return (
        <View style={styles.containerLogo}>
                <TouchableOpacity onPress={onPressList}>
                  <Image source={require('../assets/images/userListLogo.png')} />
                </TouchableOpacity>
                <Image
                  source={require('../assets/images/stfHoursWhiteLogo.png')}
                  style={{ marginStart: 40, marginEnd: 40 }}
                />
                <TouchableOpacity onPress={onPressAdd}>
                  <Image source={require('../assets/images/addUserLogo.png')} />
                </TouchableOpacity>
              </View>
    )
}
export default NavigatePanel
