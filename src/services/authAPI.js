import axios from 'axios';

// Ganti dengan URL dan API KEY Supabase Anda
const API_URL = "https://<YOUR-PROJECT-ID>.supabase.co/rest/v1/users";
const API_KEY = "<YOUR-SUPABASE-ANON-KEY>";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const authAPI = {
    // Register: Menambahkan user baru ke table users
    async registerUser(data) {
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },

    // Login: Mencari user berdasarkan email dan password
    async loginUser(email, password) {
        // Menggunakan query params eq (equal) untuk email dan password
        const response = await axios.get(`${API_URL}?email=eq.${email}&password=eq.${password}`, { headers });
        return response.data;
    },
    
    // Cek apakah email sudah terdaftar
    async checkEmail(email) {
        const response = await axios.get(`${API_URL}?email=eq.${email}`, { headers });
        return response.data;
    }
};
