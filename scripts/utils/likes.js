function addordislike(id)
{
    dbg("je rentre dans la fonction")
    dbg("je récupere id = " + id)

    dbg("j'ajoute la class liked au coeur ")
    document.querySelector("#likes-"+id+" i").classList.add("liked")
  
    dbg("j'ajoute + 1 aux likes de l'image ")
    document.querySelector("#likes-"+id).innerHTML ++

    dbg(typeof(document.querySelector("#likes-"+id)))

    dbg("j'ajoute + 1 au compte global")
    document.querySelector(".likes-count").innerHTML ++
}