// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//*Fonksiyonun tanımlanması

function yazdir() {
    console.log("e daha daha nasılsınız");

}

//* call veya invoke
yazdir()

//*Örnek2: (parametreli fonksiyon)***********************************************************/

function adYazdir(ad, ikinciAd, soyad) {

    console.log("benim adım", ad, ikinciAd, soyad, "dır");
}

adYazdir("İpek", "Ashley", "MILLER")
adYazdir("Sefa", "Hakan", "KARA")

//*Örnek3: (parametreli, dönüş değerli (return lü) fonksiyon)***********************************/

function yasHesapla(ad, dogumTarihi) {

    const yas = 2023 - dogumTarihi
    console.log(`ben ${ad} ım ve ${yas} yasındayım`);
    return yas

}
const olcay = yasHesapla("Olcay", 1990);

const adem = yasHesapla("Adem", 1980)
const ipek = yasHesapla("İpek", 1979)

console.log((olcay + adem + ipek) / 3);


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

//tek sayı çift sayı kontrolü

console.log(tekCiftSayi(5));
console.log(tekCiftSayi(10));



function tekCiftSayi(x) {
    return x % 2 == 0 ? "çifttir" : "tektir";

}


