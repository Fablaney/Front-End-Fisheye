// Fonction pour afficher les cards de tous les photographes
function photographerFactory(data)
{
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getUserCardDOM = () => `
                <article>
                    <a href="photographer.html?id=${id}">
                        <img class="portrait" src="${picture}" alt="Photo de ${name}">
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
                        <img class="portrait" src="${picture}" alt="Photo de ${name}">
                    </a>
                </div>
              `;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}

// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;

    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;

    // console.log("console du factory media")
    // console.log( image )
    // console.log( video )

    // if ( image == true )
    // {

    //     const getImagesCardDOM = () => `
    //     <div class="img-card">
    //         <img class="w-100" src="${img}" alt="Photo de ${name}">
    //     </div>
    //     `;

    //     return { name, date, id, likes, photographerId, price, title, image, likes, getImagesCardDOM};
    // }
    // if ( video == true )
    // {
    //     const getVideosCardDOM = () => `
    //     <div class="video-card">
    //         <video src="${vid}" controls></video>
    //     </div>
    //     `;

    //     return { name, date, id, likes, photographerId, price, title, video, likes, getVideosCardDOM};
    // }

    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => `
        <div class="medias-cards">

            <div class="img-vid">
                <img class="w-100" src="${img}" alt="Photo de ${name}">
            </div>

            <div class="name-likes">
                <div class="title">
                    ${title}
                </div>
                <div class="likes">
                    ${likes} <i class="fas fa-heart"></i>
                </div>
            </div>
            
        </div>
        `;

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}


// Fonction pour afficher les cards de tous les photographes
function photographerFactoryLikes(dataPhotographer, dataMedias)
{
    const { price } = dataPhotographer;

    const { id, likes } = dataMedias;


    // Fonction de la création des cartes des photographes
    const getLikesDOM = () => `
               
                    <div class="total-likes">

                        <div class="likes-count mr-2">   
                            ${likes} 
                        </div>

                        <i class="fas fa-heart"></i>

                    </div>

                    <div class="price">

                        <div class="price">${price}€/jour</div>   
    
                    </div>
                `;
    
    return { id, likes, price, getLikesDOM};
}