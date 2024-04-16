function inserir(num){
    document.querySelector('.tela').innerHTML += num;
}

function clean(){
    document.querySelector('.tela').innerHTML = '';
}

function voltar(){
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0,tela.length-1);
}

function resultado(){
    let res = document.querySelector('.tela').innerHTML;

    if(res){
        document.querySelector(".tela").innerHTML = eval(res);
    }else{
        document.querySelector('.tela').innerHTML = "Nenhum comando...";
    }
}

// function expandir(){
//     let imagem = document.querySelector(".tela_login");

//     if(imagem){
//         imagem.style.whidth = "2000px"
//         imagem.style.height = "2000px"
//     }
// }