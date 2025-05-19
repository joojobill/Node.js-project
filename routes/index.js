/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
 
const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req,res) =>{
    //#swagger.tags-['hello world']
    res.send('hello world');});

 
router.use('/users', require('./users'));

 
module.exports = router;