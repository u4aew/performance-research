const express = require('express');
const app = express();
const port = 3000;

// Указываем Express обслуживать статические файлы из текущей директории
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
