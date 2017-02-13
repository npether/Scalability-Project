function add (arr) {  
  return arr.reduce(function(a, b) { 
    return a + b
  }, 0)
}

module.exports.add = add  