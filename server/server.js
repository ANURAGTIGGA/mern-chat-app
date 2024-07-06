import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming req with JSON payloads
app.use('/api/auth', authRoutes);

// app.get('/', (req, res)=>{
//     res.send("Hello world");
// });



app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});