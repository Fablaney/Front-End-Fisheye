// Je vais lire dans data les données des photographes sous forme de tableau / API / base de données
async function getPhotographers()
{
    // va chercher l'api
    let response = await fetch('/data/photographers.json');

    // lire le corps de réponse et analyser en JSON
    let photographers = await response.json(); 

    // affiche les photographes en console
    // console.log(photographers.photographers);
    // affiche les medias en console
    // console.log(photographers.media);

    return photographers
}

// Renvoie les données et les fait apparaitre dans le dom dans ".photographer_section"
async function displayData(photographers)
{
    const photographersSection = document.querySelector(".photographer_section");

    // Je boucle sur photographers pour afficher les cards de chaque photographe
    photographers.forEach((photographer) => {

        // je prend la fonction pour afficher les cards et je lui passe les données des photographes
        const photographerModel = photographerFactory(photographer);

        const userCardDOM = photographerModel.getUserCardDOM();

        // photographersSection.appendChild(userCardDOM);
        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);
    });
};


async function init()
{
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // console.log(photographers);
    
    displayData(photographers);
}

init();