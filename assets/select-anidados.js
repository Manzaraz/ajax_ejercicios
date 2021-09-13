// import data from "./select-tokens";

const d = document,
    $selectPrimary = d.getElementById("select-primary"),
    $selectSecondary = d.getElementById("select-secondary");
let url
function loadStates() {
    fetch (`https://apis.datos.gob.ar/georef/api/provincias`)
        .then((res) => res.ok = res.json() || Promise.reject(res))
        .then((json) => {
            console.log(json)
        })
        .catch((err) => {
            console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $selectPrimary.nextElementSibling.inner= `Error ${err.status}: ${message}`;
        })
}

function loadTowns(state) {
    
}
d.addEventListener("DOMContentLoaded", (e) => loadStates());

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));