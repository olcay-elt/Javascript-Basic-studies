document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

const resim = document.querySelector(".resim");
const ses = document.querySelector(".ses");

//!ara butonu tıklandığında
document.querySelector(".ara").onclick = () => {
    resim.src = "./img/img.gif";

    //play() fonksiyonu audio element ini çalıştırır
    ses.play();
    //sesin volume ünü 0-1 arasında değer vererek ayarlayabiliriz
    ses.volume = 0.2
};

//!bağlat butonuna tıklandığında
document.querySelector(".bagla").onclick = () => {
    resim.src = "./img/telbağla.gif"

    //pause() fonksiyonu çalan audio nun sesini kapatır
    ses.pause()
}

//!konuş butonuna tıklandığında

document.querySelector(".konus").onclick = () => {

    resim.src = "./img/telefon.gif"
    ses.pause()
}

//!mouse ile resmin üzerine gelince
resim.onmouseover = () => {
    resim.src = "./img/aslan1.jpeg"
}

//!mouse ile resmin üzerinden gidince
resim.onmouseout = () => {
    resim.src = "./img/aslan2.jpeg";
};

// resim.addEventListener("mouseout", () => {
//   resim.src = "./img/aslan2.jpeg";
// });


//? HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.

//? a ismiyle class atayalım

//? Programlama Dilleri şeklinde bir text oluşturalım

 //?h1 elementi için oluşan text i child yapalım
 
 //?input-div'in sonrasina h1'i ekliyoruz.