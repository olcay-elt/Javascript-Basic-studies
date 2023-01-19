//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

//*----------ORNEK-----------

const prices = [100, 250, 90, 50];

prices.forEach((eleman) => {
    console.log(eleman);
});
console.log(prices);

let toplam = 0;
let gitti = prices.forEach((a) => console.log((toplam += a)));
console.log(gitti);
console.log(prices);

//***************** ORNEK******* */
//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.
const prices1 = [100, 250, 90, 50];

let toplam1 = 0;
prices1.forEach((p, i, dizi) => {
    toplam1 += p;

    console.log(`${i + 1}. toplam ${toplam1} `);
    dizi[i] = p + 100;
    //! diziyi kalıcı değiştirmek için üstteki işlemi yaptık, 3. parametre ile diziyi almasaydık bile, globalde tanımladığımız için, forEach in içinden diziye ulaşabilirdik
});
console.log(prices1);


//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp,  bunu döndürebilir, tüketmez foreach gibi.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = ["adem", "hakan", "olcay", "ipek", "faruk", "haluk", "mehmet", "sefa"]

const yeniDizi = names.map((isim) => isim.toUpperCase())
console.log(names);
console.log(yeniDizi);


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz

const euro = 20.20
const dolar = 18.50
const tlPrices = [100, 150, 100, 50, 80]

const euroPrice = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))
const dolarPrice = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))

console.log(euroPrice);
console.log(dolarPrice);

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 250, 90, 50];


fiyatlar.map((p, i, array) => {

    if (p < 250) {
        array[i] = p * 1.5
    } else array[i] = p * 1.2
})
console.log(fiyatlar);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim.
const prices2 = [100, 250, 90, 50];

const yeni = prices.filter((p) => p < 100)

console.log(yeni);
// önceki sorunun filter lı çözümü
const yeni1 = prices.filter((p) => p < 250).map((p) => p * 1.5)
const yeni2 = prices.filter((p) => p >= 250).map((p) => p * 1.2);
console.log(yeni1, yeni2);

//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

const tlFiyatlar = [100, 200, 300, 40, 70]

const yeniFiyat = tlFiyatlar.map((p) => {
    if (p > 100)
        p = p * 1.10
    else p = p * 1.15
    return p
})
console.log(yeniFiyat);
//* 2.yol
const ilk = tlFiyatlar.filter((a) => a > 100).map((a) => a * 1.10)
const son = tlFiyatlar.filter((a) => a <= 100).map((a) => a * 1.15)

console.log(ilk.concat(son));

//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin ilk 3 harfini yazdıran bir fonksiyon yazınız.
const people = [
    "Baser",
    "Berivan",
    "Mehmet",
    "Mustafa",
    "Mali",
    "Halil",
    "Fatih",
    "Hasret",
    "Fatma",
];

const harfBul = (harf) => {
    people
        .filter((kisi) => kisi.startsWith(harf.toUpperCase()))
        .map((a) => a.slice(0, 3))
        .forEach((a) => console.log(a));
}
harfBul("B")
harfBul("M")
harfBul("f")
//* ======================================================
//*                      REDUCE
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

const salaries = [3000, 5000, 4000, 6000, 7500]

console.log(salaries.reduce((toplam, diziEleman) => toplam + diziEleman, 0))
//! reduce sonuç olarak tek bir eleman döndürdüğü için forEach ile yazdıramayız, çünkü forEach dizilerde çalışır


//*salaries in elemanlarının çarpımı
console.log(salaries.reduce((carpim, diziEleman) => carpim * diziEleman, 1))

