window.addEventListener('load', ()=> {
    let botaoCEP = document.querySelector('#button')
    let botaoComprar = document.querySelector('#buy-button')
    
    botaoCEP.addEventListener('mouseover', ()=> {
        botaoCEP.style.cursor = "pointer"
    })

    botaoComprar.addEventListener('mouseover', ()=> {
        botaoComprar.style.cursor = "pointer"
    })
})