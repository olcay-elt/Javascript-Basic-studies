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
const katMi = (sayi) => sayi % 3 == 0 ? "3 ün kati" : "3 ün kati degilsin"

console.log(katMi(10));

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");

}

menu();

//Örnek3 silindirin hacmini hesaplayan fonksiyonu yaziniz

const hacimHesapla = (r, h) => Math.PI * r * r * h

console.log()hacimHesapla(3, 5).toFixed(2))
// toFixed(a) virgülden sonra a kadar rakam görmemize yarar

//Örnek4: yas hesapla

const yasHesapla = (tarih) => new Date().getFullYear() - tarih

console.log(yasHesapla(1979))


//Örnek5: Girilen n. terimdeki Fibonacci sayisini yazdiran fonksiyonu dongu ile kodlayiniz

const fibo = (n) => {
    let fibSol = 1;
    let fibSag = 1;

    let yeniFib = 0;
    let toplam = 2;

    for (let i = 2; i < n; i++) {
        yeniFib = fibSol + fibSag;
        fibSol = fibSag;
        fibSag = yeniFib;
        toplam += yeniFib
    }
    return yeniFib;

}

console.log(fibo(7));

