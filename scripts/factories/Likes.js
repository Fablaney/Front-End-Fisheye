// Fonction pour afficher les cards de tous les photographes
function photographerFactoryLikes(dataPhotographer, dataMedias)
{
    const { price } = dataPhotographer

    let totalLikes = 0

    // soluce 1
    // je mape les data
    // let dataMediasLikes = dataMedias.map(likesExtract => likesExtract.likes);

    // dbg(dataMediasLikes)

    // Je boucle sur dataMedias pour récuperer le nombre de lignes
    // dataMediasLikes.forEach((dataMedialike) => {

    //     // dbg(dataMedialike)
   
    //     totalLikes += dataMedialike
    // });

    // soluce 2 less is more
    // filtrer et ajouter chaque dataMedialike.likes à totalLikes
    dataMedias.filter(dataMedialike => { totalLikes += dataMedialike.likes });

    // dbg("Total likes = " + totalLikes)

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