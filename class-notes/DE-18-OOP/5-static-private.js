//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
    //!Private degisken tanimlamasi
    #id;

    //! static property tanimlamasi
    static counter = 0;

    constructor(title, author, year) {
        this.author = author;
        this.title = title;
        this.year = year;

        //? Private property
        this.#id = 44;
        this.getTitle = function () {
            return this.title;
        };

        //* static degiskenin degerini degistirdik
        Book.counter++; //! ClasName.propertyName
    }

    //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
    //? Bu tip metotlara getter metot denilir.
    //! getter metotlari class icerisinde tanimlanmalidir.
    getId() {
        return this.#id;
    }

    //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
    //? Bu tip metotlara setter metot denilir.
    //! setter metotlar class icerisinde tanimlanmalidir.
    setId(id) {
        this.#id = id;
    }


}

const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);
console.log(book1);//author: 'Poelho Coelgo', title: 'Simyaci', year: 1988,

//? Private bir degiskenin degeri class disindan dogrudan okunamaz.
// console.log(book1.#id);

//? Private bir degiskenin degeri class disindan dogrudan degistirilemez
// book1.#id = "11111";

//! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:42:18)
//? Private degiskeni okuma
console.log(book1.getId());

//? Private degiskene deger atama
book1.setId("00000");
console.log(book1.getId());



const book2 = new Book("ABC", "Ali Veli", 1988);
const book3 = new Book("XYZ", "Ahmet Can", 1988);
const book4 = new Book("XYZ", "Ahmet Can", 1920);

//! Static degiskenlere sadece class uzerinden erisilebilir
console.log(Book.counter);

//! instance'lar üzerinden static degiskenlere erişilemez.
console.log(book1.counter);

