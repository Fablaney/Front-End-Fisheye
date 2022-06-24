// je récupere la lightbox pour y inserer l'image
const lightboxcontainer = document.querySelector(".lightbox-content")
// console.log(lightboxcontainer)

// j'ouvre le lightbox
function openLightBox(id)
{
    // console.log(id)

    // je change la class en d-block pour ouvrir la modale
    document.querySelector(".lightbox-container").classList.remove("d-none")

    // affichage du contenu de la lightbox
    function displayLightBox()
    {
        // console.log(mediasOfPhotographer)

        // je récupere l'image qui à été cliquée en retriant "mediasOfPhotographer" par l'id de l'image
        let displayimg = mediasOfPhotographer.find(media => media.id === id)

        let currentIndex = displayimg.index

        // image
        console.log(displayimg)

        document.querySelector(".lightbox__prev").addEventListener("click", () => { 
            console.log(currentIndex)

            if (currentIndex === 0)
            {
                currentIndex = mediasOfPhotographer.length - 1
            }
            else
            {
                currentIndex--
            }

            displayMedia()
        })
        document.querySelector(".lightbox__next").addEventListener("click", () => {
            console.log(currentIndex)

            if (currentIndex === mediasOfPhotographer.length -1)
            {
                currentIndex = 0
            }
            else
            {
                currentIndex++
            }

            displayMedia()
        })

        function displayMedia()
        {
            displayimg = mediasOfPhotographer[currentIndex]

            console.log()
    
            // id de l'image
            let imgId = displayimg.id
            // console.log(imgId)
    
            // titre du media
            let title = displayimg.title
            // console.log(title)

            // titre de l'image
            let image = displayimg.image
            // console.log(image)
    
            // titre de la video
            let video = displayimg.video
            // console.log(video)
    
            // titre de la video
            let mediaIndex = displayimg.index
            // console.log(mediaIndex)
    
            // nom du photographe
            let name = onePhotographer.name
            // console.log(name)
    
            // Je récupere le nom du photographe et le nom de l'image pour créer le chemin
            const img = `assets/photographers/${name}/${image}`;
            const vid = `assets/photographers/${name}/${video}`;

            // Fonction de la création des cartes des photographes
            const getLightBox = () => {
                if(video !== undefined)
                {
                    return `<video class="w-100" src="${vid}" type="video/mp4" controls></video>`
                }
                else
                {
                    return `<img class="" src="${img}" alt="Photo de ${name}">`
                }
            }
            const lighboxDOM = getLightBox()

            // j'insere le bloc html image ou vidéo dans la div de la lightbox
            lightboxcontainer.innerHTML = lighboxDOM;
            
        }
        displayMedia()  
    }
    displayLightBox()
}


// je ferme le lightbox
function closeLightBox()
{
    // je vide la lightbox
    lightboxcontainer.innerHTML="";

    // le ferme la lightbox
    document.querySelector(".lightbox-container").classList.add("d-none")
}