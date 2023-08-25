const notes  = require('express').Router();
const uuid = require('../helpers/uuid')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const db =  '../db/db.json'
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`)
    readFromFile(db).then((data) => res.json(JSON.parse(data)))
})

module.exports = notes;