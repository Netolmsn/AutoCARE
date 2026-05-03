import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.x.x:8000', 
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@AutoCare:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;