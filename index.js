import express from 'express';
import { PORT } from './src/config/environment.js';
import connectDB from './src/config/mongo.js';
import gameRouter from './src/routes/games.router.js';
import ticketRouter from './src/routes/ticket.router.js';
const app = express();

app.use(express.json());
app.use('/games', gameRouter);
app.use('/ticket',ticketRouter);

async function startServer() {
  const isConnected = await connectDB();
  if (isConnected) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

startServer();