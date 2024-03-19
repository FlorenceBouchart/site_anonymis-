fetch("http://localhost:8000/html/footer.html").then(response => {
    return response.text()
    }).then(data => {
        document.querySelector("#footer").innerHTML = data;
    });