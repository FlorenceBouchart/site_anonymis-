
const detail = document.querySelectorAll('details');

function listedetail() {
    for (let i = 0 ; i < detail.length ; i++){
        detail[i].addEventListener ("click", () => {
            let iclick = i;
            console.log(detail[i]);
            for (let i = 0 ; i < detail.length ; i++){
                detail[i].removeAttribute("open");
            }
        })
    }
}

listedetail();