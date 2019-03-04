const express = require('express');
const path = require('path');
const http = require('http');
 
const app = express();
 
app.use(express.static(__dirname));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
 
const port = process.env.PORT || '3000';
app.set('port', port);
 
const server = http.createServer(app);
server.listen(port, () => console.log(`server running on localhost:${port}`));