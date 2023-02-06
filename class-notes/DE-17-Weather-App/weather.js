const form = document.querySelector(".top-banner form"); const input = document.querySelector(".top-banner form input");
//.class1.class2 <==> .class1 .class2(parent to child)
const msgSpan = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");

//authentication(kimlik doğrulama) vs. authorization(yetkilendirme)

//localStorage vs. sessionStorage
// localStorage.setItem("apiKey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));
// sessionStorage.setItem("apiKey", "4d8fb5b93d4af21d66a2948710284366")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherDataFromApi();
    form.reset();
});

const getWeatherDataFromApi = async () => {
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    const cityName = input.value;
    const units = "metric";
    const lang = "tr";
    //template literal(string) ==> ES6(2015)
    //HTML5 elements(symnatic elements) ==> SEO
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

    try {
        // const response = await fetch(url).then(response => response.json());
        //axios post+get (JSON)
        const response = await axios(url);
        console.log(response);

        //Obj. Destr.
        const { main, name, weather, sys } = response.data;

        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

        const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
        console.log(iconUrlAWS);

        //querySelectorAll => NodeList
        //getElementsByClassName => Html Collection
        const cityNameSpans = list.querySelectorAll("span");
        console.log(cityNameSpans);
        //forEach ==> array + NodeList
        if (cityNameSpans.length > 0) {
            //matching span text with input value??? 
            const filteredArray = [...cityNameSpans].filter
                //li span text(from api) <==> name(from api)
                (span => span.innerText == name);
            if (filteredArray.length > 0) {
                msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
                setInterval(() => {
                    msgSpan.innerText = "";
                }, 3000);
                return;
            }

        }
        // const cityNameSpans2 = document.getElementsByClassName(".cities");
        // console.log(cityNameSpans2);

        const createdLi = document.createElement("li");
        createdLi.classList.add("city");
        createdLi.innerHTML =
            `<h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>`;
        //append vs. appendChild
        //append vs. prepend
        list.prepend(createdLi);

    }
    catch (error) {
        //error logging
        //postErrorLog("weather.js", "getWeatherDataFromApi", new Date(), error);
        msgSpan.innerText = "City not found!";
        setInterval(() => {
            msgSpan.innerText = "";
        }, 3000);
    }

}