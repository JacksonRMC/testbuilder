// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var firstDigits = parseInt(cardNumber.slice(0,2));
	if((firstDigits == 38 || firstDigits == 39) && cardNumber.length === 14){
		return "Diner's Club";
	} else if((firstDigits == 34 || firstDigits == 37) && cardNumber.length === 15){
		return "American Express";
	} 
};


