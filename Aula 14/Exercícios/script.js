function contar(){
    let ini = document.getElementById('cx1')
    let fim = document.getElementById('cx2')
    let passo = document.getElementById('cx3')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: '
        // Number transforma as váriaveis em número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo inválido! CONSIDERANDO PASSO 1')
            p = 1
        }
        if(i < f){
            //Ordem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }
        } else{
            //Ordem Decrescente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} `
            }
        }
        
    }
}