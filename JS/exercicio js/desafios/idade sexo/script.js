function calcular(){
    var data = new Date()
    var ano = data.getDate()
    var fano = document.getElementById('fano')
    var res = document.getElementById('res')

    if(fano.value.length==0 || fano.value>ano){
        window.alert=`('Dados invalidos')`
    }
}