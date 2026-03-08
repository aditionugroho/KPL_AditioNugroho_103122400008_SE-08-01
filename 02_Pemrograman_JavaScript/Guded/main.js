let listMinuman = ["Teh Manis", "Kopi Hitam", "Jus Jeruk"];

console.log("Array awal:", listMinuman);

listMinuman[0] = "Matcha Latte";
listMinuman[1] = "Thai Tea";

console.log("Setelah ganti 2 elemen pertama:", listMinuman);

listMinuman.unshift("Air Mineral");

console.log("Setelah tambah di depan:", listMinuman);


/**Tuliskan fungsi yang menerima n bilangan dan mengembalikan nilai penjumlahan dari 1 hingga n*/

function sumOfNumbers(n) {
    let result = 0;
    for (let i = 1; i <= n; i = i + 1) {
        result = result + i;
    }
    return result;
}
let n = 5;
console.log("Hasil penjumlahan 1 sampai 5:", sumOfNumbers(5));
console.log("Hasil penjumlahan 1 sampai 10:", sumOfNumbers(10));
