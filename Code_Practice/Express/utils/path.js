const path = require("path");

const pathDir = path.dirname(require.main.filename);
console.log(pathDir);

module.exports = pathDir;
