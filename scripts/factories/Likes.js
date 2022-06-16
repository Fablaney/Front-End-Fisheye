// Fonction pour afficher les cards de tous les photographes
function photographerFactoryLikes(dataPhotographer, dataMedias)
{
    const { price } = dataPhotographer

    let dataMediasLikes = dataMedias

    dbg(dataMediasLikes)

    let totalLikes = 0
    dbg("Total de likes = " + totalLikes)

    // Je boucle sur dataMedias pour récuperer le nombre de lignes
    dataMediasLikes.forEach((dataMedialike) => {

        dbg( dataMedialike.likes )
        // dbg( typeof(dataMedialike.likes) )

        // dataMedialike.likes = Number(dataMedialike.likes)

        totalLikes += dataMedialike.like
    });

    dbg("Total likes = " + totalLikes)

    let likes = totalLikes
    
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