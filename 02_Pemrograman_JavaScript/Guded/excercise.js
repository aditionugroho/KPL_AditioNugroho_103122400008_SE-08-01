/**
*Tuiskan array berisi 3 elemen tentang minuman kesan, dan  simpen 
kevariabel list minuman.
    *GANTI Dua elemen pertama dengan minuman kesukaan lain dengan cara index dan penugn.
    *Tambah satu MINUMAN di depan array.*/

    let listminuman = ["kopi", "teh", "susu"];
    // Perbaiki nama variabel yang benar ketika mengganti elemen
    listminuman[0] = "jus";
    listminuman[1] = "air mineral";
    // Tambah satu minuman di depan
    listminuman.unshift("es teh");
    console.log("Setelah tambah di depan array:", listminuman);
    