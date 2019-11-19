'use strict';

function JudgementType(item){
  var pro = Object.prototype.toString;
  return pro.call(item).split(" ")[1].split("]")[0];
}

var tools = {

  Simplify: function(array) {
    let hs = []; 
    let jsonHs = [];
    array.forEach(element => {
      if(jsonHs.indexOf(JSON.stringify(element))<0){
        hs.push(element);
        jsonHs.push(JSON.stringify(element))
      }
    });                       
    return hs;
  },

  SimplifyByKey:function(array, key) {
    let hash = {}; 
    array = array.reduce((preVal, curVal) => {
    hash[curVal[key]] ? '' : hash[curVal[key]] = true && preVal.push(curVal); 
    return preVal 
    }, [])
    return array;  
  }
}

module.exports = tools

