import api from './api';

export const loginService = async (email, password) => {
  const formData = new FormData();
  formData.append('username', email); // O FastAPI usa 'username' para o e-mail no OAuth2
  formData.append('password', password);

  try {
    const response = await api.post('/login', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Erro ao conectar ao AutoCare";
  }
};