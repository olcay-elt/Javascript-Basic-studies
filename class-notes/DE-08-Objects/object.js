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

const cars = new Object({ name: "BMW", engine: "1.6", model: 2000 });

console.log(cars);

console.log(cars.name, cars.engine);
console.log(cars["name"]); //? square bracket ile erisim

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//* ---------------------------------------------------------
//* 2-   Object constructor kullanalım (OOP ile ayrıntılı göreceğiz)
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
//* 3-   Object Literal (en çok kullanılan yol)
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

console.log(person.languages.map((a) => a.toLowerCase()))

//? yeni bir property ve value eklenebilir

person.location = "America"
console.log(person);

//* ---------------------------------------------------------
//*           Objects teki yöntemler
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

        return `${this.name} ${this.yasHesapla()} yasındadır`
    }

};

console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.özet());
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
        age: 30,
    },
    {
        name: "Sefa",
        surname: "Doganay",
        job: "devops",
        age: 25,
    },
    {
        name: "Adem",
        surname: "Havva",
        job: "data-science",
        age: 35,
    },
    {
        name: "Olcay",
        surname: "Halk",
        job: "developer",
        age: 28,
    },
    {
        name: "Ömer",
        surname: "Bilir",
        job: "team lead",
        age: 34,
    },
];

console.log(people[4].name);
console.log(people);
// console.log(Object.keys(people));
// console.log(Object.values(people));

//* Ornek1  people dizisindeki kişilerin name ve job larını göster
people.forEach((p) => console.log(p["name"], p.job))

//* Ornek2 yasları 1 er arttır sonucu yeni bir diziye aktar

const yas = people.map((a) => a.age + 1)
console.log(yas);

//? yasları 1 er arttır sonucu dizide kalıcı değiştir
people.map((süslü, index, dizi) => (dizi[index].age = süslü.age + 1));

//*Ornek3: yası 33 ün üstünde olan kişilerin name lerini listele

people.filter((süslü) => süslü.age > 33).forEach((a) => console.log(a.name))
//* Ornek4 diziye eleman ekleyelim
people.push({
    name: "Osman",
    surname: "Türk",
    age: 45,

})

console.log(people);

//* Ornek5 her elemanın name ini büyük harfli yap ve yaslarını 1 arttırarak yeni bir object oluştur

const yeni = people.map((kisi) => ({
    name1: kisi.name.toUpperCase(),
    age1: kisi.age + 1,
    job1: kisi.job

}))
console.log(yeni);
console.log(people);

//* Ornek6 developer olanların adlarını ve yaslarını yeni object olarak saklayınız

const newObject = people.filter((p) => p.job == "developer").map((a) => ({
    newName: a.name,
    newAge: a.age,

}))

console.log(newObject);
console.log(people);

//*Ornek7 dizideki kişilerin yaslarının ortalamasını alınız

const averaj = people.reduce((toplam, kisi) => toplam + kisi.age, 0) / people.length

console.log(averaj);


//? nested ********************

const insanlar = {
    CanKişisi: {
        name: "Can",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: "140000",
        drivingLicense: true,
    },
    JohnKişisi: {
        name: "John",
        surname: "Sweet",
        dob: "1990",
        job: "tester",
        salary: "110000",
        drivingLicense: false,
    },
    SteveKişisi: {
        name: "Steve",
        surname: "Job",
        dob: "2000",
        job: "developer",
        salary: "90000",
        drivingLicense: true,
    },
};
//? insanlar objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

//! FOR - IN kullanılabilir, index sonuçta. Ama for of kullanılamaz , verileri almak için itere eden for of object te çalışmaz
//* for (let i in dizi) {
//*   // yürütülecek kod bloğu
//* }


for (let i in insanlar) {

    // console.log(i);
    console.log(insanlar[i].salary);
}

// insanlar["JohnKişisi"].salary
// insanlar["CanKişisi"].salary
// insanlar["SteveKişisi"].salary