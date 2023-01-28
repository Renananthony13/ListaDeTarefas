class Lista {
    constructor() {
        this.form = document.querySelector('form')
        this.ul = document.querySelector('.items')
        this.criaLista()
        this.animaButtons()
        this.addTarefa()
    }

    addTarefa() {
        const tarefas = localStorage.getItem('tarefas')

        console.log(tarefas)
    }

    criaLista(val) {
        const teste = this.guardaDdos
        const add_tarefas = this.addTarefa

        this.form.onsubmit = function(e) {
            e.preventDefault()
            
            const ul = document.querySelector('.items')
            const input = document.querySelector('input')

            if(input.value == '') return false
            if(input.value.length > 58) return alert('Limite exedido de caracteres.')

            const li = ul.querySelector('li').cloneNode(true)
            li.classList.add('list-style')

            const span = document.createElement('span')
            span.textContent = input.value

            const button_teste = document.createElement('button')
            button_teste.classList.add('btn-del')
            const button_check = document.createElement('button')
            button_check.classList.add('btn-li')

            const div = document.createElement('div')
            div.appendChild(button_check)
            div.appendChild(button_teste)

            li.appendChild(span)
            li.appendChild(div)
            ul.appendChild(li)

            input.value = ""
            input.focus()
    
            teste()
            add_tarefas()
            
        }
    }

    guardaDdos() {
        const lis = document.querySelectorAll('li')

        let valListas = [];
       
        for(let i of lis) {
            console.log(i.innerHTML)
            valListas.push(i.innerText)
        }

        const dados = localStorage.setItem('tarefas', valListas)

    }

    animaButtons() {
        this.ul.onclick = function(e) {
                if(e.target.classList.contains('btn-del')) {
                    console.log('botao 1')
                    let div = e.target.parentNode
                    div.parentNode.remove()
                }
                if(e.target.classList.contains('btn-li')) {
                    console.log('botao 2')
                    e.target.classList.toggle('btn-li_do')
                }
            }
    }

}

const lista = new Lista()
