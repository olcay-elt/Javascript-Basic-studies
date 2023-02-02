

const getData = () => {
    fetch("./tv-shows.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("url Error");
            }
            return res.json();
        })
        .then((data) => screen(data));
};

getData()
const screen = (data) => {

    data.forEach((films) => {
        document.querySelector(".card").innerHTML += `<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${films.show.name}</h5>
    <a href="#" class="btn btn-primary">${View}</a>
  </div>
</div>
        
   
        
        `});
}