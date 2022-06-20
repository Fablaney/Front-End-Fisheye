class LightBox
{
    static init()
    {
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]')
            .forEach(link => link.addEventListener('click', e =>
            {
                e.preventDefault()
                new LightBox(e.currentTarget.getAttrribute('href'))
            }))
    }

    /**
     * @param {string} url url de l'image
     */
    constructor(url)
    {
        const element = this.buildDom(url)
        document.body.appendChild(element)
    }


    // Bloc html à afficher dans la lightbox
    /* <div class="lightbox-background">

        <div class="lightbox">

            <button class="lightbox__close"><i class="fas fa-times"></i></button>
            <button class="lightbox__next"><i class="fas fa-angle-right"></i></button>
            <button class="lightbox__prev"><i class="fas fa-angle-left"></i></button>

            <div class="lightbox__container">
                <img src="chemin/vers/image.jpg" alt="">
                <img src="https://picsum.photos/seed/picsum/1920/1080" alt="">
            </div>

        </div>

    </div>  */

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDom(url)
    {
        const dom = document.createElement('div')
        dom.classList.add('lightbox-background')
        dom.innerHTML = `
            <div class="lightbox">

                <button class="lightbox__close"><i class="fas fa-times"></i></button>
                <button class="lightbox__next"><i class="fas fa-angle-right"></i></button>
                <button class="lightbox__prev"><i class="fas fa-angle-left"></i></button>

                <div class="lightbox__container">
                    <!-- <img src="chemin/vers/image.jpg" alt=""> -->
                    <img src="https://picsum.photos/seed/picsum/1920/1080" alt="">
                </div>

            </div>`;

        return dom
    }
}
LightBox.init()