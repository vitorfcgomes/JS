function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // Se o valor for nulo, mostre a mensagem de erro...
    if(num.value.length == 0){
       window.alert("Por favor, digite um número!")
    } else { // Caso seja um número, transforme a string em número, adicione um valor ao contador, e limpe a caixa option
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
    // Multiplicação dos valores e a demonstração no documento 
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}