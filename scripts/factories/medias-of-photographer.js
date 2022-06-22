// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;
    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    // dbg( dataMedias)
    
  
    // dbg( dataMedias.likes)

    // dbg(typeof({likes}))
    // dbg(typeof(likes))

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;
  
    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => {
        if(video !== undefined){
            return `
                <div class="image">
                    <span>
                        <video src="${vid}" type="video/mp4"></video>
                    </span>
                </div>`
        }
        else
        {
            return `
                <div class="image">
                    <span>
                        <img src="${img}" alt="">
                    </span>
                </div>`
        ;}
    }

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}