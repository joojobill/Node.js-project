 
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const router = require('express').Router()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve);
router.use('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;