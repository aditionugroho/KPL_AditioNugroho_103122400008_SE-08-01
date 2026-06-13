function fizzBuzz(arr) {
	if (!Array.isArray(arr)) return "Input tidak valid";

	const result = arr.map((n) => {
		if (typeof n !== 'number') return "Input tidak valid";
		const isEven = n % 2 === 0;
		const isMultipleOf7 = n % 7 === 0;

		if (isEven && isMultipleOf7) return 'FizzBuzz';
		if (isEven) return 'Fizz';
		if (isMultipleOf7) return 'Buzz';
		return String(n);
	});

	// If any element returned the invalid message, propagate it
	if (result.includes("Input tidak valid")) return "Input tidak valid";

	return result.join(', ');
}

module.exports = fizzBuzz;

