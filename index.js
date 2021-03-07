/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

 const myFunction = require('./image-processing');
 const Benchmark = require('benchmark');
 const suite = new Benchmark.Suite;



exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || "0";
  output = benchmarking(message);
  res.status(200).send(output);
};

function benchmarking() {
  
  suite.add(`Processing the image`, function() {
    myFunction.image_processing(number)
  })
  .on('cycle', function(event){
    console.log(String(event.target))
})
.on('complete', function() {
    console.log('Fastest is' + this.filter('fastest').map('name'))
})
.run({ 'async': false}); 

return `Image processing completed successfully !`
}


