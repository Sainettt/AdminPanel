import React, { useState, useEffect, useContext } from 'react'
import { Button, FlatList, View, Text } from 'react-native'
import ListTexts from '../../components/ListTexts'
import NavigatePanel from '../../components/NavigatePanel'
import { styles } from '../../styles/mainStyles'
import { getAllUsers } from '../../src/api/userApi'
import User from '../../models/User'
import renderItemForList from '../../utils/renderItemForList'
import { deleteUser } from '../../src/api/userApi'
import { AuthContext } from '../../context/AuthContext'
const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers()
        const data = response?.users
        const parsedUsers = data.map(
          ({ userId, userName, role }) =>
            new User(userId, userName, null, role, null)
        )

        setUsers(parsedUsers)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  const handleLogout = () => {
    logout()
  }
  const handleShow = (id, userName) => {
    navigation.navigate('UserWorkLogs', { id, userName })
  }
  const handleEdit = (id) => {
    navigation.navigate('EditSensitiveInfo', { id })
  }
  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id))
    } catch (error) {
      if (error.message === 'User not found' || 'Failed deleting user') return
    }
  }

  return (
    <View style={styles.containerUserListScreen}>
      <View style={styles.containerNameScreen}>
        <Text style={styles.textNameScreen}>Workers</Text>
      </View>
      <View style={styles.containerUserList}>
        <ListTexts firstValue="name" secondValue="role" thirdValue="options" />
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#858796',
            marginTop: 10,
          }}
        />
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            renderItemForList({ item }, handleShow, handleEdit, handleDelete)
          }
          contentContainerStyle={{ paddingTop: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
        />
        <View style={{ marginTop: 10 }}>
          <Button title="LOGOUT" onPress={handleLogout} />
        </View>
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
export default UserListScreen
