//?     ASSIGNMENTS **********************

//! 1)  *****
const prices3 = [100, 250, 50, 89];

let newPrices3 = 0;
prices3.forEach((p, i, dizi) => {
    newPrices3 = (p * 1.1).toFixed(2);

    console.log(`${i + 1}. new price ${newPrices3} `);
    dizi[i] = (p * 1.1).toFixed(2);

});
console.log(prices3);



//! 2)  *****

const prices4 = [100, 250, 50, 89];


prices4.forEach((p, i, dizi) => {
    if (p > 90)
        console.log(`${i + 1} ${p} `);
    dizi[i] = p

})


//! 3) *****

const prices5 = [100, 250, 50, 89];


prices5.forEach((p, i, dizi) => {
    if (p < 110)
        console.log(` ${(p * 1.1).toFixed(2)} `);
    dizi[i] = (p * 1.1).toFixed(2)

})









// !ÖDEVLER 1 *********
//!Soru-1: Not - Harf Programi  **********
const puan = +prompt("Sinav notunu giriniz")
const harf = function (puan) {
    let sonuc;
    if (puan < 0 || puan > 100)
        sonuc = ("Lütfen 0 ile 100 arasi bir puan giriniz")
    else if (0 <= puan <= 25)
        sonuc = ("FF")
    else if (26 <= puan <= 45)
        sonuc = ("DD")
    else if (46 <= puan <= 65)
        sonuc = ("CC")
    else if (66 <= puan <= 75)
        sonuc = ("BB")
    else if (76 <= puan <= 90)
        sonuc = ("BA")
    else if (91 <= puan <= 100)
        sonuc = ("AA")
    return sonuc
}
console.log(harf(puan));
//!Soru-2: Switch-case  **********
const month = prompt("Enter the month");
let monthNo;
switch (month) {
    case "January":
        monthNo = 1;
        break;
    case "Ferruary":
        monthNo = 2;
        break;
    case "March":
        monthNo = 3;
        break;
    case "April":
        monthNo = 4;
        break;
    case "May":
        monthNo = 5;
        break;
    case "June":
        monthNo = 6;
        break;
    case "July":
        monthNo = 7;
        break;
    case "August":
        monthNo = 8;
        break;
    case "September":
        monthNo = 9;
        break;
    case "October":
        monthNo = 10;
        break;
    case "November":
        monthNo = 11;
        break;
    case "December":
        monthNo = 12;
        break;
    default:
        alert("Not defined");
        break;
}
console.log(`${month} is ${monthNo}th month`);
//!Soru-4: Tek-Cift ( Ternary)  **********
const number = +prompt("Enter a Number")
const oddEven = function (number) {
    return number % 2 == 0 ? "Even" : "Odd"
}
console.log(oddEven(number))