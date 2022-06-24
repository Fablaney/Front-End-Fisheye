// Fonction pour afficher les medias de 1 photographe
function photographerFactoryMedias(dataMedias, dataPhotographer)
{
    const { name } = dataPhotographer;
    const { date, id, photographerId, price, title, image, video, likes } = dataMedias;

    // console;log( dataMedias)
    
  
    // console;log( dataMedias.likes)

    // console;log(typeof({likes}))
    // console;log(typeof(likes))

    const img = `assets/photographers/${name}/${image}`;
    const vid = `assets/photographers/${name}/${video}`;
  
    // Fonction de la création des cartes des photographes
    const getMediasCardDOM = () => {
        if(video !== undefined)
        {
            return `
                <div class="medias-cards">

                    <a href="#">
                        <div class="vid cards" onclick="openLightBox(${id})">
                            <video src="${vid}" type="video/mp4"></video>
                        </div>
                    </a>

                    <div class="name-likes">
                        <div class="title">
                            ${title}
                        </div>

                        <div class="likes" id="likes-${id}">
                            <span>${likes}</span> <i class="fas fa-heart addlike" id="heart-${id}" onclick="addordislike(${id})"></i>
                        </div>
                    </div>
                    
                </div>`
        }
        else
        {
            return `
                <div class="medias-cards">

                    <a href="#">
                        <div class="img cards" onclick="openLightBox(${id})">
                            <img class="w-100 img-lightbox" src="${img}" alt="Photo de ${name}">
                        </div>
                    </a>

                    <div class="name-likes">
                        <div class="title">
                            ${title}
                        </div>

                        <div class="likes" id="likes-${id}">
                            <span>${likes}</span> <i class="fas fa-heart addlike" id="heart-${id}" onclick="addordislike(${id})"></i>
                        </div>
                    </div>
                    
                </div>`
        ;}
    }

    return { name, date, id, photographerId, price, title, image, video, likes, getMediasCardDOM };
}