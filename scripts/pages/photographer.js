//Mettre le code JavaScript lié à la page photographer.html

// https://url-mon-site/?id=123
// Je récupere l'url pour afficher 1 photographe et ses images
let parsedUrl = new URL(window.location.href);
// Je récupere uniquement l'id et je la transfere dans une variable 
let idPhotograph = parsedUrl.searchParams.get("id")

// Je convertis l'id en nombre
idPhotograph = Number(idPhotograph)

let onePhotographer = {}

let mediasOfPhotographer = []


// Je vais lire dans data les données des photographes sous forme de tableau / API / base de données
async function getPhotographers()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographers = await response.json()
    // console;log(photographers)
    // je vais chercher les infos de 1 photographe par son id passée en URL
    onePhotographer = photographers.photographers.find(x => x.id === idPhotograph)

    return onePhotographer
}

// Récuperer les images de 1 photographe
async function getPhotographeMedias()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json')

    // lire le corps de réponse et analyser en JSON
    let photographerMedias = await response.json()

    // je vais chercher les infos de 1 photographe par son id passée en URL
    // console;log.log("affiche les medias de 1 photographe")
    mediasOfPhotographer = photographerMedias.media.filter(medias => medias.photographerId === idPhotograph);
    // console;log.log(mediasOfPhotographer)

    for (let i = 0; i< mediasOfPhotographer.length; i++)
    {
        mediasOfPhotographer[i].index = i;
    }
    // console.table(mediasOfPhotographer)

    return mediasOfPhotographer
}


// Renvoie les données et les fait apparaitre dans le dom dans ".photograph-header"
async function displayHeader()
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
async function mediasWrapper()
{
    // je selectionne le bloc html ou je vais afficher les infos 

    const mediasPhotographersSection = document.querySelector(".medias-wrapper");

    // Je boucle sur photographers pour afficher les images
    mediasOfPhotographer.forEach((mediaOfPhotographer) => {
        // je prend la fonction pour afficher les infos et je lui passe les données du photographe
        const mediasPhotographerModel = photographerFactoryMedias(mediaOfPhotographer, onePhotographer);

        const userMediasDOM = mediasPhotographerModel.getMediasCardDOM();

        // j'insere le bloc dans la page html dans le bloc .medias-wrapper
        mediasPhotographersSection.insertAdjacentHTML('beforeEnd', userMediasDOM, );
    });
}

// Renvoie les likes pour 1 photographe
async function photographerLikes()
{
    // je selectionne le bloc html ou je vais afficher les infos 
    const mediasPhotographersSection = document.querySelector(".likes-wrapper");

    // je prend la fonction pour afficher les infos et je lui passe les données du photographe
    const likesPhotographer = photographerFactoryLikes(onePhotographer, mediasOfPhotographer);

    const likesDOM = likesPhotographer.getLikesdDOM();

    // j'insere le bloc dans la page html dans le bloc .medias-wrapper
    mediasPhotographersSection.insertAdjacentHTML('beforeEnd', likesDOM,);
}

async function init()
{
    // Récupère les datas du photographe
    await getPhotographers()
    // recupere les images du photographe
    await getPhotographeMedias()

    // afficher le header du photographe
    displayHeader()

    // affiche les images du photographe
    mediasWrapper()

    // affiche les likes du photographe
    photographerLikes()

    // console;log.log("console;log du init")
    // console;log.log(mediasOfPhotographer)
}

init();

// Fonction pour ajouter/supprimer un like
function likeKey(id)
{
    let a = document.querySelector("#likes-"+ id + " a")

    a.addEventListener('keyup', function(el)
    {
        if (el.key === "Enter")
        {
            el.stopImmediatePropagation() 
            addordislike(id)  
        }
    })
} 

function addordislike(id)
{
    let a = document.querySelector("#likes-"+ id + " a")

    a.addEventListener('click', function(e)
    { 
        e.preventDefault()
    })
    
    // soluce 1
    let media = mediasOfPhotographer.find(media_photographer => media_photographer.id == id)

    if (document.querySelector("#likes-" + id + " i").classList.contains("liked"))
    {
        // console;log("c'est déja liké je supprime 1")
        media.likes--

        // console;log("je supprime la class liked au coeur ")
        document.querySelector("#likes-" + id + " i").classList.remove("liked")

        // console;log("j'enleve - 1 au compte global")
        document.querySelector(".likes-count").innerHTML--
    }
    else
    {
        // console;log("c'est pas liké j'ajoute 1")
        media.likes++

        // console;log("j'ajoute la class liked au coeur")
        document.querySelector("#likes-" + id + " i").classList.add("liked")

        // console;log("j'ajoute + 1 au compte global")
        document.querySelector(".likes-count").innerHTML++
    }

    // console;log("j'ajoute + 1 aux likes de l'image")
    document.querySelector("#likes-" + id + " span").innerText = media.likes
}


// Fonction SORT BY
let mediasSorteds = []

function sortBy(value)
{
    // let mediasSorteds;
    if (value == "likes")
    {
        /**
         * tri les données par popularité
         * @param {array} datas
         * @returns {array}
         */
        function getDataByPop(datas)
        {
            return datas.sort((a, b) => {
                // 'b'(par sa position) sera la reference et sera comparé à 'a', qui sera l'élément suivant
                // b > a
                return b.likes - a.likes;
            });
        }
        mediasSorteds = getDataByPop(mediasOfPhotographer)
    }
    if (value == "date")
    {
        /**
         * tri les données par date
         * @param {array} datas
         * @returns {array}
         */
        function getDataByDate(datas)
        {
            return datas.slice().sort((a, b) => {
            // a < b
            const valueA = new Date(a.date);
            const valueB = new Date(b.date);
            return valueB - valueA;
            });
        }
        mediasSorteds = getDataByDate(mediasOfPhotographer)
    }
    if (value == "title")
    {
        /**
         * tri les données par titre
         * @param {array} datas
         * @returns {array}
         */
        function getDataByTitle(datas)
        {
            return datas.sort((a, b) => {
            return a.title.localeCompare(b.title);
            });
        }
        mediasSorteds = getDataByTitle(mediasOfPhotographer)
    }

    // je selectionne le bloc html ou je vais re-afficher les medias triés par ... 
    const mediasPhotographersSection = document.querySelector(".medias-wrapper");

    document.querySelectorAll(".medias-cards").forEach( (elt)=>{ elt.remove() } )

    // Je boucle sur photographers pour afficher les images
    mediasSorteds.forEach((mediaSorted) => {
        // je prend la fonction pour afficher les infos et je lui passe les données du photographe
        const mediasPhotographerModel = photographerFactoryMedias(mediaSorted, onePhotographer);

        const userMediasDOM = mediasPhotographerModel.getMediasCardDOM();

        // j'insere le bloc dans la page html dans le bloc .medias-wrapper
        mediasPhotographersSection.insertAdjacentHTML('beforeEnd', userMediasDOM, );
    });
}