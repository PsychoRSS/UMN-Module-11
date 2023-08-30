const express = require('express');
const path = require('path');
const api = require('./routes/index');
const db =  require('./db/db.json')
const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './assets/public/index.html'))
);

// GET Route for feedback page
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './assets/public/notes.html'))
);

app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
