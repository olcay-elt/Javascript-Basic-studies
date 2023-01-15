// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

const katMi = (sayi) => sayi % 3 == 0 ? "3 ün katı" : "3 ün katı değilsin"

// const katMi = (sayi) => {
// return(sayi % 3 == 0 ? "3 ün katı" : "3 ün katı değilsin")};

console.log(katMi(13))

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");

}

menu();

//* Ornek3: silindirin hacmini hesaplayan fonksiyonu yazınız**********.

const hacimHesapla = (r, h) => Math.PI * r * r * h

console.log(hacimHesapla(3, 5).toFixed(3))
// toFixed(a) virgülden sonra a kadar rakam görmemize yarar

//*Ornek4: yas hesapla********************************

const yasHesapla = (tarih) => new Date().getFullYear() - tarih

console.log(yasHesapla(1979))

//* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34 ...


const fibo = (n) => {

    let fibSol = 1;
    let fibSag = 1;

    let yeniFib = 0;
    let toplam = 2;
    for (let i = 2; i < n; i++) {
        //2 den başlattık çünkü 7. terimi bulmak için 5 tur gerekli
        yeniFib = fibSol + fibSag;
        fibSol = fibSag;
        fibSag = yeniFib;
        toplam += yeniFib
    }
    console.log(toplam);
    return yeniFib

}


console.log(fibo(7))