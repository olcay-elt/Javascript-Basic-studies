//* ======================================================
//*                        EVENTS
//* ======================================================



//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//*  <h1 onmouseover="style.color='blue'"  onmouseout="style.color='red'">DOM SELECTOR</h1>

//?METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------

//!index.html deki kodu buraya görmek için yazdık
{/* <h1 class="header"  onmouseover=mavi() 
   onmouseout=kirmizi()
>DOM BASİC</h1> */}

const header = document.querySelector(".header")
const mavi = () => header.style.color = "blue"
const kirmizi = () => header.style.color = "red"

//?METHOD-3 (Sadece js sayfasında yazılan kod) 1.yol
//?---------------------------------------------------------------
//*example-1
document.querySelector(".H2").onmouseover = () => {
    document.querySelector("#badi").style.color = "pink"
}

const baslik = document.querySelector(".H1")
baslik.onmouseover = () => { baslik.style.color = "orange" }

//*example-2 onclick-ondblclick

const birinci = document.querySelector(".bir")
const ikinci = document.querySelector(".iki")


birinci.onclick = () => {
    birinci.src = "./img/js2.png";
    ikinci.src = "./img/js.png";
}
ikinci.onclick = () => {
    birinci.src = "./img/js.png";
    ikinci.src = "./img/js2.png";
}
birinci.ondblclick = () => {
    birinci.src = "../../../../html-css/class-notes/assets/img/winter1.jpg";
    ikinci.src = "../../../../html-css/class-notes/assets/img/tree.webp";
}

//*example-3 (buton onclick)

const btn = document.querySelector("#btn")

btn.onclick = () => {

    document.querySelector("body").style.backgroundImage = "linear-gradient(to right, purple, gray)"

    btn.textContent = "SEARCH"
    btn.style.fontSize = "30px"
    header.style.color = "aquamarine"

}

//!aynı element e bir spesific bir genel olarak onmouseover atanmışsa,  spesific olan geneli ezer. 
//!aynı element e hem onclick hem onmouseover atandığında, hangi sırayla giderseniz o event çalışır

//?METHOD-4 ( sadece js de yazılır)-AddEventListener 2.yol
//?---------------------------------------------------------------

btn.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage =
        "linear-gradient(to right, purple, gray)";

    btn.textContent = "SEARCH";
    btn.style.fontSize = "30px";
    header.style.color = "aquamarine";
});