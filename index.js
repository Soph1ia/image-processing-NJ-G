/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

 const myFunction = require('./image_processing');
 const Benchmark = require('benchmark');
 const suite = new Benchmark.Suite;

exports.helloWorld = (req, res) => {
  output = benchmarking();
  res.status(200).send(output);
};

function benchmarking() {
  
  suite.add(`Processing the image`, function() {
    myFunction.image_processing()
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

//To run locally uncomment this: 
// benchmarking()


