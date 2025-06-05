import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/mainStyles'
import WorkLogField from '../components/WorkLogField'
import ListTexts from '../components/ListTexts'
import NavigatePanel from '../components/NavigatePanel'
import { getUserWorkLogs } from '../src/api/userApi'

const UserWorkLogsScreen = ({ navigation, route }) => {
    const { id, userName } = route.params
    const [workLogs, setWorkLogs] = useState([])

    useEffect(() => {
        const fetchUserWorkLogs = async () => {
            try {
                const response = await getUserWorkLogs(id)
                setWorkLogs(response.userWorkLogs)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUserWorkLogs()
    }, [])
  return (
    <View style={styles.containerUserListScreen}>
      <View style={styles.containerNameScreen}>
        <Text style={{...styles.textNameScreen, fontSize: 20}}>{userName}</Text>
      </View>
      <View style={styles.containerUserList}>
        <ListTexts firstValue="date" secondValue="start" thirdValue="end" />
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#858796',
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 15}}>
        <FlatList
          data={workLogs}
          renderItem={({ item }) => (
            <WorkLogField
              date={item.date}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
        />
        </View>
        <TouchableOpacity style={{ position: 'absolute', bottom: 30 }} onPress={() => {
          navigation.navigate('AddWorkLog', { id, userName })
        }}>
          <Image source={require('../assets/images/addUserButton.png')} />
        </TouchableOpacity>
      </View>
      <NavigatePanel
        onPressList={() => {
          navigation.navigate('UserList')
        }}
        onPressAdd={() => {
          navigation.navigate('AddUser')
        }}
      />
    </View>
  )
}
export default UserWorkLogsScreen
