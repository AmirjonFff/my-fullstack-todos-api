const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/TodoRoute')

require('dotenv').config()

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Таймаут для попытки подключения к серверу
    socketTimeoutMS: 45000 // Таймаут для сокетов
  })
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
