//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: diziler arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayınız
const diziler1 = [-5, 15, 22, -4, 45, 78];

const negatifler1 = [];
const pozitifler1 = [];

for (let i = 0; i < diziler1.length; i++) {
  if (diziler1[i] < 0) negatifler1.push(diziler1[i]);
  else pozitifler1.push(diziler1[i]);
}
console.log(negatifler1, pozitifler1);

//***FOR IN ********/

const diziler2 = [-5, 15, 22, -4, 45, 78];

const negatifler2 = [];
const pozitifler2 = [];

for (let index in diziler2) {
  if (diziler2[index] < 0) negatifler2.push(diziler2[index]);
  else pozitifler2.push(diziler2[index]);
  console.log(index);
}
console.log(negatifler2, pozitifler2);

//***FOR OF******** */

const diziler3 = [-5, 15, 22, -4, 45, 78];

const negatifler3 = [];
const pozitifler3 = [];

for (let eleman of diziler3) {
  if (eleman < 0) negatifler3.push(eleman);
  else pozitifler3.push(eleman);
  console.log(eleman);
}
console.log(negatifler3, pozitifler3);

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------

const hayvanlar = [
  "fil",
  "aslan",
  "deve",
  "fil",
  "kaplan",
  "fil",
  "deve",
  "aslan",
  "aslan",
  "aslan",
];

// const userHayvan = prompt("hayvan ismi giriniz");

const bulHayvan = () => {
  let sayac = 0;

  for (let i in hayvanlar) {
    if (hayvanlar[i] == userHayvan) sayac++;
  }
  // alert(sayac)
  return ` ${userHayvan} hayvanından ${sayac} adet vardır`;
};

// alert(bulHayvan());
//! global de tanımlanan değişkenleri fonksiyon içinde kullanacaksam, fonksiyona parametreyle göndermem zorunlu değildir, zaten süslü içinden globaldekilere erişebilirim, parametre ile göndereceksem de, fonksiyon içinde onlara farklı isim takabilirim yani hayvanlar dizisini gönderip a diye karşılayıp, fonksiyon içinde a ismiyle kullanabilirim

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "volvo"];

let arabalarString="";

for(let i of arabalar){
arabalarString= arabalarString + i + " "
}
console.log(arabalarString);

//? 2.yol

console.log(arabalar.join(" "));
//! for loop=> Bir dizi üzerinde iteration (gezinme) yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.