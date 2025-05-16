import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {getToken} from '../utils/tokenStorage'

const RootNavigator = () => {
    const { isLoggedIn, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const checkToken = async () => {
            let token
            if (!isLoggedIn) token = await getToken();
            if (token) login() 
            setLoading(false);
        }
        checkToken();
    }, [isLoggedIn])

    if (loading) return null
    return (
        <NavigationContainer>
            {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
export default RootNavigator;