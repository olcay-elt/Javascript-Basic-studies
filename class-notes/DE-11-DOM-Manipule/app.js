document.querySelector("h1").style.color = "red"
document.querySelector("h2").style.textAlign = "center"

const resim = docement.querySelector(".resim")
const ses = document.querySelector(".ses")

//* ara butonu tiklandiginda

document.querySelector(".ara").onclick = () => {
    resim.src = "./img/img.gif"
    //play() fonksiyonu audio elementini calistirir
    ses.play();
    // ses volumünü 0-1 arasi ayarlayabiliriz
    ses.volume = 0.2
};

//* baglat butonuna tiklandiginda
document.querySelector(".bagla").onclick = () => {
    resim.src = "./img/telbag╠åla.gif"
    ses.pause()

}

//* konus butonuna tiklandiginda
document.querySelector(".konus").onclick = () => {
    resim.src = "./img/telefon.gif"
    ses.pause()

}

//* bilgi butonuna tiklandiginda