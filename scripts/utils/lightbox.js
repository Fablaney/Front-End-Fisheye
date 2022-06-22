// j'ouvre le lightbox
function openLightBox()
{
    document.querySelector(".lightbox-container").classList.remove("d-none")

    // affichage du contenu de la lightbox
    function displayLightBox()
    {
        const lightboxconainer = document.querySelector(".lightbox__container")
        console.log(lightboxconainer)
    }
    displayLightBox()
}


// je ferme le lightbox
function closeLightBox()
{
    document.querySelector(".lightbox-container").classList.add("d-none")
}