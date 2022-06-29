function displayModal()
{
    // J'enleve le d-none sur la modale
    document.querySelector(".contact_modal").classList.remove("d-none")

    document.querySelector('.header').setAttribute('aria-hidden', 'true')
    document.querySelector('#main').setAttribute('aria-hidden', 'true')

    // nom du photographe
    let name = onePhotographer.name

    const getModalContent = () => {
     
         return `<div class="modal">

                    <h2 class="w-100">Contactez-moi</h2>

                    <h3 class="w-100">${name}</h3>

                    <img src="assets/icons/close.svg" onclick="closeModal()"/>

                    <form method="post" id="form-modal">

                        <div>
                            <label for="prenom">Prénom</label>
                            <input name="prenom" id="prenom" type="text" required aria-label="First Name"/>
                        </div>

                        <div>
                            <label for="nom">Nom</label>
                            <input name="nom" id="nom" type="text" required aria-label="Last Name"/>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input name="email" id="email" type="email" required aria-label="Email">

                        <div>
                            <label for="message">Votre message</label>
                            <textarea name="message" id="message" type="text" required aria-label="Your message"></textarea>
                        </div>

                        <button class="contact_button" onclick="validateModal()" aria-label="Send">Envoyer</button>

                    </form>

                </div>`
    }

    const modalDOM = getModalContent()

    // j'insere le bloc html  du formulaire dans la modale
    document.querySelector(".contact_modal").innerHTML = modalDOM;
 

    let form = document.getElementById("form-modal")

    // J'empeche l'envoie du formulaire
    form.addEventListener('submit', function(e)
    { 
        e.preventDefault()
    })



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
                    closeModal()
                    document.querySelectorAll("body *:not(dialog)").removeAttribue('aria-hidden')
                    break; 
            }
            console.log(el.key)
        })
    }
    listener()
}

let formNom
let formPrenom
let formEmail
let formMessage

function validateModal()
{
    formNom = document.querySelector("#nom").value
    formPrenom = document.querySelector("#prenom").value
    formEmail = document.querySelector("#email").value
    formMessage = document.querySelector("#message").value

    // Je récupere la valeur du champ et l'affiche en console
    if ( formNom.length > 0 && formPrenom.length > 0 && formEmail.length > 0 && formMessage.length > 0 )
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
