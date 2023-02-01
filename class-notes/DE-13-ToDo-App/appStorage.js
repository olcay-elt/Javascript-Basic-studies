//!burada liste adında, local de LISTE adında boş bir liste oluştur, listenin içi doluysa dolu listeyi getir*************************
let liste = JSON.parse(localStorage.getItem("LISTE")) || [];


const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//!Add butonuna basıldığında

listeButon.onclick = () => {
    if (!listeInput.value) {
        alert("lütfen bir not giriniz");
    } else if (liste.includes(listeInput.value)) {
        return;
    } else {
        liste.push(listeInput.value);

        //!liste ye eleman eklenince  localStorage deki LISTE yi güncelle**************************
        localStorage.setItem("LISTE", JSON.stringify(liste));

        // console.log(liste);
        //!ekranda listeyi göster

        showListe();
        listeInput.value = "";
    }
};
console.log(liste);
const showListe = () => {
    listeUl.textContent = "";
    // localstorage daki verileri ekrana baştan yazdır
    // başka türlü olmaz 
    liste.forEach((todo) => {
        listeUl.innerHTML += `
      <li>
        <i class="fa fa-check fa-lg"> </i>
        <p>${todo}</p>
        <i class="fa fa-trash fa-lg"></i>
      </li>`;
    });

    toplam.textContent = liste.length;

    listeInput.focus();

    //!silme
    createSilButon();
    //!check
    createCheckButon();
};

const createSilButon = () => {
    document.querySelectorAll(".fa-trash").forEach((a) => {
        a.onclick = () => {
            //  console.log(liste.indexOf(
            //   a.previousElementSibling.textContent
            // ))
            //!  a.previousElementSibling=a nın önceki  kardeş elementi=p
            // console.log(
            //   a.previousElementSibling.textContent
            // )
            const silinecekIndis = liste.indexOf(
                a.previousElementSibling.textContent
            );

            liste.splice(silinecekIndis, 1);
            //!splice(değişecek index, silinecek mi, yerine ne gelecekse, 3. parametre yerine birşey yazmazsak,sadece kastedilen eleman  silinir)
            a.parentElement.remove();
            //!ekrandan silmezsek o an ekranda elemanlar durur, refresh yapınca localStorage den dizi geleceği için silinmiş olarak gelir, o yüzden ekrandan da silmekte fayda var
            //!listeden eleman silinince localStorage deki LISTE yi güncelle*************
            localStorage.setItem("LISTE", JSON.stringify(liste));

            toplam.textContent = liste.length;

            if (completed > 0 && a.parentElement.classList.contains("checked")) {
                completed = completed - 1;
                document.querySelector("#tamamlanan").textContent = completed;
            }
        };
    });
};

const createCheckButon = () => {
    //!1.yol
    document.querySelectorAll(".fa-check").forEach((a) => {
        a.onclick = () => {
            if (a.parentElement.classList.contains("checked")) {
                a.parentElement.classList.remove("checked");
            } else {
                a.parentElement.classList.add("checked");
            }
        };
    });
};

//!sayfa yüklendiğinde il etapta local den liste ekrana bastırılsın
showListe();
