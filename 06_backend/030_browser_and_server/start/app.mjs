import * as http from "http";

// http://localhost:8080/hello -> hello
// http://localhost:8080/bye -> bye

//scriptタグで囲まれたものはブラウザ側で実行される。
//そのほかはnode.js上（サーバー側）で実行される

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/hello") {
    res.end('<script>window.alert("frontend")</script>');
  } else if (req.url === "/bye") {
    res.end("bye");
  }
});

server.listen(8080);
