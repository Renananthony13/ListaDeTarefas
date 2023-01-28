class Lista {
    constructor() {
        this.form = document.querySelector('form')
        this.ul = document.querySelector('.items')
        this.criaLista()
        this.animaButtons()

        // this.addTarefa()
        // this.criaLista()
        // this.salvaItems()

        this.init_items()
    }


    init_items() {
        const lis = document.querySelector('.items')
        const items = localStorage.getItem('listaa')
        let array_items = [];

        array_items.push(items)

        // console.log(items)

        const teste = JSON.parse(array_items)
        // console.log(teste)

        for(let i of teste) {
            console.log(i)
            this.criaElemento(i.text, i.active)
        }

        // this.salvaItems()
        // this.salvaCheck()

    }

    salvaItems() {
        let lista = []

        let lista_dois = [];
        let lista_li = document.querySelectorAll('li')
        
        for(let i of lista_li) {
            let teste = i.childNodes
            for(let t of teste) {
                if(t.classList.contains('div-buttons')) {
                    for(let btns of t.childNodes) {
                        if(btns.classList.contains('btn-li')) {
                            // console.log(btns)
                            // console.log(btns.checked)
                            let g = btns.checked

                            let text_tarefa = i.innerText
                            text_tarefa.replace('')

                            let obj = {
                                text: text_tarefa, 
                                active: g
                            }

                            lista.push(obj)
                        }
                    }
                    
                }
                
            }
        }

        console.log(lista)

        const teste = JSON.stringify(lista)
        const item = localStorage.setItem('listaa', teste)
    

        const btn = document.querySelectorAll('.btn-li_do')


    }


    criaLista(val) {
        const criadr = this.criaElemento
        const save = this.salvaItems

        this.form.onsubmit = function(e) {
            e.preventDefault()

            const input = document.querySelector('input')
            if(input.value == '') return false
            

            criadr(input.value)
            save()

            const li = document.querySelectorAll('.btn-li')
            let list = [];

            for(let l of li) {
                if(l.checked) {
                    // console.log(l)
                    list.push(l.checked)
                    // localStorage.setItem('ch', l.innerText)
                }
             
            }

            console.log(list)
            localStorage.setItem('cr', list)

            // localStorage.setItem('btns', JSON.stringify(nodARR))

        }
    }


    criaElemento(valor, boolean) {
        const ul = document.querySelector('.items')
            const input = document.querySelector('input')
            
            const dado = localStorage.getItem('tarefa')
            // console.log(valor)

            if(input.value > 58) return alert('Limite exedido de caracteres.')
           

            // const li = ul.querySelector('li').cloneNode(true)
            const li = document.createElement('li')
            li.classList.add('list-style')

            const span = document.createElement('span')
            span.textContent = valor

            const button_teste = document.createElement('button')
            button_teste.classList.add('btn-del')

            const button_check = document.createElement('input')
            button_check.setAttribute('type', 'checkbox')
            button_check.checked = boolean

            // const button_check = document.createElement('button')
            button_check.classList.add('btn-li')

            const div = document.createElement('div')
            div.classList.add('div-buttons')
            div.appendChild(button_check)
            div.appendChild(button_teste)

            li.appendChild(span)
            li.appendChild(div)
            ul.appendChild(li)

            // console.log(li.innerText)

            input.value = ""
            input.focus() 

    }

   

    animaButtons() {
        const criaElemento = this.criaElemento
        const save = this.salvaItems
        const check_save = this.salvaCheck

        this.ul.onclick = function(e) {
                if(e.target.classList.contains('btn-del')) {
                    // console.log('botao 1')
                    let div = e.target.parentNode
                    div.parentNode.remove()
                    save()
                }
                if(e.target.classList.contains('btn-li')) {
                    console.log('botao 2')
                    // e.target.classList.toggle('btn-li_do')
                    save()
                }
            }
    }

}







const lista = new Lista()