const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde 'public'
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para que UptimeRobot haga ping y mantenga el bot despierto
app.get('/ping', (req, res) => {
    const now = new Date().toISOString();
    console.log(`[${now}] Ping recibido - Bot activo!`);
    res.json({
        status: 'alive',
        timestamp: now,
        message: 'Crypto Bot corriendo 24/7'
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

app.listen(PORT, () => {
    console.log('========================================');
    console.log('   CRYPTO TRADING BOT - 24/7 SERVER');
    console.log('========================================');
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Hora de inicio: ${new Date().toISOString()}`);
    console.log('');
    console.log('Endpoints:');
    console.log('  / - Dashboard principal');
    console.log('  /ping - Keep-alive para UptimeRobot');
    console.log('  /health - Estado del servidor');
    console.log('========================================');
});
