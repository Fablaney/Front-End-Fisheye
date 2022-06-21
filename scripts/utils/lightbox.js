/**
 * @property {HTMLElement} element
 */
class LightBox
{
    static init()
    {
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]')
            .forEach(link => link.addEventListener('click', e =>
            {
                alert("test")
                e.preventDefault()
                new LightBox(e.currentTarget.getAttribute('href'))
            }))
    }

    /**
     * @param {string} url url de l'image
     */
    constructor(url)
    {
        this.element = this.buildDOM(url)
        this.loadImage(url)
        document.body.appendChild(this.element)
    }

    /**
     * @param {string} url url de l'image
     */
    loadImage(url)
    {
        const image = new Image()

        const container = this.element.querySelector('.lightbox__container')
        
        const loader = document.createElement('div')

        loader.classList.add('lightbox-loader')

        container.appendChild(loader)

        image.onload = function()
        {
            console.log('chargé')
        }

        image.src = url
    }

    // Bloc html à afficher dans la lightbox
    /* <div class="lightbox-background">

        <div class="lightbox">

            <button class="lightbox__close"><i class="fas fa-times"></i></button>
            <button class="lightbox__next"><i class="fas fa-angle-right"></i></button>
            <button class="lightbox__prev"><i class="fas fa-angle-left"></i></button>

            <div class="lightbox__container">
                <div class="lightbox-loader"></div>
                <img src="${url}" alt="">
                <img src="https://picsum.photos/seed/picsum/1920/1080" alt="">
            </div>

        </div>

    </div>  */

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDOM(url)
    {
        const dom = document.createElement('div')
        dom.classList.add('lightbox-background')
        dom.innerHTML = `
            <div class="lightbox">

                <button class="lightbox__close"><i class="fas fa-times"></i></button>
                <button class="lightbox__next"><i class="fas fa-angle-right"></i></button>
                <button class="lightbox__prev"><i class="fas fa-angle-left"></i></button>

                <div class="lightbox__container">
                    <div class="lightbox-loader"></div>
                </div>

            </div>`;

        return dom
    }


    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    prev (e)
    {
        e.preventDefault()

        let i = this.images.findIndex(image => image === this.url)

        if (i === 0)
        {
            i = this.images.length
        }

        this.loadImage(this.images[i - 1])
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    next (e)
    {
        e.preventDefault()

        let i = this.images.findIndex(image => image === this.url)

        if (i === this.images.length - 1)
        {
            i = -1
        }

        this.loadImage(this.images[i + 1])
    }
}

LightBox.init();