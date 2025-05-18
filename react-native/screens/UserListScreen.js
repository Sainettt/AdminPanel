import React, { useState, useEffect } from 'react'
import { Button, FlatList, View, Text } from 'react-native'
import { getAllUsers } from '../utils/api'
import User from '../models/User'
import renderItemForList from '../utils/renderItemForList'

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers()
        const parsedUsers = response.data.map(
          ({ id, userName, email, role, password }) =>
            new User(id, userName, email, role, password)
        )
        setUsers(parsedUsers)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  const handleShow = (user) => {}
  const handleEdit = (user) => {}
  const handleDelete = (user) => {}
  
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
      <Button></Button>
    </View>
  )
}
export default UserListScreen
