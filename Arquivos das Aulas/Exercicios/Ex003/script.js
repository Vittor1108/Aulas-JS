function contar(){
    var inicio = document.querySelector('#n1');
    var fim = document.querySelector('#n2');
    var passos = document.querySelector('#passos');
    var output = document.querySelector('#container-2');
    
  
    if(inicio.length == 0 || fim.length == 0 || passos.length == 0){
        output.innerHTML = `Impossível Contar`;
        alert('[ERRO!!] Confira os dados e tente novamente.');
    }
    else{
        output.innerHTML = `Contando:`
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passos.value);
        if(p <= 0){
            alert("Passo invalido!");
        }

        if(i < f){
            //contagem crescente
            for(var c = i; c < f; c += p){
                output.innerHTML += ` ${c} `;
           }
        }
        //contagem regressiva
        else{
            for(var c = i; c >= f; c -= p){
                output.innerHTML += ` ${c} ` ;
            }
        }
       
    }
  
}