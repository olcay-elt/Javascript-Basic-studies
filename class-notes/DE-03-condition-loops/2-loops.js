// // * =======================================================
// // *                  DÖNGÜLER
// // * =======================================================

// //***************FOR***************** */

// for(let i=1; i<=10; i++){
// console.log("MERHABA", i);

// }
// console.log("bitti");

// //* 1 den N e kadar olan tamsayıların toplamını bulan kodu yazınız

// // const n = +prompt("n için kullanılacak bir sayı giriniz ")
// // let sayi1=0;

// // for(let i =1; i <= n; i++){
// // sayi1+=i
// // console.log(sayi1);

// // }
// // console.log("en son sonuc", sayi1);

// //? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi2=+prompt("asallık kontrolü için bir sayı giriniz")
// let asal="asalsın"

// for(let i=2; i<sayi2 ; i++){

//  if(sayi2 % i==0)
// {asal ="degilsin" }

// }
// console.log(asal);

// // //? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// // //? for dongusu ile yaziniz..

// // Math.random() bize 0-1 arasında rastgele sayı üretir

// const num = Number(prompt("Enter a number"));

// for (let j = 1; j <= num; j++) {
//   const randomNum = Math.round(Math.random() * 100);
//   console.log(`${j}. random number: ${randomNum}`);
// }

// //************************ WHİLE ****************************

// //*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number = +prompt("while için 1-100 arasında sayı giriniz")

// while (number<1 || number>100) {

//    console.error("sayı 1-100 arasında olmalı")

//   number = +prompt("while için 1-100 arasında tekrar sayı giriniz");

// }
// console.log("girdiğiniz sayı 1-100 arasındadır");

// //! while daki şart true olduğu sürece altındaki süslü işler, false olduğu an süslüden çıkar diğer kodlara geçer

// //****************** */ DO-WHİLE
//  let not;
// do {
//  not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);

// console.log("Girdiğiniz not 0-100 arasındadır");
// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.
// let tekrar;
// do{
// let vize =+prompt("vize notunuzu giriniz")
// let final =+prompt("final notunuzu giriniz")
// let gecmeNotu=(vize*0.4)+(final*0.6)
// console.log(gecmeNotu);
// tekrar = prompt("başkası için hesaplama yapmak istiyorsanız 'evet' yazınız")
// }while(tekrar.toUpperCase()=="EVET" )

// console.log("güle güle");

//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yaptıran bir programı döngü kullanarak yazınız.
let sayi1;
do {
    sayi1 = prompt("lütfen bir sayı giriniz");
} while (sayi1 != "q");

console.log("sayı girişi bitti");