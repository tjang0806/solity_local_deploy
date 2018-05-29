const path = require('path');
const fs = require('fs');
const solc = require('solc');


//read raw source file
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

//compile
module.exports = solc.compile(source,1).contracts[':Inbox'];
