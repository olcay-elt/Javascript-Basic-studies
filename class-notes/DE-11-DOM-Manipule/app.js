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
    ses.volume = 0.2;
};

//!bağlat butonuna tıklandığında
document.querySelector(".bagla").onclick = () => {
    resim.src = "./img/telbağla.gif";

    //pause() fonksiyonu çalan audio nun sesini kapatır
    ses.pause();
};

//!konuş butonuna tıklandığında

document.querySelector(".konus").onclick = () => {
    resim.src = "./img/telefon.gif";
    ses.pause();
};

//!mouse ile resmin üzerine gelince
resim.onmouseover = () => {
    resim.src = "./img/aslan1.jpeg";
};

//!mouse ile resmin üzerinden gidince
resim.onmouseout = () => {
    resim.src = "./img/aslan2.jpeg";
};

// resim.addEventListener("mouseout", () => {
//   resim.src = "./img/aslan2.jpeg";
// });

//!klavyeden inputa veri girişi yapılırken elimizi klavyeden çektiğimizde oluşan değişiklik

const text = document.querySelector("#textbox");
const tik = document.querySelector("#checkbox");

text.onkeyup = () => {
    if (tik.checked) {
        text.value = text.value.toUpperCase();
    } else {
        text.value = text.value.toLowerCase();
    }
};

//!listemin başına h1 tag i ekleyelim

//? HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.<h1></h1>
//const baslik=document.createElement("h1")
//? a ismiyle class atayalım
//baslik.className="a"
//? Programlama Dilleri şeklinde bir text oluşturalım
//const yazi=document.createTextNode("Programlama Dilleri")
//?h1 elementi için oluşan text i child yapalım
//?<h1 class="a">Programlama Dilleri</h1>
//baslik.appendChild(yazi)
//?input-div'in sonrasina h1'i ekliyoruz.
//document.querySelector(".input-div").after(baslik)

const bolum = document.querySelector("section");
// console.log(bolum.innerHTML);
bolum.innerHTML =
    `<h1 class="a text-center"> Programming Languages</h1>` + bolum.innerHTML;

//! ekle butonuna basıldığında input a girilen değerler ul liste me eklensin
//*UZUN YOL
// const liste = document.querySelector(".liste");
// const language = document.querySelector(".language");
//* yeni girilen satiri saklamak icin bir li olusturduk.
// const yeniLi = document.createElement("li");
//* yeni li icin textnode olusturduk
// const textNode = document.createTextNode(language.value);
//*olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(textNode);
//* yeni eklenen satiri var olan listeye (ul) baglayalim.
// liste.appendChild(yeniLi);

document.querySelector(".ekle").onclick = () => {
    const liste = document.querySelector(".liste");
    const language = document.querySelector(".language");

    liste.innerHTML += `<li>${language.value} </li> `;

    //!inputtaki veri listeye eklendikten sonra input temizlensin
    language.value = "";
};

//! sil butonuna tıklandığında ul listesinden silme metodu olan removeChild() metodunu kullanacağız

document.querySelector(".sil").onclick = () => {
    const liste = document.querySelector(".liste");

    liste.removeChild(liste.lastElementChild);
    //liste.lastElementChild= listenin son çocuğunu siler
    // firstElementChild=ilk child ını siler
    // liste.children[2]= 2. hild ı sileriz
    //* liste.removeChild(liste.firstElementChild)

    //* liste.removeChild(liste.children[2])
};
