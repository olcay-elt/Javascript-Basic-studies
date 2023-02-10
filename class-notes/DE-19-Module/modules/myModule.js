console.log("myModule den selamlar")

export const CALISMA_SAATİ = 40

export function topla(s1, s2) {
    return s1 + s2
}

let counter = 0;

const inc = (miktar) => {
    counter += miktar
    return counter
}

const dec = (miktar) => {
    counter -= miktar;
    return counter;
};

const benimAdim = "ASHLEY"

export { inc, dec, benimAdim }


//?sadece bir tane export default yazılabilir
export default function ugurla() {
    console.log("Elveda JS, Hoşgeldin REACT")
}