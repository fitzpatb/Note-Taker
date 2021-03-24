const path = require('path');
const fs = require('fs');

module.exports = (app) => {
  //start with html routes

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  //set up api routes
  let notes = require("../db/db.json");

  app.get("/api/notes", (req, res) => {
    res.json(notes)
  });

  app.post("/api/notes", (req, res) => {
    if (notes.length === 0) {
      req.body.id = 1
    } else {
      req.body.id = (notes[notes.length - 1].id + 1);
    }
    notes.push(req.body);
    res.json(true);
  });

  app.get("/api/notes/:id", (req, res) => {
    notes.forEach(note => {
      if (req.params.id == note.id) {
        res.json(note)
      }
    })
    res.json(false)
  });

  app.delete("/api/notes/:id", (req, res) => {
    notes.forEach((note, index) => {
      if(req.params.id == note.id) {
        notes.splice(index, 1)
        res.json(true)
      }
    })
    res.json(false)
  });
}