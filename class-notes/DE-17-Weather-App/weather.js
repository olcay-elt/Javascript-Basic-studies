const form = document.querySelector(".top-banner form"); const input = document.querySelector(".top-banner form input");
//.class1.class2 <==> .class1 .class2(parent to child)
const msgSpan = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");

//authentication(kimlik doğrulama) vs. authorization(yetkilendirme)

//localStorage vs. sessionStorage

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherDataFromApi();
    form.reset();
});

const getWeatherDataFromApi = () => {
    alert("getWeatherDataFromApi");
}
