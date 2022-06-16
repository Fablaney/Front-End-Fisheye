// Fonction pour afficher les cards de tous les photographes
function photographerFactoryLikes(dataPhotographer, dataMedias)
{
    const { price } = dataPhotographer

    const { likes } = dataMedias

    dbg(dataMedias)

    // addition des likes
    const totalLikes = 0;

    // Je boucle sur dataMedias pour récuperer le nombre de lignes
    dataMedias.forEach((dataMedia) => {

        dbg(dataMedia.likes)
        let totalLikes = dataMedia.likes

        return totalLikes

    });

    const sumOfLikes = totalLikes.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            totalLikes
    );
    
    dbg("Sum Ok Likes :" + sumOfLikes)

    // dbg(totalikes)

    // Fonction de la création des cartes des photographes
    const getLikesdDOM = () => `
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
    
    return { likes, price, getLikesdDOM};
}