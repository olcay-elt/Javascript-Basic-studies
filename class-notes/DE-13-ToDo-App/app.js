let liste = [];

let total = 0;

let completed = 0;

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
        total += 1
        showListe()
    }
};

const showListe = () => {
    listeUl.innerHTML += `<li>
<i class="fa fa-check fa-lg"></i>
<p> ${listeInput.value} </p>
<i class="fa fa-trash fa-lg" ></i>
</li>`;
    listeInput.value = "";
    toplam.textContent = total;

    //! check butonuna basilinca 
    createCheckButon()
    //! trash butonuna basilinca
    createSilButon()
};

const createCheckButon = () => { }