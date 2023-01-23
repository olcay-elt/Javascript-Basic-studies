const yaricapInput = document.querySelector("#yaricap")

console.log(yaricapInput);

document.querySelector("#btn").onclick = () => {
    const r = yaricapInput.value
    const alan = (Math.PI * r * r).toFixed(2)
    console.log(alan);

    const cevre = (2 * Math.PI * r).toFixed(2)
    console.log(cevre);

    document.querySelector(".alan").textContent = alan
    document.querySelector(".cevre").textContent = cevre
}

//*