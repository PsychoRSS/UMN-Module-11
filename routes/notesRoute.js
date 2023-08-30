const notes  = require('express').Router();
const uuid = require('../helpers/uuid')
const { readFromFile, readAndAppend ,writeToFile } = require('../helpers/fsUtils');

const fs = require('fs')
const db =  require('../db/db.json')


notes.get('/', (req, res) => {
      readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
    console.info(`${req.method} request received for tips`)

})

notes.get('/:title', (req,res) => {
      const {title, text} =  req.body
      readFromFile('db/db.json').then()
})

notes.post('/', (req, res) => {
      const {id,title, text} = req.body

      const newNotes = {
            id: uuid(),
            title,
            text
      };

      readAndAppend(newNotes, 'db/db.json')

      res.json(newNotes)
})

module.exports = notes;