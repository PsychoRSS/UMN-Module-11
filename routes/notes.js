const notes  = require('express').Router();
// const uuid = require('../helpers/uuid')
const { readFromFile, readAndAppend ,writeToFile } = require('../helpers/fsUtils');
const fs = require('fs')
const db =  require('../db/db.json')


notes.get('/', (req, res) => {
      readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
    console.info(`${req.method} request received for tips`)

})

notes.post('/', (req, res) => {
      const {title, text} = req.body
      console.log(tile,text)
})

module.exports = notes;