const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/ping', (req, res) => {
    const now = new Date().toISOString();
    console.log(`[${now}] Ping recibido - Bot activo!`);
    res.json({ status: 'alive', timestamp: now });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`========================================`);
    console.log(`   CRYPTO BOT CORRIENDO EN PUERTO ${PORT}`);
    console.log(`========================================`);
});
