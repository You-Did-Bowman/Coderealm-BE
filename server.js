import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { createError } from "./utils/errors.js";
import { connect2DB } from "./utils/db.js";

// Import Routes
import evaluationsRouter from './routers/evaluations.js';
import usersRouter from './routers/users.js';
import coursesRouter from './routers/courses.js';
import userRoutes from './routers/userRoutes.js';
import postsRouter from './routers/posts.js'
import chatbotRouter from './routers/chatbot.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create application
const app = express();

// Initialize server
const startServer = async () => {
  try {
    // Create DB connection
    await connect2DB();

    // ------------------ Middleware ------------------
    app.use(cookieParser());
    
    // Dynamic CORS configuration (CRITICAL FOR PRODUCTION)
    const corsOptions = {
      origin: process.env.NODE_ENV === 'production' 
        ? process.env.FE_HOST 
        : 'http://localhost:5173',
      credentials: true, // Allow credentials (cookies)
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    };
    app.use(cors(corsOptions));
    
    app.use(express.json());

    // ------------------ Routers -----------------
    app.use("/users", usersRouter);
    app.use("/user", usersRouter);
    app.use("/api/courses", coursesRouter);  
    app.use('/api/evaluations', evaluationsRouter);
    app.use('/api/user', userRoutes);
    app.use("/chatbot", chatbotRouter); 
    app.use('/posts', postsRouter);  

    // Serve static files in production
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
      
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }

    // ---------------- Error handler --------------
    app.use((req, res, next) => {
      next(createError("Route not defined!", 404));
    });

    app.use((error, req, res, next) => {
      res.status(error.status || 500).json({ msg: error.message });
    });

    // ------------------- Port -------------------
    const port = process.env.PORT || 5001;
    app.listen(port, () => {
      console.log(`
        🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
        🔗 URL: ${process.env.BE_HOST || `http://localhost:${port}`}
        ⚠️ CORS Origin: ${corsOptions.origin}
        🍪 Cookie Policy: ${process.env.NODE_ENV === 'production' ? 
          'Secure/None' : 'Insecure/Lax'}
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();