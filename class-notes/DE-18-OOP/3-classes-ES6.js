//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.


class Book {
    constructor(a, b, c) {
        this.yazar = a;
        this.title = b;

        this.year = c;
        this.özetFunction = function () {
            return ` ${this.title} kitabını ${this.yazar} ${this.year} yılında yazmıştır`;
        };
    }

    yilHesapla() {
        return new Date().getFullYear() - this.year
    }

}

const book1 = new Book("M.Akif Ersoy", "safahat", 1910)

console.log(book1)
console.log(book1.yilHesapla);