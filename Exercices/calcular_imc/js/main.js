const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const msgResul = document.getElementById("resultado_div")

const msgPeso = document.querySelector(".erroEntradaP")
const msgAltura = document.querySelector(".erroEntradaA")
msgPeso.style.display = "none"
msgAltura.style.display = "none"
//SÓ AJUSTAR AS MSG DE ERRO E ACABOU
//usar um querySelector para cada <p> com a classe de cada um e injetar os textos



let calculando = true
peso.addEventListener("keyup", function(e){
    let i = this
    //regex: ao botar \D junto com a negação, o \D se torna \d, por isso usei ^\d, o resto dá para entender
    i.value = i.value.replace(/[^\d\.,]/g, "")

    const regexCm = /^0/
    if (regexCm.test(i.value)){
        msgPeso.style.display = "block"
        msgPeso.innerHTML = "O peso inserido não está em kg!"
        peso.classList.add("campoError")
    }else{
        msgPeso.style.display = "none"
        peso.classList.remove("campoError")
        msgPeso.innerHTML = null
    }

    if (calculando == true){
        const removerResul1 = document.getElementById(`span${titleInject()}`)
        removerResul1.innerHTML = null
        msgResul.style = "display: none"
        document.getElementById(`tdbgcolorResul${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
        document.getElementById(`tdbgcolorSitu${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
    }

})


altura.addEventListener("keyup", function(){
    let i = this
    i.value = i.value.replace(/[^\d\.,]/g, "")


    const regexCm = /^0/
    if (regexCm.test(i.value)){
        msgAltura.style.display = "block"
        msgAltura.innerHTML = "A altura inserida não está em metros!"
        altura.classList.add("campoError")
    }else{
        msgAltura.style.display = "none"
        altura.classList.remove("campoError")
        msgAltura.innerHTML = null
    }

    if (calculando == true){
        const removerResul1 = document.getElementById(`span${titleInject()}`)
        removerResul1.innerHTML = null
        msgResul.style = "display: none"
        document.getElementById(`tdbgcolorResul${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
        document.getElementById(`tdbgcolorSitu${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
    }

})

function verificarPeso(pValue) {
    const vPeso = pValue.value;
    const regexPeso = /^[\d]{1,3}([\.,][\d]{1,2})?$/;
  
    if (!regexPeso.test(vPeso)) {
      msgPeso.style.display = "block";
      msgPeso.innerHTML = "Peso inválido!";
      return false;
    } else {
      msgPeso.style.display = "none";
      return true;
    }
}

// function verificarPeso(pValue) {
//     const vPeso = pValue.value
//     //regex: obrigatório colocar 1 número, diferente do resto dos grupos que não é obrigatório inserir um número. O 1º grupo é para validar um dígito, com exceção do 2º,
//     //que valida apenas "." ou ",", o dois últimos são outros dígitos opcionais.
//     const matchRegExArray = vPeso.match(/[\d]{1,3}([\.,]{1}[\d]{1,2})?/g)
//     const matchSplit = matchRegExArray[0].split("")
//     //como a função match() retorna um array, aproveitei e apliquei o split() para dividir o array com cada dígito inserido.
//     if (matchSplit.length >=6){
//         const regexPeso6 = /^[\d]{3}[\.,]{1}[\d]{2}$/g
//         if (!regexPeso6.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 102.55kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=5){
//         const regexPeso5 = /^[\d]{2}[\.,]{1}[\d]{2}$/g
//         if (!regexPeso5.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 60.55kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=4){
//         const regexPeso4 = /^[\d]{2}[\.,]{1}[\d]{1}$/g
//         if (!regexPeso4.test(vPeso)){
//             console.log(regexPeso4.test(vPeso))
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 44.5kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=3){
//         const regexPeso3 = /^[\d]{3}/g
//         if (!regexPeso3.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 100kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=2){
//         const regexPeso2 = /^[\d]{2}/g
//         if (!regexPeso2.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 36kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else{
//         const regexPeso1 = /[\d]{1}/
//         if (!regexPeso1.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 9kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }
// }

function verificarAltura(aValue) {
    const vAltura = aValue.value
    const regexAltura = /^[\d]{1}[\.,][\d]{1,2}$/g
    return regexAltura.test(vAltura)
}

let imc = 0
function calcIMC() {
    imc = parseFloat(peso.value) / parseFloat((altura.value * altura.value))
    imc = imc.toFixed(2)
    return imc
}

function titleInject() {
    const span = document.getElementById("titulo_resul")
    if (imc < 17) {
        span.innerHTML = "Muito abaixo do peso"
        return 0
    } else if (imc >= 17 && imc <= 18.49) {
        span.innerHTML = "Abaixo do peso"
        return 1
    } else if (imc >= 18.5 && imc <= 24.99) {
        span.style = "border-bottom: 3px solid green"
        span.innerHTML = "Peso normal"
        return 2
    } else if (imc >= 25 && imc <= 29.99) {
        span.innerHTML = "Acima do peso"
        return 3
    } else if (imc >= 30 && imc <= 34.99) {
        span.innerHTML = "Obesidade I"
        return 4
    } else if (imc >= 35 && imc <= 39.99) {
        span.innerHTML = "Obesidade II"
        return 5
    } else {
        span.innerHTML = "Obesidade III"
        return 6
    }
}


function descInject() {
    const desc = document.getElementById("desc_resul")
    const resulIMC = titleInject()
    switch (resulIMC) {
        case 0:
            desc.innerHTML = "Condição em que o indivíduo está significativamente abaixo do peso saudável. Pode ser associado à desnutrição e falta de massa muscular."
            break;
        case 1:
            desc.innerHTML = "Peso abaixo do recomendado para a altura do indivíduo. Pode indicar uma alimentação insuficiente ou problemas de saúde."
            break;
        case 2:
            desc.innerHTML = "Indica que o peso do indivíduo está dentro da faixa considerada saudável para sua altura. É um bom indicativo de equilíbrio entre o consumo e gasto de calorias."
            const areaDicas = document.querySelector("#dicas_resul")
            //ALEXANDRE, NÃO SE ESQUECE, AO USAR .querySelector É PRECISO USAR O "."OU "#"!!!
            areaDicas.remove()
            break;
        case 3:
            desc.innerHTML = "Peso maior do que o recomendado para a altura do indivíduo. Pode indicar excesso de gordura corporal e aumento do risco de doenças relacionadas à obesidade."
            break;
        case 4:
            desc.innerHTML = "Excesso moderado de peso, com maior acúmulo de gordura corporal. Aumenta o risco de problemas de saúde, como diabetes e doenças cardiovasculares."
            break;
        case 5:
            desc.innerHTML = "Excesso mais significativo de peso, com maior acúmulo de gordura. Aumenta substancialmente o risco de problemas de saúde, como hipertensão arterial e apneia do sono."
            break;
        case 6:
            desc.innerHTML = "Excesso de peso severo, com maior acúmulo de gordura corporal. É a forma mais grave de obesidade e aumenta consideravelmente o risco de complicações graves, como doenças cardíacas e diabetes tipo 2."
            break;
        default:
            break;
    }
}

//não pode chamar titleInject() para dar o id ao span e nem às células porque por padrão está retornando 0
function marcarTabela(idValue) {
    const marcarResul = document.getElementById(`span${idValue}`)
    marcarResul.style = "color: green"
    marcarResul.innerHTML = "❮"

    document.getElementById(`tdbgcolorResul${idValue}`).classList.toggle(`tdbgcolor${idValue}`)
    document.getElementById(`tdbgcolorSitu${idValue}`).classList.toggle(`tdbgcolor${idValue}`)
}

function injectResults(kgValue, mValue) {
    kgValue = kgValue.value
    mValue = mValue.value
    document.getElementById("kgInject").innerHTML = `${kgValue}kg`
    document.getElementById("heightInject").innerHTML = `${mValue}m`
}

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (verificarPeso(peso) && verificarAltura(altura)){
        msgResul.style = "display: block"
        calcIMC()
        descInject()
        titleInject()
        marcarTabela(titleInject())
        injectResults(peso, altura)
        peso.value = ""
        altura.value = ""
        return calculando = false
    }
})