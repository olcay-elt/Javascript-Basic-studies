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


//* Assignments 1

document.title = " DOM MANUPULATION💜"

//* Assignments 2

//* DOM SELECTOR yazisi ve h1 etiketi a etiketine dönsün, yazi degissin
//* baslik[0].innerHTML = "<a href=''> DOM COK KOLAY</a>"

const oldTag = document.getElementById("oldTag")
const newTag = document.createElement("a")
newTag.innerText = "DOM is VERY EASY"

oldTag.parentNode.replaceChild(newTag, oldTag)
newTag.style.color = "blue"
newTag.style.fontSize = "40px"
newTag.style.fontWeight = "bold"
newTag.style.display = "block"
newTag.style.textAlign = "center"


//* Assignments 3

const body = document.getElementById("body")
body.style.backgroundImage = "linear-gradient(to right, green , yellow)"



//* ======================================================
//*     QUERYSELECTOR; QUERYSELECTALL
//*======================================================

//* document.querySelector("title").textContent ="DOM MANIPULATION"

//* document.querySelector("#badi").style.backgroundImage = linear-gradient(to right,green,pink)

//* document.querySelector(".H2").style.color = "pink"

const paragraf2 = document.querySelectorAll("p")
console.log(paragraf2); // Nodelist

paragraf2[0].style.fontSize = "50px"


 // Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği vardır.


//!(örnek üstlerde baslik kısmında var) HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

