function is_not_fizzbuzz(number) {
  if (typeof number !== "number" || isNaN(number) || !isFinite(number)) {
    throw new TypeError("Input harus berupa angka yang valid");
  }
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }
  return true;
}

console.log(is_not_fizzbuzz(1)); // true
console.log(is_not_fizzbuzz(3)); // false
console.log(is_not_fizzbuzz(5)); // false
console.log(is_not_fizzbuzz(30)); // false
console.log(is_not_fizzbuzz(7)); // true

// Test error cases dengan try-catch
try {
  console.log(is_not_fizzbuzz(null)); // Lempar TypeError
} catch (e) {
  console.log("Error:", e.message);
}

try {
  console.log(is_not_fizzbuzz(NaN)); // Lempar TypeError
} catch (e) {
  console.log("Error:", e.message);
}

try {
  console.log(is_not_fizzbuzz(Infinity)); // Lempar TypeError
} catch (e) {
  console.log("Error:", e.message);
}