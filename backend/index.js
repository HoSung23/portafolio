const express = require('express');
const cors = require('cors');
const proyectosRoutes = require('./routes/proyectos');

const app = express();

app.use(cors());
app.use(express.json());

//RUTAS
app.use('/api/proyectos', proyectosRoutes);

//ROUTES TESTS
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});