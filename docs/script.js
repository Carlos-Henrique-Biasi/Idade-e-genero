function verificar(){
    var resimg = document.querySelector('div#resimg')
    var data = new Date()
    var ano = data.getFullYear()//pega 4 digitos, tipo 2026
    var nasc = document.getElementById('idade')
    var res = document.querySelector('div#res')
    if(Number(nasc.value) == 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Ano invalido.')
    }else{
        var sexf = document.getElementsByName('sexo')
        var idade =ano - Number(nasc.value)
        var genero = ''
        resimg.innerHTML = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexf[0].checked)/*se o marcado com check for o sexf[0]*/{
            var genero = 'Homem'
            if(idade >=0 && idade<= 10){//criança
                img.setAttribute('src','menino.png')
            }else if(idade > 10 && idade<= 22){//jovem
                img.setAttribute('src','moco.png')
            }else if(idade >22 && idade< 60){ //adulto
                img.setAttribute('src','homem.png')
            }else if( idade >60 ){//idoso
                img.setAttribute('src','senhor.png')
            }
        } else if(sexf[1].checked){
            var genero = 'Mulher'
            if(idade >=0 && idade<= 10){//criança
                img.setAttribute('src','menina.png')
            }else if(idade > 10 && idade<= 22){//jovem
                img.setAttribute('src','moca.png')
            }else if(idade >22 && idade< 60){ //adulto
                img.setAttribute('src','mulher.png')
            }else if( idade >60 ){//idoso
                img.setAttribute('src','senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        resimg.appendChild(img)//appendChild(img), comando para adicionar algo nesse caso o img
        img.style.width = '350px'
    }
}
