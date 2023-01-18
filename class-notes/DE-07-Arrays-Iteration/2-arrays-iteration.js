//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

//*----------ORNEK-----------

const prices = [100, 250, 90, 50]

prices.forEach((eleman) => {
    console.log(eleman)
})
console.log(prices);

let toplam = 0;
let gitti = prices.forEach((a) => console.log(toplam += a))
console.log(gitti);
console.log(prices);


//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.
// const prices=[100, 250, 90, 50];

let toplam1 = 0;
prices.forEach((p, i, price) => {

})