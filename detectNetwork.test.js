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
  var should = chai.should();

  it('has a prefix of 39 and a length of 14', function(){
    detectNetwork('39345678901237').should.equal("Diner's Club")
  });
    it('has a prefix of 38 and a length of 14', function(){
    detectNetwork('38345678901234').should.equal("Diner's Club")
  });

});



describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function(){
    detectNetwork('343456789012345').should.equal("American Express")
  });
    it('has a prefix of 37 and a length of 15', function(){
    detectNetwork('373456789012345').should.equal("American Express")
  });

});


describe('Switch', function(){
  it('has a prefix of 4903 and a length of 16', function(){
    detectNetwork('4903456789098765').should.equal("Switch")
  });
    it('has a prefix of 4903 and a length of 18', function(){
    detectNetwork('490345678909876588').should.equal("Switch")
  });
     it('has a prefix of 4903 and a length of 19', function(){
    detectNetwork('4903456789098765234').should.equal("Switch")
  });
 

    it('has a prefix of 4905 and a length of 16', function(){
    detectNetwork('4905456754890987').should.equal("Switch")
  });
        it('has a prefix of 4905 and a length of 18', function(){
    detectNetwork('490545675489098765').should.equal("Switch")
  });
            it('has a prefix of 4905 and a length of 19', function(){
    detectNetwork('4905456754890987665').should.equal("Switch")
  });



      it('has a prefix of 4911 and a length of 16', function(){
    detectNetwork('4911456444789098').should.equal("Switch")
  });
            it('has a prefix of 4911 and a length of 18', function(){
    detectNetwork('491145644478909875').should.equal("Switch")
  });
                  it('has a prefix of 4911 and a length of 19', function(){
    detectNetwork('4911456444789098765').should.equal("Switch")
  });



  it('has a prefix of 4936 and a length of 16', function(){
    detectNetwork('4936456789098765').should.equal("Switch")
  });
    it('has a prefix of 4936 and a length of 18', function(){
    detectNetwork('493645678909876548').should.equal("Switch")
  });
      it('has a prefix of 4936 and a length of 19', function(){
    detectNetwork('4936456789098756548').should.equal("Switch")
  });



    it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork('5641826789876548').should.equal("Switch")
  });
        it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork('564182678985576548').should.equal("Switch")
  });
            it('has a prefix of 564182 and a length of 19', function(){
    detectNetwork('5641826789876545548').should.equal("Switch")
  });

     

      it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331106789098766').should.equal("Switch")
  });
            it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork('633110678909876688').should.equal("Switch")
  });
                  it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331106789098767566').should.equal("Switch")
  });

  

  it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333456789097654').should.equal("Switch")
  });
     it('has a prefix of 633 and a length of 18', function(){
    detectNetwork('633377456789097654').should.equal("Switch")
  });
      it('has a prefix of 633 and a length of 19', function(){
    detectNetwork('6333457896789097654').should.equal("Switch")
  });

    

    it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759456756890976').should.equal("Switch")
  });
        it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675945677756890764').should.equal("Switch")
  });
          it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759456756890976546').should.equal("Switch")
  });
});


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function(){
    detectNetwork('4444456789098').should.equal("Visa")
  });
    it('has a prefix of 4 and a length of 13', function(){
    detectNetwork('4456456789098').should.equal("Visa")
  });
     it('has a prefix of 4 and a length of 13', function(){
    detectNetwork('4765456789034').should.equal("Visa")
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
   
 

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
      //console.log(prefix)
      detectNetwork(prefix + '1234567890987').should.equal("Discover")
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '1234567890987698').should.equal("Discover")
    });
  })(prefix)
}

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork("6511345454567654").should.equal("Discover");
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511456789098765432').should.equal("Discover")
  });

});


describe('Maestro', function() {
  var should = chai.should();

var prefix = ['5018','5020','5038','6304'];


for (var k = 0; k < prefix.length; k++) {   
    for(var x = 0; x < 8; x++){  
      var num = prefix[k] + '3456789';
(function(currentPrefix, currentLength) {
      num += x;
      it('has a prefix of ' + prefix[k] + ' and a length of ' + num.length, function(){
       console.log(num)
       detectNetwork(num).should.equal("Maestro");
      }); 
})(prefix[k], num)    

  } 
}
});



//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 
//and a length of 16-19.


describe('China UnionPay', function() {
  var should = chai.should();

  

// for (var prefix = 622126; prefix < 622926; prefix++) {   
//     var num = prefix + '123456890';
//     for(var i = 0; i < 4; i++){
//       (function(currentPrefix, currentLength) {
//       num += i;
//       it('has a prefix of ' + prefix + ' and a length of ' + num.length, function(){
//        //console.log(num)
//        detectNetwork(num).should.equal("China UnionPay");
//        }); 
//     })(prefix, i)     
//   }
// }

// for (var k = 624; k <= 626; k++) {   
//     var num = k + ' 123456789011';
//     for(var x = 0; x < 4; x++){
//       (function(currentPrefix, currentLength) {
//       num += x;
//       it('has a prefix of ' + k + ' and a length of ' + num.length, function(){
//        //console.log(num)
//        detectNetwork(num).should.equal("China UnionPay");
//        }); 
//     })(j, x)     
//   }
// }

// for (var j = 6282; j <= 6288; j++) {   
//     var num = j + '12345678011';
//     for(var i = 0; i < 4; i++){
//       (function(currentPrefix, currentLength) {
//       num += i;
//       it('has a prefix of ' + j + ' and a length of ' + num.length, function(){
//        //console.log(num)
//        detectNetwork(num).should.equal("China UnionPay");
//        }); 
//     })(j, i)     
//   }
// }

});













