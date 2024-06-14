const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Okay");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const filePath = path.join(
  "/Users/Ido Sabach/Desktop/FullStack/learn node again",
  "example.txt"
);
const fileContent = "Some content for the file";

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    return console.error("Error writing file:", err);
  }
  console.log("File written successfully");
});

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
