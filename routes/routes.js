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
    notes.push(req.body);
    res.json(true)
  })
}