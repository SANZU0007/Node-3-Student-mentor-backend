import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import studentRouter from './studentRoutes.js'; // Adjust the path as needed
import mentorRouter from './mentorRoutes.js'; // Adjust the path as needed

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// ...

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process on connection failure
  }
};

app.use(bodyParser.json());
app.use('/students', studentRouter);
app.use('/mentors', mentorRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
