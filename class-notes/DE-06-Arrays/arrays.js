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

//*reverse() dizinin tamamini ters cevirir

meyveler.reverse()

console.log(meyveler);

//dizinin 5. elemenini ters cevirin
console.log(meyveler[5].split("").reverse());
console.log(meyveler);



//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.


const number = [3, 5, 1, 35, 10, 22, 25, 77, 231]

number.sort()
console.log(number);

//*sadece sort dersek 22 den sonra 231 i sonra 3 ü getirir. bu yüzden alttaki gibi yazarız= bütün sayıları karşılaştır, küçük olanı önce yazdır
number.sort((a, b) => a - b)
console.log(number);

meyveler.sort()
console.log(meyveler);
// harfleri ascii ye göre siralar kücük harfler sonra gelir


//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

//? ["Armut", "Ayva", "Kavun", "Kivi", "Muz", "karpuz", "Cilek"]

meyveler.splice(2, 0, "Mango")
console.log(meyveler);

meyveler.splice(3, 1, "Ananas")
//meyveler[3]="Ananas"
console.log(meyveler);




// ?=========================================================
// ?                DİZİ ERISIM  METODLARi (MUTATOR)

//? (diziyi degistirmezler)
// ?=========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5]

//*includes()
//*************** */

console.log(sayilar1.includes(5)); //true
console.log(sayilar1.includes("5"));//false


//*indexOf(), lastIndexOf("")
//*************** */

console.log(sayilar1.indexOf("2"));// 3
console.log(sayilar1.indexOf(5, 2)); // 7
// yukarda 2 den sonraki 5 in indexini ver 

//* kullanicidan sayi isteyin girilen sayinin hem string hem number hali sayilar dizisinde var mi arastir varsa index ini dondür


const sayilar2 = [3, 5, 2, "2", "uc", 2, "bes", 5]

const sayiString = prompt("lütfen bir sayi giriniz")

const sayiNumber = Number(sayiString)

if (sayilar2.includes(sayiString)) {
    console.log(sayilar2.indexOf(sayiString));
}
if (sayilar2.includes(sayiNumber)) {
    console.log(sayilar2.indexOf(sayiNumber));
}

//* yukardaki if lerin ikisininde false olmasi durumunda alttaki kod yazilabilir

if (sayilar2.includes(sayiString) == false && sayilar2.includes(sayiNumber) == false) {
    console.log("aradiginiz sayi dizi de yok");

}
//*yukarıdaki if lerin ikisinin de false olması durumunda alttaki kod yazılabilir
if (sayilar2.includes(sayiString) == false && sayilar2.includes(sayiNumber) == false) { console.log("aradığınız sayı dizide yok"); }