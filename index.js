const server = require('./server/app.js');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

var http = require("http");
setInterval(function() {
    http.get("http://matthewtran.herokuapp.com");
}, 300000); // every 5 minutes (300000)