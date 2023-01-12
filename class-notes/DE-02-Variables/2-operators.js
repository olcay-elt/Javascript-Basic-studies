// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================


const kola = 18;
const cips = 15;
const ekmek = 6;

let toplamFiyat = kola + cips + ekmek;
console.log(toplamFiyat);

//! 1 arttır
toplamFiyat = toplamFiyat + 1
toplamFiyat++
console.log(toplamFiyat);

//! 10 arttır
// toplamFiyat=toplamFiyat+10
toplamFiyat += 10
console.log(toplamFiyat);


//?  + operatoru string lerde concatination yapar

const isim = "Olcay"
const soyisim = "Halk"

console.log(isim + " " + soyisim);

//! bir sayı bir string toplanırsa yine concatination yapar

const s1 = 5;
const s2 = "7"

console.log(s1 + s2);
//*çıkarma işlemini doğru algılar
console.log(s1 - s2);

const s3 = "iki"

console.log(s3 - s1); //NaN not a number



const dogumTarihi = 1979;
const isim1 = "Ashley"

console.log(isim1 + " " + (2023 - dogumTarihi) + " " + "yasındadır");

//! template literals (backticks)

console.log(`${isim1} ${2023 - dogumTarihi}  yasındadır`);

//*ARTTIRMA - AZALTMA

let a = 5;
console.log("ilk", a++);//5
console.log(a);//6

let b = a++
console.log("b", b);//6
console.log("a son", a);//7

let c = 10;
console.log("c=", c, ++c);//11

let d = ++c
console.log("d=", d);
console.log("c=", c);

let e = 33;

console.log(--e);//32
console.log(e--, e);//31

//*e yi 5 arttır
e += 5
// e=e+5
console.log(e);

//*e nin 5 katını al

// e=e*5

e *= 5
console.log(e);

//*********CARPMA VE ÜS ALMA*************


const pi = 3.14;
const r = 5;

const alan = pi * r ** 2
const cevre = Math.ceil(2 * pi * r)

console.log(alan, " ", cevre);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//************  MOD ALMA**********/

const number = 456;

const birler = number % 10
const onlar = Math.trunc(number / 10) % 10
const yuzler = Math.floor(number / 100)

console.log(birler, onlar, yuzler);

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const nummer = 4;

console.log(nummer == 4);//true
console.log(nummer == "4");//true
console.log(nummer === "4");//false


console.log(nummer != 4); //false

console.log(nummer !== "4"); //true

console.log(nummer > 4);//false
console.log(nummer >= 4); //true


// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const v1 = false || 0 || 12.6 || true || false || null;
console.log(v1); // ilk buldugu güzelligi döndürür.

const v2 = false || 0 || null || undefined || NaN;
console.log(v2); //sona kadar true arar bulamazsa son false degeri döndürür.


// * =======================================================
// *                 TIP DÖNÜSÜMLERI
// * =======================================================

const para = Number("1000") + Number("900")
console.log(para);