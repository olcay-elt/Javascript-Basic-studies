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

const esitMi = (str1, str2) => str1 === str2.toLocaleUpperCase("tr") ? "esittir" : "esit degildir";

console.log(esitMi("ISMET", "ismet"));

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz





// *=========================================================
// *            charAt() immutable
// *=========================================================

const s4 = "primitive \n veri tiplerinin \n property veya metodu olmaz"

console.log(s4.charAt(5));
console.log(s4.charAt(8));
console.log(s4.charAt(s4.length - 1)); //! sonuncu karakter





// *=========================================================
// *           includes() -case sensitive (kücük-büyük harf duyarli )
// *=========================================================

const cümle = "to be or not to be, that is The questions."

console.log(cümle.includes("to be"));
console.log(cümle.includes("TO BE"));

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.





// *=========================================================
// *          indexOf()
// *=========================================================

const cümle1 = "to be or not to be, that is The questions."
console.log(cümle1.indexOf("be")); //3
console.log(cümle1.lastIndexOf("be")); //16
console.log(cümle1.indexOf("this"));  //-1 yoktur





// *=========================================================
// *          search()
// *=========================================================

const cümle2 = "to be or not 9 to be, that is The questions.";

console.log(cümle2.search(/[A-Z]/));//28
console.log(cümle2.search(/[a-z]/));//0
console.log(cümle2.search(/[0-9]/));//13
console.log(cümle2.search(/[.]/));//43
console.log(cümle2.indexOf("."));//43
console.log(cümle2.search(/[^a-z]/));//2 boslugu döndürdü
console.log(cümle2.search(/[0-9A-Za-z]/));//0
// regex=regular expression /[]/




// *=========================================================
// *          startsWith(), endWith()  ---case sensitive
// *=========================================================

const sarki = "Salina salina sinsice olurum sana!"

console.log(sarki.startsWith("sa")); //false
console.log(sarki.startsWith("Sa")); //True 
console.log(sarki.startsWith("salina", 7)); //True
console.log(sarki.endWith("salina", 7)); //True




//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel = "UZUN INCE BIR YOLDAYIM GIDIYORUM GÜNDÜZ GECE"
console.log(veysel.slice(10));
console.log(veysel.slice(10, 21));//UZUN
