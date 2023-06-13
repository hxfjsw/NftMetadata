var fs = require('fs');

for (let i = 0; i < 100; i++) {
    let metadata = {
        "image": "https://hxfjsw.github.io/NftMetadata/frog/images/" + i%13 + ".png",
        "name": "Frog #" + i,
    };

    //保存到文件
    let path = './json/' + i + '.json';
    fs.writeFileSync(path, JSON.stringify(metadata));
}