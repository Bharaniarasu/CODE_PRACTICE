const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Practice</title></head>");
    res.write("<body><h1>Welcome to Node practice</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      console.log("Whole req data Received");
      const parsedBody = Buffer.concat(body).toString();
      const data = parsedBody.split("&");

      fs.writeFile("inputs.txt", data[0], (err) => {
        console.log("File created");
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Form</title></head>");
  res.write(
    "<body><h1>Enter Your Name</h1><form  action='/message' method='POST'><input type='text' name='msg'/><input type='text' name='title'/><input type='text' name='image'/><input type='submit' value='Submit'/></form></body>"
  );
  res.write("</html>");
  res.end();
};
module.exports = { Handler: requestHandler, message: "I am Route" };
