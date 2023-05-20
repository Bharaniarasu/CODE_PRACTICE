const http = require("http");
const routes = require("./routes");
console.log(routes);
console.log(routes.message, routes);

http.createServer(routes.Handler).listen(3000);
