function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        window.alert('Por favor, digíte um número!')
    }else{
        var nu = Number(num.value)
        var c = 1
        tab.innerHTML=''
        while(c<=10){
            var item = document.createElement('option')
            item.text= `${nu} x ${c} = ${nu*c}` 
            item.value=`tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

