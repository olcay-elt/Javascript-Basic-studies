fetch("https://api.github.com/users").then((res) => res.json()).then((veri) => console.log(veri))

fetch("https://api.github.com/users").then((res) => res.json()).then((data) => ekranaBastir(data))

const ekranaBastir = (data) => {

}