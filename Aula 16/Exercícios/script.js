let num = document.getElementById('txtn')
let lista = document.getElementById('analis')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    } else {
        return false
     }
}


function inLista(n, l){
    if(l.indexOf(Number(n) != -1)){
        return true 
    } else{
        return false
    }
}



function adicionar() {
    if(isNumero(num.value) && inLista(num.value, valores)){
       valores.push(Number(num.value)) 
       let item = document.createElement('option')
       item.text = `Valor ${num.value} foi adicionado.`
       lista.appendChild(item)
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if( valores == 0 ){
        alert('Adicione Valores')
    } else{
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
    }
}