//crie uma funçao pegue a idade , genero e cidade de um usuario
//se o usuario for do sexo masculino e tiver mais de 18 anos 
//exibir precisa se alistar 
//se o usuario for do sexo feminino e tiver mais de 18 anos
//exibir pode se alistar 
//se o usuario for do sexo masculino e tiver menos de 18 anos
//exibir não pode se alistar 

const user = {
    nome:"daniel",
    idade: 34 ,
    genero :"masculino",
    cidade:"fortaleza"

}

function verificarAlistamento(user){
    if (user.idade>=18 && user.genero == "feminino"){
        
        console.log ("PODE SE ALISTAR")
    }else{

        console.log ("NAO PODE SE ALISTAR")
    }
        
    }
   
   
 verificarAlistamento(user)
