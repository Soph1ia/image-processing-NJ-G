const sharp = require("sharp");
const fs = require("fs");


async function image_processing() {
     sharp.cache("false")
    await sharp('image.jpg').resize({height: 1000, width: 1024}).toFile('image.jpg')
    .then( function(newFileInfo){
        return "image processed Successfully";
        
    })
    .catch( function (err) {

        return "Error received";
    })

  
}

module.exports = {
    image_processing:image_processing
}

// image_processing()