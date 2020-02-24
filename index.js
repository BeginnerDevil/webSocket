console.log('启动websocket服务');

var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 8081 });
wss.on('connection', function (ws) {
    console.log('server: 收到连接');
    ws.on('message', function (message) {
        console.log(message);
    });
    function intervalFunc() {
        ws.send('server: hello 客户端');
      }
      
      setInterval(intervalFunc, 1500);
    
});