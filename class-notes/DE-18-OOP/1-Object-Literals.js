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