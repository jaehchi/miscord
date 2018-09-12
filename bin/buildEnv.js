const fs = require('fs');
const _ = require('lodash');

const envVariables = require('../config/.env-template.js');

const createENVFile = ( directory, variables ) => {
  _.each( variables, ( variable ) => {
    fs.appendFileSync( `./${directory}/.env`, `${variable}\n` )
  });
};

const buildEnv = () => {
  _.each( envVariables, ( server, key ) => {
    fs.writeFileSync( `./${key}/.env`, '' );
    createENVFile( key, server );
  });
}

buildEnv();