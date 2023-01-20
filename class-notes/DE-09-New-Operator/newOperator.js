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
