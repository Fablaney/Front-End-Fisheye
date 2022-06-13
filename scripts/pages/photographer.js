//Mettre le code JavaScript lié à la page photographer.html

// https://some.site/?id=123
// Je récupere l'url
let parsedUrl = new URL(window.location.href);
// Je récupere uniquement l'id et je la transfere dans une variable 
let idPhotograph = parsedUrl.searchParams.get("id")

// Je convertis l'id en nombre
idPhotograph = Number(idPhotograph)
// console.log("id du photographe : " + idPhotograph);
// console.log(typeof idPhotograph)
// console.log(idPhotograph)


// Je vais lire dans data les données des photographes sous forme de tableau / API / base de données
async function getPhotographers()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographers = await response.json()

    // je vais chercher les infos de 1 photographe par son id passée en URL
    const onePhotographer = photographers.photographers.find(x => x.id === idPhotograph)

    return onePhotographer
}

// Récuperer les images de 1 photographe
async function getPhotographeImage()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographerMedias = await response.json()

    // affiche les medias en console
    console.log("console du getPhotographeImage")
    // console.log("affiche tous les medias")
    console.log(photographerMedias.media);


    // je vais chercher les infos de 1 photographe par son id passée en URL
    console.log("affiche les medias de 1 photographe")
    // const mediasOfPhotographer = photographerMedias.media.find(x => x.photographerId === idPhotograph)


    function dontlidest(value)
    {
        return value === idPhotograph;
    }
    var mediasOfPhotographer = photographerMedias.media.filter(dontlidest);
 

    console.log(mediasOfPhotographer)

    return mediasOfPhotographer
}


// Renvoie les données et les fait apparaitre dans le dom dans ".photograph-header"
async function displayData(onePhotographer)
{
    // je selectionne le bloc html ou je vais afficher les infos 
    const photographersSection = document.querySelector(".photograph-header");

    // console.log("console du display data ")
    // console.log(onePhotographer)

    // je prend la fonction pour afficher les infos et je lui passe les données du photographe
    const photographerModel = photographerFactorySingle(onePhotographer);

    const userCardDOM = photographerModel.getUserCardDOM();

    // j'insere le bloc dans la page html dans le bloc .photograph-header
    photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
}

// Renvoie les medias pour 1 photographe
// async function mediasWrapper(mediasOfPhotographer)
// {
//     // je selectionne le bloc html ou je vais afficher les infos 
//     const mediasPhotographersSection = document.querySelector(".medias-wrapper");

//     // console.log("console du medias wrapper")
//     // console.log(mediasOfPhotographer)

//     // Je boucle sur photographers pour afficher les medias
//     mediasOfPhotographer.forEach((mediaOfPhotographer) => {
//         // je prend la fonction pour afficher les infos et je lui passe les données du photographe
//         const mediasPhotographerModel = photographerFactorySingle(mediaOfPhotographer);

//         const userCardDOM = mediasPhotographerModel.getUserCardDOM();

//         // j'insere le bloc dans la page html dans le bloc .medias-wrapper
//         mediasPhotographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
//     });
// }

async function init()
{
    // Récupère les datas du photographe
    const  onePhotographer  = await getPhotographers()

    displayData(onePhotographer)



    const mediasOfPhotographer = await getPhotographeImage()

    // console.log("console du init")
    // console.log(mediasOfPhotographer)

    // mediasWrapper(mediasOfPhotographer)

}

init();