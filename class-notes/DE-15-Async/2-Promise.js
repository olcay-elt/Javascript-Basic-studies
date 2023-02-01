//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. su kaynayana kadar bekleyin -> kettle -> work or failed
//* 2. çay ekle --> çay var ya da yok
//* 3. demlenmesini bekle

//!ilk then de sıkıntı varsa direk catch e düşer
const brewTea = () => {
    boil()
        .then((status1) => {
            console.log(status1);
            return addTea();
        })
        .then((status2) => {
            console.log(status2);

            return "Çay hazır. Afiyet olsun";
        })
        // .then((status3) => {
        //   console.log(status3);
        // })
        .catch((err) => console.log(err));
};
const boil = () => {
    return new Promise((resolve, reject) => {
        const boiled = Math.floor(Math.random() * 5); //!0 tutarsa false
        if (boiled) {
            resolve("Su Kaynadı");
        } else {
            reject(new Error("Kettle Başarısız"));
        }
    });
};

const addTea = () => {
    return new Promise((resolve, reject) => {
        const teaAvalaible = Math.floor(Math.random() * 3);
        if (teaAvalaible) {
            resolve("Çay Eklendi");
        } else {
            reject(new Error("Çay kalmamış"));
        }
    });
};

brewTea();

//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//*daha tercih edilenler
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)