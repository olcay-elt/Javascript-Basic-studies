//*hangi sayıya kadar istiyorsanız o sayıyla çarpıp yukarı yuvarlamak, 1 den istediğiniz sayıya kadar sonuç almanızı sağlar

let rastgeleSayi = Math.ceil(Math.random() * 20)
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg")

let skor = 10
//skor u da index.html deki skor u buraya çekerekte yapabiliriz ama çok kullanacağız bu daha tercih edilen yol
let enYuksekSkor = 0;
//enYuksekSkor diye bir değişken atamazsam, dogru tahmindeki enYuksekSkor kontrol kodunda, html deki top-score span inin textContent iyle karşılaştırma yapabiliriz

//! her check butonuna basildiginda olacaklar 