// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//!global scope

let birinci = 7;

let ikinci = 24;

let ucuncu = 345;

console.log(birinci, ikinci, ucuncu);

const fonksiyon = function () {
    birinci = 9;

    const ikinci = 45;

    const dorduncu = 1234;

    console.log(birinci, ikinci, ucuncu, dorduncu);
};

fonksiyon();
console.log(birinci, ikinci, ucuncu);
// console.log(dorduncu);
