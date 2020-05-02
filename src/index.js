var express = require('express');
var app = express();
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public/")))

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');



    socket.on('position', (position) => {
        socket.broadcast.emit('otherPosition', position)
    })
});


http.listen(port, () => {
    console.log('listening on port ' + port)
});