// Fonction pour afficher les cards de tous les photographes
function photographerFactory(data)
{
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getUserCardDOM = () => `
                <article>
                    <a href="photographer.html?id=${id}">
                        <img src="${picture}" alt="Photo de ${name}">
                    </a>
                    <div class="info">
                        <h2>${name}</h2>
                        <h3>${city}, ${country}</h3>
                        <p class="tagline">${tagline}</p>
                        <p class="price">${price}€/jour</p>
                    </div>
                </article>`;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}

// Fonction pour afficher le header de 1 photographe
function photographerFactorySingle(data)
{
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getUserCardDOM = () => `
                <div class="single-photograph-text">
                    <h2>${name}</h2>
                    <h3>${city}, ${country}</h3>
                    <p class="tagline">${tagline}</p>
                </div>

                <div class="justify-center">
                    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                </div>

                <div class="justify-center">
                    <a class="single-photograph-img" href="photographer.html?id=${id}">
                        <img src="${picture}" alt="Photo de ${name}">
                    </a>
                </div>
              `;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}

// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const  {name } = dataPhotographer;

    const { date, id, likes, photographerId, price, title, image, video } = dataMedias;

    const photo = `assets/photographers/${name}/${image}`;

    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => `
        <div class="">
            <img class="w-100" src="${photo}" alt="Photo de ${name}">
        </div>
        `;

    return { name, date, id, likes, photographerId, price, title, image, video, getMediasCardDOM};
}