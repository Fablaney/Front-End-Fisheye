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
async function getPhotographeMedias()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographerMedias = await response.json()

    // affiche les medias en console
    // console.log("console du getPhotographeImage")
    // console.log("affiche tous les medias")
    // console.log(photographerMedias.media);

    // je vais chercher les infos de 1 photographe par son id passée en URL
    // console.log("affiche les medias de 1 photographe")
    const mediasOfPhotographer = photographerMedias.media.filter(medias => medias.photographerId === idPhotograph);
    console.log(mediasOfPhotographer)

    return mediasOfPhotographer
}


// Renvoie les données et les fait apparaitre dans le dom dans ".photograph-header"
async function displayData(onePhotographer)
{
    // je selectionne le bloc html ou je vais afficher les infos 
    const photographersSection = document.querySelector(".photograph-header");

    // je prend la fonction pour afficher les infos et je lui passe les données du photographe
    const photographerModel = photographerFactorySingle(onePhotographer);

    const userCardDOM = photographerModel.getUserCardDOM();

    // j'insere le bloc dans la page html dans le bloc .photograph-header
    photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
}

// Renvoie les medias pour 1 photographe
async function mediasWrapper(mediasOfPhotographer, onePhotographer)
{
    // je selectionne le bloc html ou je vais afficher les infos 
    const mediasPhotographersSection = document.querySelector(".medias-wrapper");

    // Je boucle sur photographers pour afficher les images
    mediasOfPhotographer.forEach((mediaOfPhotographer) => {
        // je prend la fonction pour afficher les infos et je lui passe les données du photographe
        const mediasPhotographerModel = photographerFactoryMedias(mediaOfPhotographer, onePhotographer);

        const userMediasDOM = mediasPhotographerModel.getMediasCardDOM();
        // const userImagesDOM = mediasPhotographerModel.getImagesCardDOM();
        // const userVideosDOM = mediasPhotographerModel.getVideosCardDOM();

        // j'insere le bloc dans la page html dans le bloc .medias-wrapper
        mediasPhotographersSection.insertAdjacentHTML('beforeEnd', userMediasDOM, );
    });
}

// Renvoie les likes pour 1 photographe
async function photographerLikes(onePhotographer, mediasOfPhotographer)
{
    // je selectionne le bloc html ou je vais afficher les infos 
    const mediasPhotographersSection = document.querySelector(".likes-wrapper");

    // je prend la fonction pour afficher les infos et je lui passe les données du photographe
    const likesPhotographer = photographerFactoryLikes(onePhotographer, mediasOfPhotographer);

    const mediasDOM = likesPhotographer.getLikesDOM();

    // j'insere le bloc dans la page html dans le bloc .medias-wrapper
    mediasPhotographersSection.insertAdjacentHTML('beforeEnd', mediasDOM, this.Likes);
 
    // Likes Counter
    this.Likes = new Likes()
    this.LikesCounter = new LikesCounter()

    this.Likes.addLike(this.LikesCounter)
}

async function init()
{
    // Récupère les datas du photographe
    const onePhotographer = await getPhotographers()
    // recupere les images du photographe
    const mediasOfPhotographer = await getPhotographeMedias()

    // afficher el header du photographe
    displayData(onePhotographer)

    // affiche le simages du photographe
    mediasWrapper(mediasOfPhotographer, onePhotographer)

    // affiche les likes du photographe
    photographerLikes(onePhotographer, mediasOfPhotographer)

    // console.log("console du init")
    // console.log(mediasOfPhotographer)
}

init();