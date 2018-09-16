module.exports = function warmup(temperature) {
  var cels = temperature;
  var celsTofar = cels*9/5 + 32 ;
  return celsTofar;
};
