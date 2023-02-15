function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length==0 || fano.value>ano){
       window.alert('{ERRO} Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano-Number(fano.value)
        var genero =''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'imagens/bebe.png')
            } else if(idade<21){
                img.setAttribute('src', 'imagens/10anos.png')
            } else if(idade<40){
                img.setAttribute('src', 'imagens/20anos.png')
            } else if(idade<60){
                img.setAttribute('src', 'imagens/40anos.png')
            } else{
                img.setAttribute('src', 'imagens/60anos.png')
            }
        } else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'imagens/bebemulher.png')
            } else if(idade<21){
                img.setAttribute('src', 'imagens/10anosmulher.png')
            } else if(idade<40){
                img.setAttribute('src', 'imagens/20anosmulher.png')
            } else if(idade<60){
                img.setAttribute('src', 'imagens/40anosmulher.png')
            } else{
                img.setAttribute('src', 'imagens/60anosmulher.png')
        }
    }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}