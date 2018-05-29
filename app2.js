var express = require('express');
var app = express();var type = [];
var http = require('http').Server(app);
var io = require('socket.io')(http);var prot = 80;var ip;
app.use(express.static('public')); var playing = 0;var loging = null; var id = null;
http.listen(prot,ip,function () {
  console.log('sever is on by localhost:3000');
  http.close(function(){http.listen(prot,'');
});});
io.on('connection',function(socket) {
ip =  socket.request.connection.remoteAddress;
id = socket.id;
type[playing] = id;
io.emit('id',type,id,playing);
playing = playing + 1;
console.log(':coming ip:' + ip + id);
socket.on('xy',function(x,y){
        id = socket.id;
        //if(data.direc != null)
        //io.emit('xyr',data.x,data.y,data.direc,id);
        io.emit('xyr',x,y,id);
    });
});
