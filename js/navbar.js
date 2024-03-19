        fetch("http://localhost:8000/html/navbar.html").then(response => {
        return response.text()
        }).then(data => {
            document.querySelector("#navbar").innerHTML = data;
        });



