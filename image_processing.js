const sharp = require("sharp");


function image_processing() {
     sharp.cache("false")
    sharp('image.jpg').resize({height: 1000, width: 1024})
    .then( function(newFileInfo){
        return "image processed Successfully";
    })
    .catch( function (err) {
        console.log(err);
        return "Error received";
    })
}

module.exports = {
    image_processing:image_processing
}

// image_processing()