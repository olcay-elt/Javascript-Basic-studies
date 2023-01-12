//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

let hak = 5;

while (hak > 0) {

    const tahmin = +prompt("0-100 arasında bir tahmin giriniz");
    hak--;

    if (rastgele == tahmin) {
        console.log("tebrikler bildiniz 🥳");
        break;
    } else if (rastgele > tahmin) {
        console.log("ARTTIR 📈");
        console.log(hak, "hakkınız kaldı");
    } else {
        console.log("AZALT 📉");
        console.log(hak, "hakkınız kaldı");
    }

}
if (hak == 0)
    console.log("oyunu kaybettiniz 😞");



