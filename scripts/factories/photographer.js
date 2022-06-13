// Fonction pour afficher les cards des photographes
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

// Fonction pour afficher la page de 1 photographe
function onePhotographFactory(onePhotographer)
{
    console.log("test")
    console.log(onePhotographer)

    const { name, id, portrait, city, country, tagline, price } = onePhotographer;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getPhotographe = () => `
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

    return { name, id, picture, city, country, tagline, price, getPhotographe};
}