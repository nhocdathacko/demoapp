import React, { useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register } from './UserService';
import constants from '../../utils/constants';


export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUseId] = useState('');
    const [_email, _setEmail] = useState('');
    const [_pass, _setPass] = useState('');

    const onLogin = async (email, password) => {
        try {
            const res = await login(email, password);
            if (res && res.token) {
                await AsyncStorage.setItem(constants.TOKEN_KEY, res.token);
                setIsLoggedIn(true);
                
                setUseId(res._id);
                return true; 
            }
        } catch (error) {
            console.log('Usercontext onLogin error: ', error);
        }
        return false;
    }

    const onRegister = async (email, password, confim_password) => {
        try {
            const res = await register(email, password, confim_password);
            return res.status;
        } catch (error) {
            console.log('onRegister error: ', error);
        }
    }
    const onGetProFlie = async () => {
        try {
            const res = await login(_email, _pass);
            console.log('onGetProFlie', _email);
            if (res.error == false) {
                const { token, user } = res.data;
                await AsyncStorage.setItem('token', token);
                await AsyncStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        } catch (error) {
            console.log('onGetProFile error: ', error);
        }
        return null;
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn, onLogin, onRegister, onGetProFlie, userId
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
