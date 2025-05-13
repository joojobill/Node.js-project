const { application } = require('express');
const mongobd = require('../data/database');
const objectid = require('mongodb').objectid;

const getAll = async (req , res) => {
    const result = await mongobd.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Conect-type', 'application/json');
        res.status(200).json(users);
    })

};

const getSingle = async (req , res) => {
    const userid = new objectid(req, params.id);
    const result = await mongobd.getDatabase().db().collection('users').find({_id: userid});
    result.toArray().then((users) => {
        res.setHeader('Conect-type', 'application/json');
        res.status(200).json(users[0]);
    })


};
 
module.exports = {
    getAll,
    getSingle
};