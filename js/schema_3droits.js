const detail = document.querySelectorAll(".schema_3droits details");


/*créer une fonction qui parcoure la liste des balises details dans schema_3droits et qui  teste click et open*/

function listedetail() {
    for (let i = 0 ; i < detail.length ; i++){
        console.log("OK");
        detail[i].addEventListener ("click", () => {
            let iclick = i;
            console.log(detail[i]);
            for (let i = 0 ; i < detail.length ; i++){
                if (detail[iclick] != detail[i]) {
                detail[i].removeAttribute("open");
            }
        }
    })
}
}


listedetail();



