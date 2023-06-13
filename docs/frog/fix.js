//读取images目录下的所有文件

return;
var fs = require('fs');

var files = fs.readdirSync('./images');

console.log(files);

for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let oldPath = './images/' + file;
    let newPath = './images/' + i+'.png';
    fs.renameSync(oldPath, newPath);
}