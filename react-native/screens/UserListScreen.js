import React, { useState, useEffect, useContext } from 'react'
import { Button, FlatList, View, Text } from 'react-native'
import { getAllUsers } from '../src/api/userApi'
import User from '../models/User'
import renderItemForList from '../utils/renderItemForList'
import {deleteUser} from '../src/api/userApi'
import { AuthContext } from '../context/AuthContext'
const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers()
        const data = response?.users;
        console.log(data)
        const parsedUsers = data.map(
          ({ userId, userName, role }) =>
            new User(userId, userName, null, role, null)
        )
        setUsers(parsedUsers)
        console.log(parsedUsers)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  const handleLogout = () => { logout() }
  const handleAdd = () => { navigation.navigate('AddUser') }
  const handleShow = (id) => { navigation.navigate('UserWorkLogs', {id}) }
  const handleEdit = (id) => { navigation.navigate('EditSensitiveInfo', {id}) }
  const handleDelete = async (id) => { 
    try {
      await deleteUser(id)
      setUsers(prevUsers => prevUsers.filter(u => u.id !== id))
    } catch (error){
      if (error.message === 'User not found' || 'Failed deleting user') return
    }
   }
  
  return (
    <View>
      <Text></Text>
      <View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => renderItemForList({ item }, handleShow, handleEdit, handleDelete)}
        />
      </View>
      <Button title="Add new user" onPress={handleAdd}></Button>
      <View style={{ marginTop: 100 }}> 
          <Button title="LOGOUT" onPress={handleLogout}/>
         </View>
    </View>
  )
}
export default UserListScreen
