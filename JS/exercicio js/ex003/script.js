function verificar(){
   var ini= document.getElementById('txini')
   var fim= document.getElementById('txfim')
   var pas= document.getElementById('txpas')
   var res= document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length==0){
        res.innerHTML= 'Impossível contar'
        /*window.alert('[ERRO] Faltam dados!')*/
    }else{
        res.innerHTML=`Contando: <br>`
        var n1= Number(ini.value)
        var n2= Number(fim.value)
        var pass= Number(pas.value)
        if(pass<=0){
            window.alert('Passo Inválido! Considerado PASSO 1')
            pass = 1
        }
        if(n1<n2){
            for(var c=n1; c<=n2; c+=pass){
                res.innerHTML+=` ${c} \u{1F449}`
            }
        }else{
            for(var c=n1; c>=n2; c-=pass){
                res.innerHTML+= ` ${c} \u{1F449}`
            }
        }
        res.innerHTML+=`\u{1F3F3}`
    }
}