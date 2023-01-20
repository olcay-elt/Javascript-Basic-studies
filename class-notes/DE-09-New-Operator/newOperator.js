//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title: "BMW",
    model: 1990,
    engine: 1.6
}

//*1 klasik yol
console.log(car.title, car["engine"]);

//*2. yol destruction

const { title, engine } = car;
console.log(title, engine, car.model);

//*NESTED OBJECT example:

const arabalar = {
    car1: {
        marka: "BMW",
        model: 1990,
        renk: "red",
    },
    car2: {
        marka: "MERCEDES",
        model: 1980,
        renk: "white",
    },
    car3: {
        marka: "AUDİ",
        model: 2000,
        renk: "gray",
    },
};

console.log(arabalar.car1, arabalar.car2);
const { car1, car2 } = arabalar
console.log(car1, car2);

console.log(car1.marka);

const { marka, model, renk } = car1
// +  const { marka, model, renk } = arabalar.car1 üstte car1, car2 yi dest. yapmadiysak direk bu sekilde acabiliriz
console.log(marka, model, renk);

//*car1 için marka, renk key lerini kullandık, bu yüzden car2 için yeni isimler kullandık
const { marka: marka1, renk: renk1 } = car2
console.log(marka1, renk1);

//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir

//*example1 object-object iterable (gezinme)

for (let i in arabalar) {
    console.log(i);
    console.log(arabalar[i].marka);
}

//*example2 object-array iterable (gezinme)

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

people.forEach((item) => {
    // console.log(item.name);
    // console.log(item.surname);
    // console.log(item.job);
    // console.log(item.age);

    const { name, surname, age, job } = item;
    console.log(name);
    console.log(surname);
    console.log(age);
    console.log(job);
});

//? fonksiyonlar object parametreleri dest edebilir

//* fonksiyon icinde destructuring

const futbol = () => {

}

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
// const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

// //*Classical
// const mehmet = names[1] //* indexing

// const [p1, p2, , p4] = names
// console.log(p1, p2, p4)


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------


//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const { pName, ...gerisi } = personel


const personel2 = {
    pName: "Johny",
    surname: "Deep",
    job: "actor",
    age: 55,
};

const b = { ...personel2, job: "DAD" }
console.log(b);