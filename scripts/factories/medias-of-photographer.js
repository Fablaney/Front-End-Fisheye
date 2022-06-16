// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;

    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;

    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => {
        if(video !== undefined){
            return `
                <div class="medias-cards">

                    <div class="vid">
                       
                        <video src="${vid}" type="video/mp4" controls>
                         
                        </video>
                    </div>

                    <div class="name-likes">
                        <div class="title">
                            ${title}
                        </div>
                        <div class="likes">
                            ${likes} <i class="fas fa-heart addlike" onclick="addordislike()"></i>
                        </div>
                    </div>
                    
                </div>`
        }
        else
        {
            return `
                <div class="medias-cards">
        
                    <div class="img">
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
                    
                </div>`
        ;}
    }

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}