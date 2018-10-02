import express from 'express';
import graphHTTP from 'express-graphql';
import compression from "compression";
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

import schema from '../graphql/schema'
import router from '../../routes';

const middleware = [
  // compression(),
  '/graphql',
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  json(),
  urlencoded( { extended: true } ),
  new graphHTTP( () => ({
    schema,
    pretty: true,
    graphiql: true
  })),
  express.static( resolve( __dirname, '../../../../client/public') ) 
];

class App { 
  constructor() {
    this.express = express();
    this.mountMiddleware();
    this.mountRouter();
  }

  mountMiddleware () {
    this.express.use(...middleware);
  }

  mountRouter () {
    this.express.use('/api', router);
  }
}

export default new App();