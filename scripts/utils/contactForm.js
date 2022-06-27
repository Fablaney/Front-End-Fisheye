function displayModal()
{
    document.querySelector(".contact_modal").classList.remove("d-none")

    // nom du photographe
    let name = onePhotographer.name

    const getModalContent = () => {
     
         return `<div class="modal">

                    <h2 class="w-100">Contactez-moi</h2>

                    <h3 class="w-100">${name}</h3>

                    <img src="assets/icons/close.svg" onclick="closeModal()"/>

                    <form id="form-modal">

                        <div>
                            <label for="prenom">Prénom</label>
                            <input name="prenom" id="prenom" type="text" required/>
                        </div>

                        <div>
                            <label for="nom">Nom</label>
                            <input name="nom" id="nom" type="text" required/>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input name="email" id="email" type="email" required/>
                        </div>

                        <div>
                            <label for="message">Votre message</label>
                            <textarea name="message" id="message" type="text" required></textarea>
                        </div>

                        <button class="contact_button" onclick="validateModal()">Envoyer</button>

                    </form>

                </div>`
    }

    const modalDOM = getModalContent()

    // j'insere le bloc html  du formulaire dans la modale
    document.querySelector(".contact_modal").innerHTML = modalDOM;
 
}

function validateModal()
{
    submit(e) => {e.preventDefault()} 

    let formNom = document.querySelector("#nom")
    console.log(formNom)
    
    let formPrenom = document.querySelector("#prenom")
    console.log(formPrenom)

    let formEmail = document.querySelector("#email")
    console.log(formEmail)

    let formMessage = document.querySelector("#message")
    console.log(formMessage)
} 

// fermeture de la modale
function closeModal()
{
    document.querySelector(".contact_modal").classList.add("d-none")
}