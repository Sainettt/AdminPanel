import React, { useState, useEffect, useContext } from 'react'
import { Button, FlatList, View, Text, Alert } from 'react-native'
import ListTexts from '../../components/ListTexts'
import NavigatePanel from '../../components/NavigatePanel'
import { styles } from '../../styles/mainStyles'
import { getAllUsers } from '../../src/api/userApi'
import renderItemForList from '../../utils/renderItemForList'
import { deleteUser } from '../../src/api/userApi'
import { AuthContext } from '../../context/AuthContext'
import LoadingView from '../../components/LoadingView'
import { showToast } from '../../utils/toastMessage'

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const { logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await getAllUsers()
        const data = response?.users

        const parsedUsers = data.map(({ userId, userName, role }) => ({
          id: userId,
          userName: userName,
          role: role,
        }))

        setUsers(parsedUsers)
      } catch (error) {
        if (error.message === 'Internal server error') {
          showToast('error', error.message)
        } else if (error.message === 'Error fetching users') {
          showToast('error', error.message)
        } else {
          showToast('error', 'An unexpected error occurred')
        }
      } finally {
        setLoading(false)
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
  const handleDelete = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this user?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteUser(id)
              setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id))
            } catch (error) {
              if (
                error.message === 'User not found' ||
                error.message === 'Failed deleting user'
              ) {
                return
              }
              showToast('error', 'Failed to delete user')
            }
          },
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerUserListScreen}>
        <View style={styles.containerNameScreen}>
          <Text style={styles.textNameScreen}>Workers</Text>
        </View>
        <View style={styles.containerUserList}>
          <ListTexts
            firstValue="name"
            secondValue="role"
            thirdValue="options"
          />
          <View style={styles.separatingLine} />
          {!loading ? (
            <FlatList
              data={users}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) =>
                renderItemForList(
                  { item },
                  handleShow,
                  handleEdit,
                  handleDelete
                )
              }
              contentContainerStyle={{ paddingTop: 20 }}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
            />
          ) : null}

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
      <LoadingView loading={loading} />
    </View>
  )
}
export default UserListScreen
