import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { styles } from '../../styles/mainStyles'
import AddUserField from '../../components/AddUserField'
import NavigatePanel from '../../components/NavigatePanel'
import { createWorkLog } from '../../src/api/userApi'
import { showToast } from '../../utils/toastMessage'

const AddWorkLogScreen = ({ navigation, route }) => {
  const [newLog, setNewLog] = useState({
    date: '',
    startTime: '',
    endTime: '',
  })
  const { id, userName } = route.params

  const handleAddLog = async (id, logData) => {
    try {
      const { date, startTime, endTime } = logData
      if (!date || !startTime || !endTime) {
        showToast('error', 'Please fill in all fields')
        return
      }
      console.log('Start time: ', startTime, 'End time: ', endTime)
      const response = await createWorkLog(id, { date, startTime, endTime })
      navigation.navigate('UserWorkLogs', { id, userName })
      return response
    } catch (error) {
      showToast('error', error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containerUserListScreen}>
        <View style={styles.containerNameScreen}>
          <Text style={styles.textNameScreen}>Work Log</Text>
        </View>
        <View style={{ ...styles.containerAddScreen, alignItems: 'center' }}>
          <View style={{ marginTop: 50, alignItems: 'center' }}>
            <AddUserField
              label="date"
              value={newLog.date}
              onChangeText={(text) => setNewLog({ ...newLog, date: text })}
            />
            <AddUserField
              label="start time"
              value={newLog.startTime}
              onChangeText={(text) => setNewLog({ ...newLog, startTime: text })}
            />
            <AddUserField
              label="end time"
              value={newLog.endTime}
              onChangeText={(text) => setNewLog({ ...newLog, endTime: text })}
            />
            <TouchableOpacity
              style={{ marginTop: 100 }}
              onPress={() => {
                handleAddLog(id, newLog)
              }}
            >
              <Image
                source={require('../../assets/images/addWorkLogsButton.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <NavigatePanel
          onPressList={() => {
            navigation.navigate('UserWorkLogs', { id, userName })
          }}
          onPressAdd={() => {
            navigation.navigate('AddWorkLog', { id, userName })
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AddWorkLogScreen
