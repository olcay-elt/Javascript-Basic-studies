//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const yas = 30;
console.log(yas);

// yas=27
//!const değeri değiştirilemez

// const pi;
//! const keyword üne başlangıç ataması yapmak zorunludur

const kelime = "osman";
console.log(kelime, typeof kelime);

const bakiye = 1.1;

console.log(typeof bakiye);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil;

dil = "javascript";

console.log(dil);

dil = null;
console.log(dil, typeof dil);

let sayi = 5;

console.log(sayi + 4);

let sayi1 = "5";

console.log(sayi1 + 4);
//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar

isim = "ipek";

console.log(typeof isim);

//! değişken tanımlama keyword u kullanmasak bile JS derleyicisi otomatik  onu "var" olarak tanımlar

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi2 = 5;
console.log(sayi2);
sayi2 = 10;
console.log(sayi2);

console.log("**************************");

var ilk = "GLOBAL";

console.log(ilk);

{
    console.log(ilk);
    ilk = "degistim";
    console.log(ilk);
    var son = 6;
}

console.log(ilk); //degistim
console.log(son); //6
//!var keyword u olunca blok içerisinde ve dışarısında erişebiliriz (global-scoped)

console.log("******************************");
let birinci = "osman";

console.log(birinci);

{
    console.log(birinci);
    birinci = 13;

    let ikinci = "ayse";
    console.log(ikinci);
}
console.log(birinci); //13
//! block ta tanımlanan elemana erişemeyiz
// console.log(ikinci);

console.log("**************************");

//! aynı işlemleri const ile yapalım

const first = "Mehmet";
console.log(first);

{
    console.log(first);
    // first="osman"
    const second = "ali";
}

console.log(first);
// console.log(second);

//! const ve let için süslü içinde olan süslü içinde kalır 


