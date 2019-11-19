'use strict';

function JudgementType(item){
  var pro = Object.prototype.toString;
  return pro.call(item).split(" ")[1].split("]")[0];
}

var tools = {

  Simplify: function(array) {
     const myArray = [1,2,3,4,4,null,null,0,5]
    // const myArray = [[1,2],[2,3],[1,2]]
    console.log(JudgementType(myArray))
    let hash = [];
    array.forEach(element => {
      if(hash.indexOf(element) < 0){
        hash.push(element)
      }
    });
    console.log("hash2222:")
    console.log(hash)
    return hash;
  },

  SimplifyByKey:function(array, key) {
    let hash = {}; 
    array = array.reduce((preVal, curVal) => {
    hash[curVal[key]] ? '' : hash[curVal[key]] = true && preVal.push(curVal); 
    return preVal 
    }, [])
    console.log(array)
    return array;  
  }
}

module.exports = tools

