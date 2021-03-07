var Jimp = require("jimp");

async function image_processing() {
  Jimp.read("image.jpg")
    .then((image) => {
      image.resize(1024, 1000).write("resized_image.jpg");

      image = undefined;
    })
    .catch((err) => {
      console.log(err);
    });
  return "Image processed succesffuly";
}

module.exports = {
  image_processing: image_processing,
};

// to run locally uncomment this  :
// image_processing()
