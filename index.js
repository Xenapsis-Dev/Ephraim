const http = require('node:http')
const { createBareServer } = require('@tomphttp/bare-server-node')
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.post('/postrequest', (req, res) => {
  try {
    console.log(req.body); // Log the entire request body
    const website = req.body.search;
    console.log(website);
    console.log("TEST");

  } catch (err) {
    console.log(err)
  }
});

// Create an HTTP server
const httpServer = http.createServer();
const bareServer = createBareServer("/bare/");



httpServer.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});
const port = 2000;

httpServer.on("listening", () => {
  console.log("HTTP server listening");
  console.log("View your server at http://localhost:" + port);
});

httpServer.listen({
  port: port,
});
