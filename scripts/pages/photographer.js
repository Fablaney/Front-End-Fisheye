//Mettre le code JavaScript lié à la page photographer.html

// https://some.site/?id=123
// Je récupere l'url
let parsedUrl = new URL(window.location.href);
// Je récupere uniquement l'id et je la transfere dans une variable 
let idPhotograph = parsedUrl.searchParams.get("id")

// console.log("id du photographe : " + idPhotograph);

idPhotograph = Number(idPhotograph)
// console.log(typeof idPhotograph)


// Je vais lire dans data les données des photographes sous forme de tableau / API / base de données
async function getPhotograph()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json');

    // lire le corps de réponse et analyser en JSON
    // let photographers = await response.json(); 
    let data = await response.json(); 

    // affiche les photographes en console
    // console.log(data.photographers);

    // chere 1 photographe par son id
    const onePhotographer = data.photographers.find(x => x.id === idPhotograph);

    console.log("Le photographe trouvé par son id : ")
    console.log(onePhotographer)

    return onePhotographer
}


// Renvoie les données et les fait apparaitre dans le dom dans ".photographer-header"
async function displayData(onePhotographer)
{
    const photographersSection = document.querySelector(".photograph-header");

    // je prend la fonction pour afficher les les infos de 1 photographe et je lui passe les données du photographe
    const photographerModel = onePhotographFactory(onePhotographer);

    const getPhotographe = photographerModel.getPhotographePage();

    // photographersSection.appendChild(getPhotographe);
    photographersSection.insertAdjacentHTML('beforeEnd', getPhotographe);

}


async function init()
{
    // Récupère les datas des photographes
    const { onePhotographer } = await getPhotograph();

    // console.log( onePhotographer );
    
    displayData(onePhotographer);
}

init();

// Fonction pour afficher la page de 1 photographe
function onePhotographFactory(onePhotographer)
{
    console.log("test")
    console.log(onePhotographer)

    const { name, id, portrait, city, country, tagline, price } = onePhotographer;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getPhotographePage = () => `
                <div>

                    <div class="">
                        <h2>${name}</h2>
                        <h3>${city}, ${country}</h3>
                        <p class="tagline">${tagline}</p>
                    </div>

                    <div class="">
                        Contactez moi
                    </div>

                    <div class="">
                        <img src="${picture}" alt="Photo de ${name}">
                    </div>

                </div>`;

    return { name, id, picture, city, country, tagline, price, getPhotographePage};
}