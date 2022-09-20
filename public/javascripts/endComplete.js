const cep = document.getElementById("cep");


cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    
    fetch(`https://viacep.com.br/ws/${Cep}/json/`)
        .then((response) => {
            response.json()
                .then(data => {
                    document.getElementById("address").value = data.logradouro
                    document.getElementById("state").value = data.uf
                    document.getElementById("bairro").value = data.bairro
                    
                    
                })
        })
        .catch(error => console.log(error))
})