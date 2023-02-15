function carregar(){
    var data =new Date()
    var hora = data.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML=`Agora são ${hora} horas.`
    
    if(hora<=05){
        img.src='imagens/madrugada.png'
        document.body.style.background='#C4CFC5'
    } else if(hora<=11){
        img.src='imagens/manhã.png'
        document.body.style.background='#01FACC'
    } else if(hora<=17){
        img.src='imagens/tarde.png'
        document.body.style.background='#E7F326'
    } else{
        img.src='imagens/noite.png'
        document.body.style.background='#000000'
    }
}