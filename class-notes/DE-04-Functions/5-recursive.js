// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//sayma sayılarındaki ilk 6 terimin toplamını bulunuz

let toplam = 0;

for (let i = 1; i <= 6; i++) {
    toplam += i;
}
console.log(toplam);

//aynı soruyu recursive fonksiyonla çözelim

const toplamlar = (n) => {

    if (n < 1) return n;

    else return toplamlar(n - 1) + n;
}
console.log(toplamlar(6));


//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki ilk n. terimi  bulma fonksiyonu

const fibo = (n) => {

    if (n < 2)

        return n

    else
        return fibo(n - 1) + fibo(n - 2)


}

console.log(fibo(8));


//!Soru-1.Ücgenin Alani*****

const area = (t, h) => (t * h) / 2

console.log(area(6, 5).toFixed(2))




//!Soru-2:  a) KareAl ******

const sayi1 = +prompt("Bir sayi giriniz")

const kare = (sayi) => sayi * sayi

console.log(kare(sayi1))




//!Soru-2:  b) KüpAl ******

const sayi2 = +prompt("Bir sayi giriniz")

const küp = (sayi2) => sayi2 * sayi2 * sayi2

console.log(küp(sayi2))





//!Soru-2:  c) ÜsAl ******

const sayi3 = +prompt("Bir sayi giriniz")

const usAl = (sayi3) => Math.pow(sayi3)

console.log(usAl(sayi3))