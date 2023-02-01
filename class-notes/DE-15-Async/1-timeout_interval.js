//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//****************************************** */
//!blocking-code
// const bekle = (ms) => {
//   const start = new Date().getTime();

//   while (new Date().getTime() < start + ms) {}
// };
// console.log("merhaba");
// console.time("timer1") //kronometreyi aç
// bekle(3000);
// console.timeEnd("timer1")//kronometreyi durdur

// console.log("naber");

//*Asenkron Programlama (setTimeOut)=1 seferlik
//****************************************** */

// setTimeout(()=>{
//   //!non-blocking-code, macro-task kuyruğuna girer
//   console.log("selamun aleyküm");
// },1000)

// console.log("aleyküm selam");

// setTimeout(() => {
//   //!non-blocking-code, macro-task kuyruğuna girer
//   console.log("naber nasılsın");
// }, 2000);
//!Aleyküm Selam-Selamun Aleyküm- Naber napıyorsun çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("counter başladı");
let counter = 0;

const interval1 = setInterval(() => {
    console.log(++counter);

    if (counter === 5) {
        clearInterval(interval1);
    }
}, 1000);
console.log("counter bitti");

//?callback hell

setTimeout(() => {
    console.log("hey naber");
    setTimeout(() => {
        console.log("iyidir senden");
        setTimeout(() => {
            console.log("bize gelsene");
        }, 1000);
    }, 1000);
}, 1000);
