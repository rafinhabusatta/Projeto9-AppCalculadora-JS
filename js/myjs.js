function calcular(tipo, valor){
    let visor = document.getElementById('resultado')
   if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar o visor
            visor.value = ''
        }else if(valor === '='){
            //let operacao = eval(res.value)
            visor.value = eval(visor.value)
        }else{
            visor.value += valor
        }
    }else{
        visor.value += valor
    }
}