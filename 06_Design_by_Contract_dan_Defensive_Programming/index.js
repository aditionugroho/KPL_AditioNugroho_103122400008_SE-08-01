function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Salah tipe data Harus bilangana bulat");
    }
     if (b == 0) {
        throw  new TypeError("Tidak boleh dibagi dengan nol");

     }
     const hasil = a / b;
     // pascakondisi
     if (hasil * b == a) {
        return hasil;
     }
      return hasil;
    }
try {
    console.log(divide(10, 2));
}
catch (error) {
    console.log(error.message);
}
