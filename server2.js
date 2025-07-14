const http = require('http');
const routes = require("./routes");

routes.testfunction(); // this will log "This is another Function"

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log('✅ Task 2 Server running at http://localhost:3000');
});
