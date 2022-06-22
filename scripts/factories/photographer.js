// function photographerFactory(data)
// {
//     const { name, portrait, city, country, tagline, price } = data;

//     // console;log.log("photographerFactory retourne:");
//     // console;log.log({ name, portrait, city, country, tagline, price });

//     const picture = `assets/photographers/${name}/${portrait}`;

//     function getUserCardDOM()
//     {
//         // Soluce 1

//         // creation des elements du dom
//         const article = document.createElement( 'article' );
//         const a = document.createElement( 'a' );
//         const img = document.createElement( 'img' );
//         const nomPhotographe = document.createElement( 'h2' );
//         const location = document.createElement( 'p' );
//         const texte = document.createElement( 'p' );
//         const prix = document.createElement( 'p' );

//         // insertion de la variable dans les elements crées
//         a.setAttribute("href", "lien vers la page");
//         img.setAttribute("src", picture);
//         nomPhotographe.textContent = name;
//         location.textContent = [city, ", " + country];
//         texte.textContent = tagline;
//         prix.textContent = [price + "€/jour"];
    
//         // Fait apparaitre l'enfant dans le parent
//         // je crée le lien
//         article.appendChild(a);
//         // j'insere l'image dans le lien
//         a.appendChild(img);
//         article.appendChild(nomPhotographe);
//         article.appendChild(location);
//         article.appendChild(texte);
//         article.appendChild(prix);

//         // on voit le resultat produit

//         console;log.log(article)

//         // on retourne article
//         return (article);
//     }

//     // On dit à getUserCardDOM d'utiliser les variables dont il aura besoin
//     return { name, picture, city, country, tagline, price, getUserCardDOM }
// }


function photographerFactory(data)
{
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${name}/${portrait}`;
    
    // Fonction de la création des cartes des photographes
    const getUserCardDOM = () => `
                <article>
                    <a href= "photographer.html?${id}">
                        <img src="${picture}" alt="Photo de ${name}">
                    </a>
                    <div class=info>
                        <h2>${name}</h2>
                        <h3>${city}, ${country}</h3>
                        <p>${tagline}</p>
                        <span>${price}€/jour</span>
                    </div>
                </article>`;
    
    return { name, id, picture, city, country, tagline, price, getUserCardDOM};
}