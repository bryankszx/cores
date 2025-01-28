"use strict"

const botaoMudarCor = document.getElementById('trocar-cor')

function trocarCor (){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoMudarCor.addEventListener('click', trocarCor)