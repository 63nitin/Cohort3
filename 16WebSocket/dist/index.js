import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    socket.on("message", (e) => {
        if (e) {
            socket.send(e.toString());
        }
    });
});
//# sourceMappingURL=index.js.map