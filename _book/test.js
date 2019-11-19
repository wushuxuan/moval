'use strict';

require('mocha');
const assert = require('assert');
const tools = require('./');

describe('Simplify', function() {
  it('数组去重:', function() {
    //  const myArray = [1,2,3,4,4,null,null,0,5]
    // const myArray = [[1,2],[2,3],[1,2]]
    const myArray = [
      {id:"1",value:'333'},
      {id:"1",value:'555'},
      {id:"2",value:'111'},
      {id:"2",value:'111'},
      {id:"2",value:'222'},
      {id:"3",value:'111'}
    ]
    assert(tools.Simplify(myArray));
  });
});

describe('SimplifyByKey', function() {
  it('json数组某一特定key值去重:', function() {
    const myArray = [
      {id:"1",value:'333'},
      {id:"1",value:'555'},
      {id:"2",value:'111'},
      {id:"2",value:'111'},
      {id:"2",value:'222'},
      {id:"3",value:'111'}
    ] 
    assert(tools.SimplifyByKey(myArray,'value'));
  });

});