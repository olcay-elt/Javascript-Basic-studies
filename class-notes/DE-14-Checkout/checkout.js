//* ======================================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread==============================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];
//!EKRANA BASTIRMA


sepettekiler.forEach((ürün) => {
    document.querySelector("#urun-rowlari").innerHTML +=

        `<div class="card mb-3" style="max-width: 540px;">

  <div class="row g-0">

    <div class="col-md-5">
      <img src= ${ürün.img}  class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-7">

      <div class="card-body">
      
        <h5 class="card-title">${ürün.name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(ürün.price * 0.7).toFixed(
            2
        )}</span>
                      <span class="h5 text-dark text-decoration-line-through">${ürün.price} </span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${ürün.adet}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam">${(ürün.price * 0.7 * ürün.adet).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>`;
})

//!todo browser da en alttaki total kısmı
document.querySelector("#odeme-table").innerHTML = `<table class="table">
            <tbody>
              <tr class="text-end">
                <th class="text-start">Aratoplam</th>
                <td>$<span class="aratoplam">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Vergi(18%)</th>
                <td>$<span class="vergi">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Kargo</th>
                <td>$<span class="kargo">0.00</span></td>
              </tr>
              <tr class="text-end">
                <th class="text-start">Toplam</th>
                <td>$<span class="toplam">0.00</span></td>
              </tr>
            </tbody>
          </table>`;


//!SİLME
document.querySelectorAll(".remove-ürün").forEach(() => {
    //!ekrandan sildik

    //!diziden sildik

});






//!ADET DEĞİŞTİRME



//!burada (-) icon u  ve adet ve (+) icon u ile işim olduğu için, mesela - ye basınca adet (kardeşi) değişsin istediğim için, minus a ulaşıp ona tıklanınca closest ile parent ına oradan da kardeşine ulaş eksilt diyebiliriz. ya da gerekli elementlerin parent ına ulaşıp çocuklarını çağırarak yapabiliriz
document.querySelectorAll(".minus").forEach((minus) => {


    minus.onclick = () => {
        //!minus adet değişimini ekrana bastır


        //!sepettekiler de adet değişimini yapalım 

        sepettekiler.map((ürün) => {


            //!ürün toplam ı ekrana bastırma (her ürün card ında var)





            //! plus a basınca minus a benzer işlemler
            document.querySelectorAll(".plus").forEach((plus) => {
                //!minus adet değişimini ekrana bastır

                //!dizideki adet i  güncelle

                //!ürün toplam ekrana bastırması. her üründe olan toplam kısmı



            });
        })


        //******buradan altı table kısmı */
        //! Card toplam değerlerini hesaplayın ve güncelleyin

        //! her bir card daki ürün toplam kısımları, buradaki fiyatları toplayıp ara toplam bulmalıyız (table a bastırmak için)
        const ürünToplam = document.querySelectorAll(".ürün-toplam");
        //!  Bir NodeListnesne, bir belgeden çıkarılan düğümlerin bir listesidir

        //? araToplam= en alttaki tüm ürünler için vergi kargo hariç sepettekiler fiyatı

        //*önce hesapla sonra altta browser a (DOM) bastır

        const vergiPrice = araToplam * vergi;
        const shipping = araToplam > 0 ? kargo : 0;
        const cardTotal = araToplam + shipping + vergiPrice;

  //!ekrana table kısmına bastır

