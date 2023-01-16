// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//!Klasik yöntem ile tanimlanan String primitive dir
(ilkel)

const str4 = new String("yeni bir string")
console.log(str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods


// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1 = "hello"
const s2 = "world"
console.log(s1.concat(s2))
const s3 = s1.concat(s2)
console.log(s3)


// *=========================================================
// *             toUpperCase(), toLowerCase(), immutable
// *=========================================================