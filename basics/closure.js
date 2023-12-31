function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over `x`
	function add(y) {
		return y + x;
	};

	return add;
}

var plusOne = makeAdder( 1 ); // x is 1, plusOne has a reference to add(y)
var plusTen = makeAdder( 10 ); // x is 10


plusOne(3); // 1 (x) + 3 (y) = 4
plusTen(13); // 10 (x) + 13 (y) = 23 
console.log(plusOne(3),"plusone(1)");
console.log(plusTen(13),"plusTen(10)")

// 4 plusone(1)
// 23 plusTen(10)