//Mettre le code JavaScript lié à la page photographer.html

// https://some.site/?id=123
// Je récupere l'url
let parsedUrl = new URL(window.location.href);
// Je récupere uniquement l'id et je la transfere dans une variable 
let idPhotograph = parsedUrl.searchParams.get("id")

// Je convertis l'id en nombre
idPhotograph = Number(idPhotograph)
console.log("id du photographe : " + idPhotograph);
// console.log(typeof idPhotograph)
// console.log(idPhotograph)


// Je vais lire dans data les données des photographes sous forme de tableau / API / base de données
async function getPhotographers()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographers = await response.json()

    // affiche les photographes en console
    // console.log(photographers.photographers);

    console.log("console du getphotographers")
    console.log("affiche le photographe demandé")
    const onePhotographer = photographers.photographers.find(x => x.id === idPhotograph)
    console.log(onePhotographer)

    // affiche les medias en console
    // console.log(photographers.media);

    return onePhotographer
}

// Renvoie les données et les fait apparaitre dans le dom dans ".photograph-header"
async function displayData(onePhotographer)
{
    const photographersSection = document.querySelector(".photograph-header");

    console.log("console du display data")
    console.log(onePhotographer)

    // Je boucle sur photographers pour afficher les cards de chaque photographe
    onePhotographer.forEach((onePhotograph) => {

        console.log("console du foreach")
        console.log(onePhotograph);

        // je prend la fonction pour afficher les cards et je lui passe les données des photographes
        const photographerModel = photographerFactorySingle(onePhotograph);

        const userCardDOM = photographerModel.getUserCardDOM();

        // photographersSection.appendChild(userCardDOM);
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
    });
}


async function init()
{
    // Récupère les datas du photographe
    const  onePhotographer  = await getPhotographers()

    console.log("console du init")
    console.log(onePhotographer)
    
    displayData(onePhotographer)
}

init();