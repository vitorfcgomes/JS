function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'foto_dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'foto_tarde.jpg'
        document.body.style.background = 'orange'
    }else {
        img.src = 'foto_noite.jpg'
        document.body.style.background = 'blue'
    }
}
