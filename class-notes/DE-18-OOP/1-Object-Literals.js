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