import React, {useState, useEffect} from 'react'
import {Button, View, Text} from 'react-native'
import { getUserSensitiveInfo } from '../src/api/userApi'
const EditUserSensitiveInfoScreen = ({route}) => {
    const [user, setUser] = useState([])
    const { id } = route.params
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await getUserSensitiveInfo(id)
                setUser(response)
            } catch { throw new Error('Failed to get user')}
        }
        fetchUser()
    }
    ,[])
    return (
        <View>
            <Text>{user.userName}</Text>
            <Text>{user.email}</Text>
            <Text>{user.role}</Text>
            <Text>{user.password}</Text>
        </View>
    )
}
export default EditUserSensitiveInfoScreen