//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals

const book1 = {

    title: "Karamazov Kardesler",
    yazar: "Dostoyevski",
    year: 1980,
    özetFunction: function () {
        return `${this.title} kitabini ${this.yazar} ${this.year} yilinda yazmistir`
    }
}

console.log(book1.title);
console.log(book1.özetFunction());

const book2 = {
    title: "Nutuk",
    yazar: "Atatürk",
    year: 1925,
    özetFunction: function () {
        return `${this.title} kitabini ${this.yazar} ${this.year} yilinda yazmistir`
    }
}

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)