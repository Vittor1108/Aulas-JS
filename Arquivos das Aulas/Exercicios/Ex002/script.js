function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#container-2')

    if(fAno.value.length == 0 || fAno.value.length > ano){
        alert("Verifique os dados e tente novamente!");
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'homem_crianca.png')
            }

            else if(idade < 21){
                img.setAttribute('src', 'homem_jovem,png.png');
            }

            else if (idade < 50 ){
                img.setAttribute('src', 'homem_adulto.png');
            }

            else{
                img.setAttribute('src', 'homem_idoso.png');
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher';
            
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'mulher_crianca.png');
            }

            else if(idade < 21){
                img.setAttribute('src','mulher_jovem.png');
            }

            else if (idade < 50 ){
                img.setAttribute('src','mulher_adulta.png');
            }

            else{
                img.setAttribute('src','mulher_idosa.png');
            }
        } 
        res.innerHTML = `Dectemos que você é ${genero}, com ${idade} anos`;
        res.appendChild(img)
    }
}