// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//! prompt a girilen değer default olarak string olarak algılanır, onu sayıya çevirmek istersek önüne Number ya da + yazarız

const s1 = Number(prompt("if-else için 1.sayıyı giriniz"));
const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
const s2 = +prompt("if-else için 2.sayıyı giriniz");
let sonuc = 0;
if (islem == "+") {
    sonuc = s1 + s2;
} else if (islem == "-") {
    sonuc = s1 - s2;
} else if (islem == "*") {
    sonuc = s1 * s2;
} else if (islem == "/") {

    if (!s2) {
        alert("yanlış sayı girdiniz");
    } else sonuc = s1 / s2;
    // s2==0 da yazabilirdik ama bu sadece 0 ı kontrol eder. ama biz !s2 diyerek her olumsuz s2 durumunu kastettik
} else {
    alert("Yanlış işlem seçtiniz");
}
console.log(sonuc);

//******* */ örnek***********

const yas = 20
const cinsiyet = "erkek"
const saglik = false

if (yas >= 18 && cinsiyet == "erkek" && saglik) {
    console.log("askerlik yapabilir");
} else {
    console.log("askerlikten muaf");
}

//************TERNARY***********

const borc = +prompt("borcunuzu giriniz")
const maas = +prompt("10 aylık maasınızı  giriniz")

const kredi = maas - borc >= 5000 ? "🥳 kredi alabilir" : " 😞 kredi alamaz"
console.log(kredi);

console.log("-------------------------------------");
console.log("==SWITCH-CASE== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");


const sayi1 = Number(prompt("switch-case için 1.sayıyı giriniz"));
const islemm = prompt("+,-,*,/ işlemlerinden birini giriniz");
const sayi2 = +prompt("switch-case için 2.sayıyı giriniz");
let sonuc1 = 0;

switch (islemm) {
    case "+":
        sonuc1 = sayi1 + sayi2;
        break;
    case "-":
        sonuc1 = sayi1 - sayi2;
        break;
    case "*":
        sonuc1 = sayi1 * sayi2;
        break;
    case "/":
        if (!sayi2) alert("yanlış girdin")
        else
            sonuc1 = sayi1 / sayi2;
        break;

    default:
        alert("yanlış işlem girdiniz")
        break;
}
console.log(` ${sayi1} ${islemm} ${sayi2} = ${sonuc1}`);