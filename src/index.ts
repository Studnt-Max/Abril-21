import express from 'express'
import geometricRoutes from './routes/geometricRoutes'

const app = express();
app.use(express.json());

app.use('/api/circulo', geometricRoutes);
app.use('/api/cubo', geometricRoutes);
app.use('/api/triangulo', geometricRoutes);

app.listen(3000, () => {console.log('Servidor corriendo con exito!')})