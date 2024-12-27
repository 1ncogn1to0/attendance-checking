const express = require('express');
require('dotenv').config(); // Загрузка переменных из .env
const connectDB = require('./config/db');
const attendanceRoutes = require('./routes/attendance');
const path = require('path');

connectDB(); // Подключение к базе данных
const app = express();

app.use(express.json()); // Middleware для обработки JSON
app.use('/attendance', attendanceRoutes); // Маршруты

// Подключение папки public
app.use(express.static(path.join(__dirname, '/public')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
