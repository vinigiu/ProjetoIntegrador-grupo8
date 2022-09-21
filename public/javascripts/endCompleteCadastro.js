const cep = document.getElementById("cep");

cep.addEventListener("blur", (e) => {
  let Cep = document.getElementById("cep").value;
  let search = cep.value.replace("-", "");

  fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then((response) => {
      response.json().then((data) => {
        document.getElementById("endereco").value = data.logradouro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
      });
    })
    .catch((error) => console.log(error));
});
