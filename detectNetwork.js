// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    var firstDigit = parseInt(cardNumber.slice(0,1));
    var firstTwo = parseInt(cardNumber.slice(0,2));
    var firstThree = parseInt(cardNumber.slice(0,3))
    var firstFour = parseInt(cardNumber.slice(0,4));
    var firstSix = parseInt(cardNumber.slice(0,6));
   
    
	  if(firstTwo === 38 || firstTwo === 39){
	  	if(cardNumber.length === 14){
	  	return "Diner's Club";
	  	}
	  } else if(firstTwo === 34 || firstTwo === 37){
	  	if(cardNumber.length === 15){
	  	return "American Express";
	  	}
	  }
	  	else if(firstTwo === 49 || firstThree === 633 || firstFour === 6331 || firstFour === 6759 || firstFour === 5641){
	  	if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
	  	return "Switch";
	  	}
	  } 
	  else if(firstDigit === 4){
	  	if(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
	  	return "Visa";
	  	}
	  } else if((firstTwo >= 51 && firstTwo <= 55)){
	  	if(cardNumber.length === 16){ 
	  	return "MasterCard";
	  	}
	  }else if((firstThree >= 644 && firstThree <= 649) || firstTwo === 65 || firstFour === 6011){
	  	if(cardNumber.length === 16 || cardNumber.length === 19){
	  	return "Discover";
	  	}
	  }
	  else if((firstSix > 622125 && firstSix < 622927) || (firstFour > 6281 && firstFour < 6289) || (firstThree > 623 && firstThree < 627)){
	  	if(cardNumber.length >= 16 && cardNumber.length <= 19){
	  	return "China UnionPay";
	  }
	  }
	  else if((firstFour === 5018 || (firstFour === 5020 || firstFour === 5038) || firstFour === 6304)){
	  	if(cardNumber.length >= 12 && cardNumber.length <= 19){
	  	return "Maestro";
	  	}
	  }
};
