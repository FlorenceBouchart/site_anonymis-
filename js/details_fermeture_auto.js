const det = document.querySelectorAll("#sidebar-menu .details_navbar");


/*créer une fonction qui parcoure la liste des balises details dans schema_3droits et qui  teste click et open*/

function listedet() {
    for (let i = 0 ; i < det.length ; i++){
        console.log("OK");
        det[i].addEventListener ("click", () => {
            let iclick = i;
            console.log(det[i]);
            for (let i = 0 ; i < det.length ; i++){
                if (det[iclick] != det[i]) {
                det[i].removeAttribute("open");
            }
        }
    })
}
}


listedet();