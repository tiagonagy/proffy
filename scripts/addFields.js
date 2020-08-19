//Procurar o botão e executar uma função para clonar
document.querySelector("#add-time").addEventListener('click', cloneField)

// função que clona os inputs #add-time
function cloneField(){
    //duplicar os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // pegando todos o inputs de tela
    const fields = newFieldContainer.querySelectorAll('input')
    //limpar o campo antes de colocan na tela
    fields.forEach(function(field){
        field.value = ""
    })
    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

