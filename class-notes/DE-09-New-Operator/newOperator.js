//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title: "BMW",
    model: 1990,
    engine: 1.6,
};

//*1 klasik yol
console.log(car.title, car["engine"]);

//*2. yol destructuring

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
const { car1, car2 } = arabalar;
console.log(car1, car2);

console.log(car1.marka);

const { marka, model, renk } = car1;
console.log(marka, renk, model);

//*eğer car1 ve car2 diye dest. yapmadan marka, model, renk i dest etmek istersek alttaki gibi yazabiliriz
// const{marka,model,renk}=arabalar.car1

//*car1 için marka, renk key lerini kullandık, bu yüzden car2 için yeni isimler kullandık
const { marka: marka1, renk: renk1 } = car2;
console.log(marka1, renk1);

//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir

//* ornek1 object-object gezinme (iterable)

for (let i in arabalar) {
    console.log(i);
    console.log(arabalar[i].marka);
}

//* ornek2 Array-object gezinme
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
    console.log(job);
    console.log(age);
});

//? fonksiyonlar object parametreleri dest edebilir

//*fonksiyon içinde destructuring

const futbol = (verii) => {
    // console.log(verii);

    const { adi, renk, yildiz } = verii;
    console.log(adi, renk, yildiz);
};

const veri = { adi: "GS", renk: "sarı-kırmızı", yildiz: 4 };
futbol(veri);

const yazdir = ({ id, name, age }) => {
    console.log(id, name, age);
};

const data = { id: 1, name: "Osman", age: 45 };

yazdir(data);



//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
// const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

// //*Classical
// const mehmet = names[1] //* indexing

// const [p1, p2, , p3] = names
// console.log(p1, p2, p3)

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------


//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "Deep",
    job: "actor",
    age: 55
}

const { pName, ...gerisi } = personel
console.log(gerisi);
console.log(personel);
console.log(pName);
console.log(gerisi.surname);

//! OBJECT COPY
//? orjinal diziyle aynı şartlarda kopya oluşturduk
const ikizPersonel = personel
console.log(ikizPersonel);


//?orjinal diziden farklı bir kopya oluşturduk
const { ...personelKopya } = personel
console.log(personelKopya);

console.log("****************************");
//*rest ile orjinal diziden farklı bir kopya oluşturmuştuk, bu kopyaya yapılan değişiklik ne orjinal diziyi ne bundan klasik yolla çoğaltılan diziyi bozmaz
personelKopya.age = 40
console.log(personel);
console.log(ikizPersonel);
console.log(personelKopya);


console.log("****************************");
//*klasik yolla çoğaltılan object te yapılan değişiklik orjinal object i de bozar
ikizPersonel.age = 80

console.log(personel);
console.log(ikizPersonel);
console.log(personelKopya);

//*REST ARRAYS********************************

const makeUp = ["rimel", "ruj", "allik", "oje", "far"]


const [birinci, ikinci, ...makeUpGerisi] = makeUp

console.log(birinci, ikinci);
console.log(makeUpGerisi);


//!ARRAY KOPYA

const esasNumber = [10, 20, 30, 40]

const ikizNumber = esasNumber

const [...numberKopya] = esasNumber

numberKopya.push(999)
console.log(esasNumber);
console.log(ikizNumber);
console.log(numberKopya);

ikizNumber.unshift(1111)
esasNumber.push(333333)

console.log(esasNumber);
console.log(ikizNumber);
console.log(numberKopya);


//! 2- Bir fonksiyonun argument lerini diziye çevirmek için kullanılır

//*şikayet etmez ama ilk 2 argument in değerini hesaplar, çünkü 2 adet karşılayan var
//* 1.yol
const sum = (x, y) => x + y

console.log(sum(1, 2, 3, 4, 5))

//*2.yol

const sum2 = (...x) => x.reduce((toplam, eleman) => toplam + eleman, 0)
// console.log(x);
//x=[1,2,3,4,5]

console.log((sum2(1, 2, 3, 4, 5)))

const showName = (name, surname, ...titles) => {
    console.log(titles);
    const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
    console.log(summary);
};

showName("Ashley", "Miller", "Developer", "Math-Teacher", "Wife", "sister")

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

const zeugs = ["Aircraft", "Helicopter", "Bicycle"];

const otomobiles = [" Trucks", "Bus", "Car", "SUV"];

console.log([zeugs, otomobiles]);
console.log(zeugs.concat(otomobiles));

console.log([...zeugs, "otobus", ...otomobiles, "tır"]);

//************** react ta alttaki örnekte old gibi edit yapabiliriz */

const personel2 = {
    pName: "Johny",
    surname: "Deep",
    job: "actor",
    age: 55,
};

const b = { ...personel2, job: "DAD" }
console.log(b);


