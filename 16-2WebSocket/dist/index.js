import { WebSocketServer, WebSocket } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
let allSockent = [];
let userCount = 0;
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            console.log("new person joined room: " + parsedMessage.payload.roomId);
            allSockent.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type === "chat") {
            let currentUserRoom = null;
            for (let i = 0; i < allSockent.length; i++) {
                if (allSockent[i]?.socket == socket) {
                    currentUserRoom = allSockent[i]?.room;
                }
            }
            for (let i = 0; i < allSockent.length; i++) {
                if (allSockent[i]?.room == currentUserRoom) {
                    allSockent[i]?.socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
//# sourceMappingURL=index.js.map