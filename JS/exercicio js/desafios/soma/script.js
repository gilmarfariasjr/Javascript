function somar(){
    var s1 = document.getElementById('numero1')
    var s2 = document.getElementById('numero2')
    var res = document.getElementById('res')

    var so1 = Number(s1.value)
    var so2 = Number(s2.value)
    var s = so1+so2
        res.innerHTML=`A soma do primeiro número e do segundo é ${s}.`
}

function subtrair(){
    var su1 = document.getElementById('numero1')
    var su2 = document.getElementById('numero2')
    var so1 = Number(su1.value)
    var so2 = Number(su2.value)
    var s = so1-so2
        res.innerHTML=`A subtração do primeiro número pelo segundo é ${s}.`
}

function multiplicaçao(){
    var m1 = document.getElementById('numero1')
    var m2 = document.getElementById('numero2')
    var so1 = Number(m1.value)
    var so2 = Number(m2.value)
    var s = so1*so2
        res.innerHTML=`A multiplicação do primeiro número pelo segundo é ${s}.`
}

function divisao(){
    var d1 = document.getElementById('numero1')
    var d2 = document.getElementById('numero2')
    var so1 = Number(d1.value)
    var so2 = Number(d2.value)
    var s = so1/so2
        res.innerHTML=`A divisão do primeiro número pelo segundo é ${s}.`
}