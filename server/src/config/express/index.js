import express from 'express';
import graphHTTP from 'express-graphql';
import compression from "compression";
import { printSchema } from 'graphql';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

import schema from '../graphql/schema'
import router from '../../routes';

const middleware = [
  // compression(),
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  json(),
  urlencoded( { extended: true } ),
  express.static( resolve( __dirname, '../../../../client/public') ) 
];

const graphQL = [
  '/graphql',
  new graphHTTP( () => ({
    schema,
    pretty: true,
    graphiql: true
  })),
]
class App { 
  constructor() {
    this.express = express();
    this.mountMiddleware();
    this.mountGraphQL();
    this.mountRouter();
  }

  mountMiddleware () {
    this.express.use(...middleware);
  }

  mountGraphQL() {
    console.log(printSchema(schema));
    this.express.use(...graphQL)
  }
  mountRouter () {
    this.express.use('/api', router);
  }
}

export default new App();