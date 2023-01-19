//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------


const cars = new Object({
    name: "BMW",
    engine: "1,6",
    model: 2000
})
console.log(cars);
console.log(cars.name, cars.engine);
console.log(cars["model"]);
//? square bracket ile erisim

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//* ---------------------------------------------------------
//* 2-   Object constructor kullanim (OOP ile ayrintili görecegiz)
//* ---------------------------------------------------------

function Calisanlar(id, name, salary) {
    this.no = id;
    this.isim = name;
    this.maas = salary;
    console.log(this);
}

const kisi1 = new Calisanlar(101, "Mehmet", 7000);
const kisi2 = new Calisanlar(102, "Omer", 8000);
const kisi3 = new Calisanlar(103, "Olcay", 9000);
console.log(kisi1);
console.log(kisi2);
console.log(kisi3);
//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir


//* ---------------------------------------------------------
//* 3-   Object Literal (en cok kullanilan yol)
//* ---------------------------------------------------------

const person = {
    name: "Johny",
    surname: "Deep",
    age: 55,
    job: "actor",
    languages: ["C", "C++", "PHYTON", "JAVA"],
};

console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log(person.languages[2]);

//? Write

person.age += 5;
console.log(person.age);

console.log(person.languages.map((a) => a.toLowerCase()));

//? yeni bir property ve value eklenebilir

person.job = "director";
console.log(person);


//* ---------------------------------------------------------
//*    Objects teki yöntemler
//* ---------------------------------------------------------

const mensch = {
    name: "Johny",
    surname: "Deep",
    birth: 1970,
    job: "actor",
    hasDriverLicense: true,
    yasHesapla: function () {
        return new Date().getFullYear() - this.birth
    },

    özet: function () {
        return `${this.name} ${this.yasHesapla()} yasindadir`
    }

};
console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.özet())

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.
//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. arrow kullanınca,  object in içindeki this keyword ü, global scope u (window) ifade ettiği için, this value nun global scope a bağlanmasını önlemek için, object yöntemi içinde normal function u kullanın.


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.


const people = [
    {
        name: "Hakan",
        surname: "Kara",
        job: "developer",
        age: 30
    },

    {
        name: "Sefa",
        surname: "Dogan",
        job: "devops",
        age: 25
    },

    {
        name: "Adem",
        surname: "Havva",
        job: "data-science",
        age: 35
    },

    {
        name: "Olcay",
        surname: "Halk",
        job: "tester",
        age: 28
    },

    {
        name: "Ömer",
        surname: "Bilir",
        job: "team lead",
        age: 34
    },
]
console.log(people);
console.log(people[4].name);


//* Example 1 : people dizisindeki kisilerin name ve joblarini göster

people.forEach((p) => console.log(p.name, p.job))

//*Example 2 : yaslari 1 er arttir sonucu yeni bir diziye aktar
const yas = people.map((a) => a.age + 1)
console.log(yas);

//* yaslari 1 er arttir sonucu dizide kalici dgistir
people.map((süslü, index, dizi) => (dizi[index].age = süslü.age + 1));

//*Example 3 : yasi 33 ün üstünde olan kisilerin namelerini listele

people.filter((süslü) => süslü.age > 33).forEach((a) => console.log(a.name))

//*Example 4 : diziye eleman ekle
people.push({
    name: "Osman",
    surname: "Kara",
    job: "developer",
    age: 30
})
console.log(people);

//*Example 5 : her elemanin name ini büyük harf yap ve yaslarini 1 arttirarak yeni bir object olustur

const yeni = people.map((kisi) => ({
    name1: kisi.name.toUpperCase(),
    age1: kisi.age + 1,
    job1: kisi.job

}))
console.log(yeni);
console.log(people);
