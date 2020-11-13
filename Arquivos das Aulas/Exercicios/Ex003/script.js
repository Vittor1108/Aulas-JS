function contar(){
    var inicio  = document.getElementById('n1');
    var fim = document.getElementById('n2');
    var passos = document.getEelement('n3'); 
    var res = document.getElementById('container-2');

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ){
        alert("[ERRO] Por favor verifique os dados e tente novamente!");
    }else{
        alert('tudo certo')
    }
}
