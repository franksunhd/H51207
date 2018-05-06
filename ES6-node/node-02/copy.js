var fs = require('js');
function copy(readFile,writeFile) {
    // 创建一个可读流
    var rs = fs.createReadStream(readFile);

    // 创建一个可写流
    var ws = fs.createWriteStream(writeFile);
    rs.pipe(ws);
}
