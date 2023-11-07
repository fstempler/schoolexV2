import React, { useEffect, useState } from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setCameraImage, setUser, setUserData } from '../features/auth/authSlice'
import { useGetProfileImageQuery, useGetUserDataQuery } from '../services/classApi'


const MainNavigator = () => {
    
    
    const { user, localId } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, error, isLoading } = useGetProfileImageQuery(localId)
    const { data: userData, isLoading: isUserDataLoading, isError: isUserDataError } = useGetUserDataQuery(localId);

    useEffect(() => {
        if (data) {
            dispatch(setCameraImage(data.image))
        }
    }, [data])

    useEffect(() => {
        console.log(userData)
        if (userData) {
            dispatch(setUserData(userData))
        }
    }, [userData])

    useEffect(() => {
        ;(async () => {
            try{
                const session = await fetchSession();
                console.log(session)
                if(session.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log("User Error:", error.message)
            }
        })()
    }, [])

    return user ? <BottomTabNavigator /> : <AuthStackNavigator />
    

}

export default MainNavigator