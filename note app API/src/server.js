import express from 'express'                
import cors from 'cors';
import { PrismaClient } from './generated/prisma/index.js' 
import noteRouter from '../routes/noteRoutes.js' 

// Initialize Prisma Client instance for DB operations
const prisma = new PrismaClient();

// Set the port for the server to listen on (use environment variable or default 3000)
const PORT = process.env.PORT || 3000;

// Create Express app instance
const app = express();

// Middleware to automatically parse incoming JSON request bodies
app.use(express.json());

// Enable CORS to accept requests from different origins (important for frontend-backend communication)
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use('/notes', noteRouter);

// Define a GET route at '/test' to fetch all notes from the database
app.get('/test', async (req, res) => {
  try {
    // Fetch all notes from the database using Prisma Client
    const notes = await prisma.note.findMany();

    // Send a successful JSON response containing the notes
    res.json({ success: true, notes });
  } catch (err) {
    // Handle any errors by sending a 500 status with error message
    res.status(500).json({success : false , error : err.message})
  }
});

// Start the server and listen on the specified port
app.listen(PORT,() =>{
  console.log(`❇️  Server is running on port http://localhost:${PORT}`);
});
