//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* example1 (Buton style)

const buton = document.getElementById("btn")

buton.style.width = "200px"
buton.style.height = "80px"
buton.style.backgroundColor = "green"
buton.style.color = "white"
buton.style.fontSize = "40px"
buton.textContent = "ARA"

//? element in sadece icerigini degistirmek istersek textContent yeterlidir

//* example2 (paragraf style)
const paragraf = document.getElementById("par1")
paragraf.style.backgroundColor = "gray"
paragraf.style.color = "orange"
paragraf.style.fontSize = "50px"
paragraf.style.padding = "5px"


//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================
//*example 3 (img style)
