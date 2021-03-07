var Jimp = require('jimp');

async function image_processing() {

    let image = await Jimp.read('image.jpg');

    await image.resize(1024,1000);

    return 'Image processed succesffuly'
}

module.exports = {
    image_processing: image_processing
}