// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User Api',
        discription: 'User Api'

    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};
const outputFile =  './swagger.json';
const endpointstFiles = ['./routes/index.js'];

//  this will generate swagger.json
swaggerAutogen(outputFile, endpointstFiles, doc);