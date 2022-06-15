// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;

    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;

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
                    ${likes} <i class="fas fa-heart addlike" onclick="addordislike()"></i>
                </div>
            </div>
            
        </div>
        `;

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}