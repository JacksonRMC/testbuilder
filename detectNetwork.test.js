/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
  
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {

 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'), 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'),  'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.equal(detectNetwork('4123456789012345678'),  'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
   
 

for (var prefix = 51; prefix <= 55; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '12345678909876').should.equal("MasterCard")
    });
  })(prefix)
}


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
 
});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork("6011345454567654").should.equal("Discover");
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011456789098765432').should.equal("Discover")
  });

for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '1234567890987').should.equal("Discover")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '1234567890987698').should.equal("Discover")
    });
  })(prefix)
}

for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '1234567890').should.equal("Discover")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '1234567890987').should.equal("Discover")
    });
  })(prefix)
}
});

describe('Maestro', function() {

var fifty = '50644543234';
var fiftysix = '56644543234';
var fiftyseven = '57644543234';
var sixes = '63044567890';

for (var i = 0; i <= 7; i ++) {
 fifty += i;
  fiftysix += i;
  fiftyseven += i;
  sixes += i;
  (function(i) {
    it('has a prefix of 50 and a length of ' + fifty.length, function(){
      detectNetwork(fifty).should.equal("Maestro")
    });
    it('has a prefix of 56 and a length of ' + fiftysix.length, function(){
      detectNetwork(fiftysix).should.equal("Maestro")
    });
    it('has a prefix of 57 and a length of ' + fiftyseven.length, function(){
      detectNetwork(fiftyseven).should.equal("Maestro")
    });
    it('has a prefix of 6304 and a length of ' + sixes.length, function(){
      detectNetwork(sixes).should.equal("Maestro")
    });
  })(i)
}
});



describe('China UnionPay', function(){
      it('has a prefix of 62 and a length of 16', function(){
    detectNetwork('6204456789098654').should.equal("China UnionPay")
  });

    it('has a prefix of 62 and a length of 17', function(){
    detectNetwork('62044567890987654').should.equal("China UnionPay")
  });

    it('has a prefix of 62 and a length of 18', function(){
    detectNetwork('620445678909847654').should.equal("China UnionPay")
  });

    it('has a prefix of 62 and a length of 19', function(){
    detectNetwork('6204456789098765432').should.equal("China UnionPay")
  });


});

describe('Switch', function(){
  it('has a prefix of 49 and a length of 16', function(){
    detectNetwork('4904456789098765').should.equal("Switch")
  });
    it('has a prefix of 49 and a length of 18', function(){
    detectNetwork('490445675489098765').should.equal("Switch")
  });
      it('has a prefix of 49 and a length of 19', function(){
    detectNetwork('4904456444789098765').should.equal("Switch")
  });

  it('has a prefix of 5641 and a length of 18', function(){
    detectNetwork('564145678909876548').should.equal("Switch")
  });

    it('has a prefix of 5641 and a length of 16', function(){
    detectNetwork('5641456789876548').should.equal("Switch")
  });

      it('has a prefix of 5641 and a length of 19', function(){
    detectNetwork('5641456789098766548').should.equal("Switch")
  });

  it('has a prefix of 6331 and a length of 16', function(){
    detectNetwork('6331456789097654').should.equal("Switch")
  });

    it('has a prefix of 6331 and a length of 18', function(){
    detectNetwork('633145675689097654').should.equal("Switch")
  });

    it('has a prefix of 6331 and a length of 19', function(){
    detectNetwork('6331458886789097654').should.equal("Switch")
  });

  it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333456789098654').should.equal("Switch")
  });

    it('has a prefix of 6333 and a length of 18', function(){
    detectNetwork('633345678977098654').should.equal("Switch")
  });

    it('has a prefix of 6333 and a length of 19', function(){
    detectNetwork('6333456789099998654').should.equal("Switch")
  });  

  it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759456789098765').should.equal("Switch")
  });

  it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675945678909876775').should.equal("Switch")
  });

  it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759456789098666765').should.equal("Switch")
  });
});










