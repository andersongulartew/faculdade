fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data=> {
    preencherLista2(data)
    preencherLista(data)
    
})


function preencherLista2(data){
    const listaContainer = document.getElementById('lista-container')
    const ul =document.createElement('ul')
    data.forEach(item => {
        const li = document.createElement('li') // cria o li(itens da lista)
        li.textContent = item.id
        ul.appendChild(li) // joga para dentro da UL
    });

    listaContainer.appendChild(ul)
}

function preencherLista(data){
    const listaContainer = document.getElementById('lista-container')
    const ul =document.createElement('ul')
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        ul.appendChild(li)
    });
    listaContainer.appendChild(ul)
}