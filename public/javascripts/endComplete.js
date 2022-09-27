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

const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })()
