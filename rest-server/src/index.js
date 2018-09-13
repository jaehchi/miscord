import { createServer } from 'http';
import { success } from './config/log';

import App from './config/express';

const app = App.express;


const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, err => {
  if (err) {
    throw new Error;
  }
  success(`Server is now listening on PORT: ${PORT}`);
});

export default server;
