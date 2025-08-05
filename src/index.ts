import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import propertiesRoutes from './routes/properties.routes';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertiesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

