function displayModal()
{
    // J'enleve le d-none sur la modale
    document.querySelector(".contact_modal").classList.remove("d-none")

    // document.querySelector(".header").setAttribute('aria-hidden', true);

    // document.querySelector("#main").classList.add("d-none")
    // document.querySelector(".header").classList.add("d-none")
    // document.querySelector("#main").setAttribute('aria-hidden', true);
    document.querySelector(".contact_modal").setAttribute('aria-hidden', false);

    // nom du photographe
    let name = onePhotographer.name

    const getModalContent = () => {
     
         return `<div class="modal" role="dialog" tabindex="1" aria-labelledby="2">

                    <header>

                        <div aria-label="Contact Me ${name}" tabindex="2">
                            <h2 class="w-100">Contactez-moi</h2>
                            <h3 class="w-100">${name}</h3>
                        </div>
                        
                        <button onclick="closeModal()" aria-label="Close Contact Form" tabindex="12">
                            <img src="assets/icons/close.svg"/>
                        </button>

                    </header>

                    <form method="post" id="form-modal">

                        <div>
                            <label for="prenom" tabindex="3">Prénom</label>
                            <input name="prenom" id="prenom" type="text" required aria-label="First Name" tabindex="4"/>
                        </div>

                        <div>
                            <label for="nom" tabindex="5">Nom</label>
                            <input name="nom" id="nom" type="text" required aria-label="Last Name" tabindex="6"/>
                        </div>

                        <div>
                            <label for="email" tabindex="7">Email</label>
                            <input name="email" id="email" type="email" required aria-label="Email" tabindex="8">
                        </div>

                        <div>
                            <label for="message" tabindex="9" >Votre message</label>
                            <textarea name="message" id="message" type="text" required aria-label="Your message" tabindex="10"></textarea>
                        </div>

                        <button class="contact_button" onclick="validateModal()" aria-label="Send" tabindex="11">Envoyer</button>

                    </form>

                </div>`
    }

    const modalDOM = getModalContent()

    // j'insere le bloc html  du formulaire dans la modale
    document.querySelector(".contact_modal").innerHTML = modalDOM

    // J'empeche l'envoie du formulaire
    let form = document.getElementById("form-modal")
    form.addEventListener('submit', function(e)
    { 
        e.preventDefault()
    })

    // acessibilité au clavier
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
                case "Enter": 
                    validateModal()
                    break;
                case "Escape" : 
                    closeModal()
                    break;
            }
            console.log(el.key)
        })
    }
    listener()
}


function validateModal()
{
    let formNom = document.querySelector("#nom").value
    let formPrenom = document.querySelector("#prenom").value
    let formEmail = document.querySelector("#email").value
    let formMessage = document.querySelector("#message").value

    // Je récupere la valeur du champ et l'affiche en console
    if ( formNom.length > 0 && formPrenom.length > 0 && formEmail.length > 0 && formMessage.length > 0 && formMessage.length != "    ")
    {
        console.log("Nom : " + formNom)
        console.log("Prénom : " + formPrenom)
        console.log("Email : " + formEmail)
        console.log("Message: " + formMessage)

        closeModal()
    }
} 


// fermeture de la modale
function closeModal()
{
    document.querySelector(".contact_modal").classList.add("d-none")

}
