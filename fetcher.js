const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];
request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body', body);
    fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  });
});