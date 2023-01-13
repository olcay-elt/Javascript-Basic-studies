// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//önce fonksiyon tanimlanir

const tekCift = function (sayi) {

    return sayi % 2 == 1 ? "Tektir" : "Cifttir"
}

console.log(tekCift(5))
console.log(tekCift(10))

// Örnek2

let buyukBul = function (a, b, c) {
    let enBuyuk;
    if (a > b && a > c)
        enBuyuk = a
    else if (b > a && b > c) {
        enBuyuk = b
    }
    else (c > a && c > b)
    enBuyuk = c

    return enBuyuk
};
console.log(buyukBul(7, 5, 10))


// Örnek3

const usAl = function (s1, s2) {
    return s1 ** s2
};

const alanBul = function (s1, s2) {
    return s1 * s2
};

const cevreBul = function (s1, s2) {
    return (s1 + s2) * 2;
};

const hesapla = function (s1, s2, secim) {

    if (secim == "alan")
        sonuc = alanBul(s1, s2);

    else if (secim == "cevre")
        sonuc = cevreBul(s1, s2);

    else (secim == "cevre")
    sonuc = usAl(s1, s2);

    return sonuc;
};

console.log(hesapla(2, 3, "alan"))
console.log(hesapla(2, 3, "cevre"))
console.log(hesapla(2, 3, "us"))


