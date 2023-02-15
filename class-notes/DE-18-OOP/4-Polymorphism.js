//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki işlev tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve işleve her çağrı yapıldığında, son tanımlanan işlev yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {

    constructor(a, b, c) {
        this.author = a;
        this.title = b;
        this.year = c;
    }
    özetFunction() {
        return ` ${this.title} i ${this.year} yılında ${this.author} yazmıştır`;
    };
}

//!OVERRİDİNG
class Dergi extends Book {
    constructor(author, title, year, d) {
        super(author, title, year);

        this.mounth = d;
    }
    //!overriding yapacağımız fonksiyonu yazalım

    özetFunction() {
        return ` ${this.title} çok güzel bir yazıdır`;
    }
}

const dergi1 = new Dergi("Einstein", "Stientific Essays", 1900, "september");

console.log(dergi1.özetFunction());
console.log(dergi1);

//!OVERLOADİNG
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 

function gel(arg1) {
    console.log(arg1)
}
function gel(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
gel("naber")//!naber undefined undefined
gel("naber", "nasılsın", "iyimisin")//!naber nasılsın iyimisin

// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar.
// Bu durumda, gel(arg1) öğesinin üzerine gel(arg1,arg2) tarafından yazılmıştır, ancak
// işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, “tanımsız” olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/
