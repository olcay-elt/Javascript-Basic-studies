// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//!  1. Yöntem (Array Literal)-tercih edilen yöntem

const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar.length);
console.log(yaslar);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[12,24,5,6]
yaslar[0] = 123;
console.log(yaslar);

//! 2.yöntem (Array Constructor)

const cars = new Array("BMW", "Mercedes", "AUDI");
console.log(cars);

console.log("******************************");
const dogum = 1979;

const isimler = [
    "Sefa",
    "Olcay",
    "Adem",
    "Hakan",
    2023 - dogum,
    "İpek",
    true,
    yaslar,
];

//**dizinin elemanlarına veri yazma (indisleme) */
isimler[6] = false;
isimler[8] = "merhaba";

console.log(isimler);
console.log(isimler[1]); //Olcay
console.log(isimler[7]); //[123, 54, 22, 18, 5]
console.log(isimler[7][2]); //22

console.log(isimler[isimler.length - 2][yaslar.length - 3]); //22

isimler[7][2]--;
console.log(isimler[7][2]); //kalıcı değişiklik

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsakta sildiği elemana döndürür
const meyveler = ["Elma", "Armut", "Muz", "Kivi", "Erik"];

// meyveler.pop()
console.log("sildiğim meyve:", meyveler.pop(), "dizinin yeni hali:", meyveler);

//*shift() dizinin ilk elemanını siler, yazdırırsakta sildiği elemana döndürür
console.log(meyveler.shift(), meyveler);

//********************************** */

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek", "Kavun", "karpuz"), meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"), meyveler);
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse();
console.log(meyveler);

//?dizinin 5. elemanını tersten yazdırın
console.log(meyveler[5].split("").reverse());
console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

const number = [3, 5, 1, 35, 10, 22, 25, 77, 231];

number.sort();
console.log(number);

//*sadece sort dersek 22 den sonra 231 i sonra 3 ü getirir. bu yüzden alttaki gibi yazarız= bütün sayıları karşılaştır, küçük olanı önce yazdır
number.sort((a, b) => a - b);
console.log(number);

meyveler.sort();

console.log(meyveler);
// ["Armut", "Ayva", "Kavun", "Kivi", "Muz", "karpuz", "Çilek"]; ascıı numaralarına göre sıralar, ascıı de küçük harfler büyük harflerden sonra gelir

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

//? ["Armut", "Ayva", "Kavun", "Kivi", "Muz", "karpuz", "Çilek"];

meyveler.splice(2, 0, "Mango");
console.log(meyveler);

meyveler.splice(3, 1, "Ananas");
// meyveler[3]="Ananas"
console.log(meyveler);

// ?=========================================================
// ?                DİZİ ERİŞİM METODLARI (diziyi değiştirmezler)
// ?=========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

//*includes()
//********************* */

console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//*indexOf(), lastIndexOf()
//************************ */

console.log(sayilar1.indexOf("2")); //3
console.log(sayilar1.indexOf(5, 2)); //7

console.log(sayilar1.lastIndexOf(2)); //5

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür

// const sayilar2 = [3, 5, 2, "2", "uc", 2, "bes", 5];

// const sayiString = prompt("lütfen bir sayı giriniz"); //"2"

// const sayiNumber = Number(sayiString); //2

// let varMi=false;

// if (sayilar2.includes(sayiString)) {
//   console.log(sayilar2.indexOf(sayiString));
//   varMi=true
// }
// if (sayilar2.includes(sayiNumber)) {
//   console.log(sayilar2.indexOf(sayiNumber));
//   varMi=true
// }
// if(varMi==false) console.log("aradığınız sayı dizide yok");
// if(!varMi) şeklinde de yazılır

//*yukarıdaki if lerin ikisinin de false olması durumunda alttaki kod yazılabilir
// if(sayilar2.includes(sayiString)==false && sayilar2.includes(sayiNumber)==false){console.log("aradığınız sayı dizide yok");}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

console.log(sayilar1.join("A "));//3A 5A 2A 2A ucA 2A besA 5
console.log(sayilar1.join(","));

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());


//*dizinin 2 indexli elemanını tersten bir string olarak yazdır
// ["Armut", "Ayva", "Mango", "Ananas", "Kivi", "Muz", "karpuz", "Çilek"];

console.log(meyveler[2].split("").reverse().join(""));//ognaM


//*slice()
//************** */

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "volvo"]

console.log(arabalar.slice(3));// 3. index liyi ve sonrasını alır

console.log(arabalar.slice(1, 3));//1. ve 2. elemanı yaz

//!diziyi kopyalamak için
const copyArabalar = arabalar.slice()


//*concat()//************ */

const yazilar = ["Olcay", "Sefa", "Mehmet", "Hakan", "Adem"]
const rakamlar = [3, 5, 7, 9, 11, 34]
const birlesik = yazilar.concat(rakamlar, true, "e", "f", ["a", "b", "c"], [["x", "y", "z"]])

console.log(birlesik);


//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas = [18, 23, 35, 44, 57, 89, 15];

console.log(
    yas.every((a) => a >= 18)
        ? "dizideki herkesin yaşı 18 ve daha büyüktür"
        : "dizide 18 yas altı eleman var"
);

//sadece 15 yüzünden false döndürdü

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.
console.log(yas.some((a) => a > 70)); //true
console.log(yas.some((a) => a > 90)); //false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

console.log(yas.find((item) => item > 30));
console.log(yas.findLast((item) => item > 30));

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

console.log(yas.findIndex((i) => i > 30));
