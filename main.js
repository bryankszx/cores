"use strict"

const botaoTrocarcor = document.getElementById('trocar-cor')

function trocarCor (){

    const cor = document.getElementById('cor').value


    document.documentElement.style.setProperty('--cor-fundo',cor)
}

botaoTrocarcor.addEventListener('click', trocarCor)