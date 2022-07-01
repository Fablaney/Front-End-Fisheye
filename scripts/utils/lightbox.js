// je récupere la lightbox pour y inserer l'image
const lightboxcontainer = document.querySelector(".lightbox-content")


// j'ouvre le lightbox
function openLightBox(id)
{
    // je change la class en d-block pour ouvrir la modale
    document.querySelector(".lightbox-container").classList.remove("d-none")

    // affichage du contenu de la lightbox
    function displayLightBox()
    {
        // je crée un tableau vide qui pendra la valeur les medias non triés ou de smedias triés
        let mediasOfLightbox = []
   
        if ( mediasSorteds.length > 0 )
        {
            mediasOfLightbox = mediasSorteds
        }
        else
        {
            mediasOfLightbox = mediasOfPhotographer
        }
        
        // je réinitialise les index des images
        for (let i = 0; i< mediasOfLightbox.length; i++)
        {
            mediasOfLightbox[i].index = i;
        }

        // je récupere l'image qui à été cliquée en retriant "mediasOfLightbox" par l'id de l'image
        let lightBoxMedias = mediasOfLightbox.find(media => media.id === id)

        let currentIndex = lightBoxMedias.index

        // je récupere le click sur les boutons prev et next et navigue sur les indexs
        function prev()
        {
            if (currentIndex === 0)
            {
                currentIndex = mediasOfLightbox.length - 1
            }
            else
            {
                currentIndex--
            }

            displayMedia()
        } 
        function next()
        {
            if (currentIndex === mediasOfLightbox.length -1)
            {
                currentIndex = 0
            }
            else
            {
                currentIndex++
            }
        
            displayMedia()
        }

        function displayMedia()
        {
            lightBoxMedias = mediasOfLightbox[currentIndex]

            // titre
            let titre = lightBoxMedias.title

            // titre de l'image
            let image = lightBoxMedias.image

            // titre de la video
            let video = lightBoxMedias.video

            // nom du photographe
            let name = onePhotographer.name

            // Je récupere le nom du photographe et le nom de l'image pour créer le chemin
            const img = `assets/photographers/${name}/${image}`;
            const vid = `assets/photographers/${name}/${video}`;

            // Fonction de la création des cartes des photographes
            const getLightBox = () => {
                if(video !== undefined)
                {
                    return `<video src="${vid}" type="video/mp4" controls aria-label="${titre}" tabindex="2"></video>
                            <div class="title-lightbox">${titre}</div>`
                }
                else
                {
                    return `<img src="${img}" alt="Photo de ${name}" aria-label="${titre}" tabindex="2">
                            <div class="title-lightbox">${titre}</div>`
                }
            }

            const lighboxDOM = getLightBox()

            // j'insere le bloc html image ou vidéo dans la div de la lightbox
            lightboxcontainer.innerHTML = lighboxDOM;
        }
        displayMedia()  

        function listener()
        {
            document.querySelector(".lightbox__prev").addEventListener("click", () => {
                prev()
            })

            document.querySelector(".lightbox__next").addEventListener("click", () => {
                next()
            })

            document.addEventListener('keyup', (el) =>{
                switch(el.key)
                {
                    case "ArrowLeft" :
                        prev(); 
                        break; 
                    case "ArrowRight": 
                        next();
                        break; 
                    case "Escape" : 
                        closeLightBox(); 
                        break; 
                }
                console.log(el.key)
            })
        }
        listener()
    }
    displayLightBox()
}


// je ferme le lightbox
function closeLightBox()
{
    // je vide la lightbox
    lightboxcontainer.innerHTML = "";

    // le ferme la lightbox
    document.querySelector(".lightbox-container").classList.add("d-none")
}