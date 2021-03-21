const path = require('path');

module.exports = (app) => {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get("/api/notes", function (req, res) {
    res.json(notes);
});
}