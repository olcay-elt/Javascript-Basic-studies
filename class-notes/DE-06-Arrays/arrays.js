// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//!  1. Yöntem (Array Literal)-tercih edilen yöntem

const yaslar = [30, 54, 22, 18, 5]
console.log(yaslar.length);
console.log(yaslar);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[12,24,5,6] 
yaslar[0] = 123;
console.log(yaslar);

//! 2.yöntem (Array Constructor)

const cars = new Array("BMW", "Mercedes", "AUDI")
console.log(cars);

console.log("******************************");
const dogum = 1979

const isimler = [
    "Sefa",
    "Olcay",
    "Adem",
    "Hakan",
    2023 - dogum,
    "İpek",
    true,
    yaslar

]

//**dizinin elemanlarına veri yazma (indisleme) */
isimler[6] = false
isimler[8] = "merhaba"

console.log(isimler);
console.log(isimler[1]);//Olcay
console.log(isimler[7]);//[123, 54, 22, 18, 5]
console.log(isimler[7][2]);//22

console.log(isimler[isimler.length - 2][yaslar.length - 3]); //22

isimler[7][2]--
console.log(isimler[7][2]);//kalıcı değişiklik

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsakta sildiği elemana döndürür
const meyveler = ["Elma", "Armut", "Muz", "Kivi", "Erik"]

// meyveler.pop()
console.log("sildiğim meyve:", meyveler.pop(), "dizinin yeni hali:", meyveler);

//*shift() dizinin ilk elemanını siler, yazdırırsakta sildiği elemana döndürür
console.log(meyveler.shift(), meyveler);

//********************************** */

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek", "Kavun"), meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"), meyveler);
console.log(meyveler);