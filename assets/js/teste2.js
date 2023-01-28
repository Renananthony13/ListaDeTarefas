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

        console.log(items)

        const teste = JSON.parse(array_items)
        console.log(teste)

        for(let i of teste) {
            this.criaElemento(i)
        }

        console.log(array_items)

        console.log(lis)
        const btn = JSON.parse(localStorage.getItem('btns'))
        console.log(btn)
        // for(let i of btn) {
        //     console.log(i)
        // }
        // let btn_ = btn.parentElement

        


    }
 
    salvaItems() {
        let lista = []

        let lista_dois = [];
        let lista_li = document.querySelectorAll('li')
        
        for(let i of lista_li) {
            let text_tarefa = i.innerText
            text_tarefa.replace('')
            lista.push(text_tarefa)
        }

        console.log(lista_dois)

        const teste = JSON.stringify(lista)

        const item = localStorage.setItem('listaa', teste)
        // console.log(teste)


        const btn = document.querySelector('.btn-li_do')
    }


    criaLista(val) {
        const criadr = this.criaElemento
        const save = this.salvaItems

        this.form.onsubmit = function(e) {
            const input = document.querySelector('input')
            if(input.value == '') return false
            e.preventDefault()

            criadr(input.value)
            save()

            const btn = document.querySelectorAll('.btn-li_do')
            // console.log(btn)

            let nodARR = Array.prototype.slice.call(btn)
            let bnts = [];
            for(let a of btn) {
                console.log(a.classList)
                bnts.push(a)
            }
            // console.log(bnts)

            // const sj = JSON.parse(bnts)
            // console.log(sj)
            // bnts.innerHTML

            // console.log(bnts.innerHTML)

            localStorage.setItem('btns', JSON.stringify(nodARR))

        }
    }


    criaElemento(valor) {
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
            const button_check = document.createElement('button')
            button_check.classList.add('btn-li')

            const div = document.createElement('div')
            div.appendChild(button_check)
            div.appendChild(button_teste)

            li.appendChild(span)
            li.appendChild(div)
            ul.appendChild(li)

            console.log(li.innerText)

            input.value = ""
            input.focus() 
            
    }

   

    animaButtons() {
        const criaElemento = this.criaElemento
        const save = this.salvaItems

        this.ul.onclick = function(e) {
                if(e.target.classList.contains('btn-del')) {
                    console.log('botao 1')
                    let div = e.target.parentNode
                    div.parentNode.remove()
                    // criaElemento
                    save()
                    // localStorage.clear('lista')
                }
                if(e.target.classList.contains('btn-li')) {
                    console.log('botao 2')
                    e.target.classList.toggle('btn-li_do')
                    // const backCor =  e.target.style.backgroundColor = 'rgba(0, 128, 0, 0.679)'
                    
                    localStorage.setItem('color', 'rgba(0, 128, 0, 0.679)')
                }
            }
    }

}







const lista = new Lista()