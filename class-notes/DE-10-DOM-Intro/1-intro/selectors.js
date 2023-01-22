//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* example1 (Buton style)

const buton = document.getElementById("btn")

buton.style.width = "200px"
buton.style.height = "80px"
buton.style.color = "yellow"
buton.style.backgroundColor = "red"
buton.style.fontSize = "40px"
buton.textContent = "ARA"
//?element in sadece içeriğini değiştirmek istersek textContent yeterlidir

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

const resim = document.getElementsByTagName("img")
console.log(resim);

resim[0].style.width = "400px"
resim[1].style.border = "5px solid red"

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik = document.getElementsByClassName("H1")

console.log(baslik);

baslik[0].style.color = "red"
baslik[0].style.textAlign = "center"

//*for döngüsüyle bütün H1 class isimli tag lere etki edebiliriz

for (let i = 0; i < baslik.length; i++) {

    baslik[i].style.color = "purple"
    baslik[i].style.textAlign = "center"
}

const mani = document.getElementsByName("title")
console.log(mani);
mani[0].style.color