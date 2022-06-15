// Fonction pour afficher les cards de tous les photographes
function photographerFactoryLikes(dataPhotographer, dataMedias)
{
    const { price } = dataPhotographer

    // const { id, likes } = dataMedias

    // const likes = dataMedias
    let totalikes = 0
    totalikes = likes.concat(dataMedias)
    dbg(totalikes);

    // Fonction de la création des cartes des photographes
    function getLikesDOM() {
        return `
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
    }
    
    return { id, likes, price, getLikesDOM};
}