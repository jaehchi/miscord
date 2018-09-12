import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

const middleware = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  json(),
  urlencoded( { extended: true } ),
  express.static( resolve( __dirname, '../../../../client/public') ) 
];

class App { 
  constructor() {
    this.express = express();
    this.mountMiddleware();
  }

  mountMiddleware () {
    this.express.use(...middleware);
  }
}

export default new App();