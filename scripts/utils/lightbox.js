/**
 * @property {HTMLElement} element
 */
class LightBox
{
    /**
     * @param {string} datas url de l'image
     */
    constructor(datas)
    {
        this.datas = datas
        
        this.buildDOM()
        this.loadImage(datas)
        document.body.appendChild(this.element)
    }

    static init()
    {
        const links = document.querySelectorAll('img[src$=".png"], img[src$=".jpg"], img[src$=".jpeg"]')
            console.log(links)

            .forEach(link => link.addEventListener('click', e =>
            {
                console.log(e)
                alert("test")
                e.preventDefault()
                new LightBox(e.currentTarget.getAttribute('href'))
            }))
    }
    
 

    /**
     * @param {string} datas url de l'image
     */
    loadImage(datas)
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

        image.src = datas
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
     * @param {string} datas URL de l'image
     * @return {HTMLElement}
     */
    buildDOM(datas)
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

        let i = this.images.findIndex(image => image === this.datas)

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

        let i = this.images.findIndex(image => image === this.datas)

        if (i === this.images.length - 1)
        {
            i = -1
        }

        this.loadImage(this.images[i + 1])
    }
}

LightBox.init();