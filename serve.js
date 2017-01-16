(() => {
var express = require("express");

var app = express();

app.use(express.static("site"));
var port = 8081;
app.listen(port, () => {
  console.log('running on http://localhost:' + port);
});
})();
