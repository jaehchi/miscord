const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=development',
    'PORT=3000',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
  ],
  'client': [
    'CLIENT_ENV=development'
  ]
};

module.exports = envBuild;