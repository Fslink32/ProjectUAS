import React, {
    useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userDataStore = async (key, storeData) => {
    try {
        const existingData = await AsyncStorage.getItem(key);
        const data = existingData ? JSON.parse(existingData) : [];

        const newRow = storeData; // Example new row
        data.push(newRow);

        await AsyncStorage.setItem(key, JSON.stringify(data));
        console.log(data);
        return [status=true];
    } catch (error) {
        return [status = false];
    }
};
const userDataGet = async (key) => {
    try {
        const existingData = await AsyncStorage.getItem(key);
        const data = existingData ? JSON.parse(existingData) : [];
        return [status=true,data=data];
    } catch (error) {
        return [status = false,data=[]];
    }
};
const deleteData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data deleted successfully');
    } catch (error) {
        console.log('Error deleting data:', error);
    }
};
const userDataFind = async (key,where) => {
    try {
        const storedData = await AsyncStorage.getItem(key);
        const data = storedData ? JSON.parse(storedData) : [];

        const filteredData = data.filter(item => item.username === where);
        console.log(filteredData)
        return filteredData;
    } catch (error) {
        console.log('Error finding data:', error);
    }
};
const loginData = async (key,where) => {
    try {
        const storedData = await AsyncStorage.getItem(key);
        const data = storedData ? JSON.parse(storedData) : [];

        const filteredData = data.filter(item => item.isLogIn === where);
        console.log(filteredData)
        return filteredData;
    } catch (error) {
        console.log('Error finding data:', error);
    }
};


export {
    userDataStore,
    userDataGet,
    deleteData,
    userDataFind,
    loginData
};