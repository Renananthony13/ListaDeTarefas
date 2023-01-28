const form = document.querySelector('form')
const ul = document.querySelector('.items')
const input = document.querySelector('input')

form.onsubmit = function adicionar(e) {
    e.preventDefault()

    if(input.value == '') return false
    if(input.length > 58) return alert('Limite exedido de caracteres.')

    // const li = document.createElement('li')
    const li = ul.querySelector('li').cloneNode(true)
    const span = document.createElement('span')
    const button_um = document.createElement('button')
    button_um.classList.add('btn-li')


    li.classList.add('list-style')
    span.textContent = input.value
    li.appendChild(span)
    li.appendChild(button_um)

    ul.appendChild(li)

    input.value = ""
}


// document.querySelector('.items').addEventListener('click', function(e) {
//     const event = e.target

//     if(event.classList.contains('btn-li')) {
//         console.log('aaa')
//         e.target.parentElement
//         console.log(e.target.parentElement)
//     }
// })

ul.onclick = function(e) {
    if(e.target.classList.contains('btn-li')) {
        e.target.classList.toggle('btn-li_do')
    }       
    // e.target.parentElement.remove()

}




document.querySelector('.btn-remove').addEventListener('click', function() {
    ul.addEventListener('click', function(e) {
        const evento = e.target

        if(e.target.classList.contains('btn-li')) {
            e.target.classList.add('btn-del')
            evento.addEventListener('click', function() {
                e.target.classList.add('btn-del')
                // console.log(e.target.classList)

                if(e.target.classList.contains('btn-del')) {
                    e.target.parentElement.remove()
                }
            })
        
        }
        else if(e.target.classList.contains('btn-del')) {
            e.target.classList.remove('btn-del')
        }
    })
})





// function remover(e) {
//     ul.addEventListener('click', function(e) {
//         const evento = e.target

//         if(e.target.classList.contains('btn-li')) {
//             e.target.classList.add('btn-del')
//             evento.addEventListener('click', function() {
//                 e.target.classList.add('btn-del')
//                 // console.log(e.target.classList)

//                 if(e.target.classList.contains('btn-del')) {
//                     e.target.parentElement.remove()
//                 }
//             })
        
//         }
//         else if(e.target.classList.contains('btn-del')) {
//             e.target.classList.remove('btn-del')
//         }
//     })
//     // e.target.classList.remove('btn-del')

// }
