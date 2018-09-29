import { createServer } from 'http';
import { success } from './lib/logs';

import App from './config/express';
import db from './config/database';


export const app = App.express;

export const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, err => {
  if (err) {
    throw new Error;
  }
  success(`Server is now listening on PORT: ${PORT}`);
});