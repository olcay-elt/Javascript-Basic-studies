// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//! 1- Klasik yöntem ile tanımlanan String primitive dir (ilkel)
const str1 = "Clarusway"
const str2 = "hello"
const str3 = "all the world"
console.log(str1 + str2, typeof (str1 + str2));

//! 2- String constructor ile tanımlanan String, non-primitive dir (ilkel olmayan)

const str4 = new String("yeni bir String")
console.log(str4, typeof str4);

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
console.log(s1);
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(" ", "clarusway", " ", s1));

//!orjinal veri değişmez, assigning ,ile kalıcı değişiklik yapabiliriz

// *=========================================================
// *       toUpperCase(), toLowerCase() immutable
// *=========================================================

const myName = "Ashley Miller "
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.toLocaleUpperCase("tr"));

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz


const esitMi = (str1, str2) => str1 === str2.toLocaleUpperCase("tr") ? "esittir" : "esit değildir";

console.log(esitMi("İSMET", "ismet"));

// *=========================================================
// *       charAt() immutable
// *=========================================================

const s4 = "primitive \n veri \n tiplerinin \n property veya \n metodu olmaz"
console.log(s4);
console.log(s4.charAt(5));//t
console.log(s4.charAt(11));//" "
console.log(s4.charAt());//" "
console.log(s4.charAt(s4.length - 1));//z

// *=========================================================
// *  includes() -case sensitive (büyük küçük harfe duyarlı)
// *=========================================================
const cümle = "to be or not to be, that is The questions."

console.log(cümle.includes("TO BE"));//false
console.log(cümle.includes("to be"));//true
console.log(cümle.includes("quest"));//true
console.log(cümle.includes(" "));//true
console.log(cümle.includes("to be", 14));//false
console.log(cümle.toUpperCase().includes("TO BE"));//true

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

// *=========================================================
// *  indexOf() -lastIndexOf() -case sensitive
// *=========================================================
const cümle1 = "to be or not to be, that is The questions.";

console.log(cümle1.indexOf("be"));//3
console.log(cümle1.lastIndexOf("be"));//16
console.log(cümle1.indexOf("this"));//-1
console.log(cümle1.indexOf("TO BE"));//-1
//bulamazsa -1 cevabını döndürür
console.log(cümle1.indexOf("be", 4));//16

console.log(cümle1.indexOf("be", cümle1.indexOf("be") + 1));


// *=========================================================
// *  search()
// *=========================================================
const cümle2 = "to be or not 9 to be, that is The questions.";

console.log(cümle2.search(/[A-Z]/));//28
console.log(cümle2.search(/[a-z]/));//0
console.log(cümle2.search(/[0-9]/));//13
console.log(cümle2.search(/[.]/));//43
console.log(cümle2.indexOf("."));//43
console.log(cümle2.search(/[^a-z]/));//2=boşluğu döndürdü
console.log(cümle2.search(/[0-9A-Za-z]/));//0
// regex=regular expression /[]/


// *=========================================================
// *  startsWith(),endsWith()--case sensitive
// *=========================================================
const sarki = "Salına salına sinsice olurum sana!"

console.log(sarki.startsWith("sa"));//false
console.log(sarki.startsWith("Sa"));//true
console.log(sarki.startsWith("salına", 7));//true
console.log(sarki.endsWith("!"));//true
console.log(sarki.endsWith("salına", 13));//true (13 bitiş old için dahil değil)

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------
const veysel = "UZUN İNCE BİR YOLDAYIM GİDİYORUM GÜNDÜZ GECE"

console.log(veysel.slice(10));//BİR YOLDAYIM GİDİYORUM GÜNDÜZ GECE
console.log(veysel.slice(17, 21));//DAYI
console.log(veysel.substring(17, 21));//DAYI
console.log(veysel.slice(-10));//- ile index belirlerken sondan sayılır ve saymaya -1 den başlanır,- devam edilir
console.log(veysel.slice(-11, -6));//GÜNDÜ
console.log(veysel.slice(16, -6));//LDAYIM GİDİYORUM GÜNDÜ

//!substring metodunda - index kullanılmaz
console.log(veysel.substring(-10));
console.log(veysel.substring(veysel.length - 3));//son 3 karakteri döndürür

// *=========================================================
// *  replace(searchFor,replaceWith)-immutable
// *=========================================================

let oku = "oku Johny gibi, saf olma, saf olma, saf olma"
console.log(oku);

oku = oku.replace("saf olma", "basarılı ol")
console.log(oku);//oku Johny gibi, basarılı ol, saf olma, saf olma

console.log(oku.replace(/SAF/i, "fakir"));//oku Johny gibi, basarılı ol, fakir olma, saf olma

console.log(oku.replace(/Saf olma/gi, "zengin ol"));
//i eklemesi incase sensitive(büyük küçük harfe duyarsız)
//gi eklemesi de kastettiğim kelimeden ne kadar varsa hepsini, büyük küçük harfe duyarsız bir şekilde değiştir

//**replaceAll() --immutable */

console.log(oku);//oku Johny gibi, basarılı ol, saf olma, saf olma
console.log(oku.replaceAll("saf olma", "akıllı ol"));


//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım"

console.log(tarkan.split()); //tek elemanlı bir diziye çevirir

console.log(tarkan.split("e"));// e harflerinden ayırarak bir dizi oluşturur
console.log(tarkan.split(" "));//boşluklardan ayırarark her kelimeyi, dizinin bir elemanı yaptı

console.log(tarkan.split(""));//harflerden ayırarak bir dizi oluşturur
console.log(tarkan.split("e", 4));//e harflerinden ayırarak oluşan dizinin ilk 4 elemanını al

console.log(tarkan);


// *=========================================================
// *  trim() String in başından ve sonundan boşlukları siler
// *=========================================================

const ramazan = "    Hos geldin ya Sehr i Ramazan    "
console.log(ramazan);
console.log(ramazan.length);//36

console.log(ramazan.trim());
console.log(ramazan.trim().length);//28
