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
        // image
        console.log(displayimg)

        // id de l'image
        let imgId = displayimg.id
        console.log(imgId)

        // titre du media
        let title = displayimg.title
        console.log(title)

        // titre de l'image
        let image = displayimg.image
        console.log(image)

        // titre de la video
        let video = displayimg.video
        console.log(video)

        // nom du photographe
        let name = onePhotographer.name
        console.log(name)


        // Je récupere le nom du photographe et le nom de l'image pour créer le chemin
        const img = `assets/photographers/${name}/${image}`;
        const vid = `assets/photographers/${name}/${video}`;

        // Fonction de la création des cartes des photographes
        const getLightBox = () => {
            if(video !== undefined)
            {
                return `<video src="${vid}" type="video/mp4" data-id="${imgId}"></video>`
            }
            else
            {
                return `<img class="w-100 img-lightbox" src="${img}" alt="Photo de ${name}" data-id="${imgId}">`
            ;}
        }
        // return getLightBox;

        const lighboxDOM = getLightBox()

        // j'insere le bloc html image ou vidéo dans la div d ela lightbox
        lightboxcontainer.insertAdjacentHTML('beforeEnd', lighboxDOM);
    }
    displayLightBox()
}


// je ferme le lightbox
function closeLightBox()
{
    lightboxcontainer.innerHTML="";

    document.querySelector(".lightbox-container").classList.add("d-none")

    // lightboxcontainer.insertAdjacentHTML('beforeEnd', lighboxDOM);
}