//* ======================================================
//*                    OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik

function Book(a, b, c) {
    this.yazar = a;
    this.title = b;

    this.year = c;
    this.özetFunction = function () {
        return ` ${this.title} kitabını ${this.yazar} ${this.year} yılında yazmıştır`;
    };
}

const book1 = new Book("dostyevski", "karamazov kardeşler", 1980);
const book2 = new Book("Atatürk", "nutuk", 1925);

console.log(book1);
console.log(book1.title);
console.log(book2);

console.log(book2.özetFunction());

Book.prototype.tür = "roman"

console.log(book1.tür);



book2.__proto__.tür = "hikaye"
console.log(book2);
console.log(book2.tür);

//!OKUL YÖNETİMİ HATIRLA
//?İNHERİTANCE

function Dergi(yazar, title, year, d) {
    Book.call(this, yazar, title, year)
    this.mounth = d
}

Dergi.prototype = Object.create(Book.prototype)
const dergi1 = new Dergi("Resat Nuri", "yaprak dokumu", 1900, "eylül");

console.log(dergi1);
console.log(dergi1.tür);