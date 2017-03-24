  var prefix = ['4903', '4905', '4911', '4936', '6759']
  var prefixThree = ['633']
  var prefixes = ['564182']
  var other = ['63110']
  var lengths = [16, 18, 19]

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

  

  it('has a prefix of 633 and a length of 16', function(){
    detectNetwork('6337456789097654').should.equal("Switch")
  });
     it('has a prefix of 633 and a length of 18', function(){
    detectNetwork('633777456789097654').should.equal("Switch")
  });
      it('has a prefix of 633 and a length of 19', function(){
    detectNetwork('6337457896789097654').should.equal("Switch")
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





































  var expect = chai.expect;
  var prefixes = ['5018','5020','5038','6304'];
  var lengths = ['12000000','130000000','1400000000','15000000000','160000000000','1700000000000', '18000000000000','190000000000000'];
  for (var ii = 0; ii < prefixes.length; ii++) {
    for (var jj = 0; jj < lengths.length; jj++) {
      (function(currentprefix, currentlength) {
        it('has a prefix of ' + currentprefix + ' and a length of ' + (4 + currentlength.length).toString(), function() {
          expect(detectNetwork(currentprefix + currentlength)).to.equal('Maestro'); 
        });
      })(prefixes[ii], lengths[jj])


var prefix = ['5018','5020','5038','6304'];


for (var k = 0; k < prefix.length; k++) {   
    var num = k + '34567890';
    for(var x = 0; x < 8; x++){
      (function(currentPrefix, currentLength) {
      num += x;
      it('has a prefix of ' + k + ' and a length of ' + num.length, function(){
       console.log(num)
       detectNetwork(num).should.equal("China UnionPay");
       }); 
    })(k, x)     
  }
}


describe('Maestro', function() {
  var should = chai.should();

var fifty = '50184543234';
var fiftysix = '50204543234';
var fiftyseven = '50384543234';
var sixes = '63044567890';


for (var i = 0; i <= 7; i ++) {
  (function(i){
    it('has a prefix of 5018 and a length of 12-19', function(){
      fifty += i;
      detectNetwork(fifty).should.equal("Maestro")
    });
    it('has a prefix of 5020 and a length of 12-19', function(){
      fiftysix += i;
      detectNetwork(fiftysix).should.equal("Maestro")
    });
    it('has a prefix of 5038 and a length of 12-19', function(){
      fiftyseven += i;
      detectNetwork(fiftyseven).should.equal("Maestro")
    });
    it('has a prefix of 6304 and a length of 12-19', function(){
      sixes += i;
      detectNetwork(sixes).should.equal("Maestro")
    });
    })(i)
  }
});

  

