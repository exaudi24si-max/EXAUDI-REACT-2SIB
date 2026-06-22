import axios from 'axios';

// Ganti dengan URL dan API KEY Supabase Anda
const API_URL = "https://mcebahvgroyteimhooap.supabase.co/rest/v1/users"; 
const FEEDBACK_URL = "https://mcebahvgroyteimhooap.supabase.co/rest/v1/feedbacks";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZWJhaHZncm95dGVpbWhvb2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNzAzMzksImV4cCI6MjA5NzY0NjMzOX0.PFS00U5Gg19cwwqQtVimpwgH0Z6vhQXuieSEd-PqwQM"; // PASTE KEY PANJANG DI DALAM TANDA KUTIP INI

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

export const feedbackAPI = {
    // Member mengirimkan feedback
    async submitFeedback(data) {
        const response = await axios.post(FEEDBACK_URL, data, { headers });
        return response.data;
    },

    // Admin mengambil semua feedback (diurutkan dari yang terbaru)
    async getFeedbacks() {
        const response = await axios.get(`${FEEDBACK_URL}?select=*&order=created_at.desc`, { headers });
        return response.data;
    }
};
