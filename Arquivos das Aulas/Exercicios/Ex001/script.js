function carregar(){
    var msg = document.getElementById('container-1');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML =`Agora são ${hora} horas`; 

    if(hora >=0 && hora < 12){
        img.scr ='./imagens/manha_editado.png';
        document.body.style.background ='#eacc96'
    }
    else if(hora > 12 && hora < 19){
        img.src = './imagens/tarde_editado.png';
        document.body.style.background = '#de937b'
    }
    else{
        img.src = './imagens/noite_editado.png';
        document.body.style.background = '#4493cb'
    }
}