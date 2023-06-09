$(document).ready(function(){
    // deixar botões de novidades dinâmicos
    $("#mostrarMais_novidades").on("click", function(){
        $("#novidadesplus").slideDown()
        $("#novidadeplus").addClass("novidade")
    })
})

// .container_novidade {
//     display: flex;
//     flex-wrap: wrap;
//   }
  
//   .novidade {
//     width: 50%;
//   }
//   Nesse exemplo, a classe .container_novidade é aplicada ao contêiner pai que envolve as divs com a classe .novidade. Ao definir display: flex nesse contêiner, ele se torna um contêiner flexível.
//   A propriedade flex-wrap: wrap garante que as divs filhas possam quebrar para a próxima linha quando necessário.
//   A classe .novidade define a largura das divs individuais para ocupar 50% da largura do contêiner pai, permitindo que duas divs sejam exibidas lado a lado.
//   Com esses estilos, as divs com a classe .novidade serão organizadas em duas colunas e várias linhas, dependendo do espaço disponível na largura da tela.

  
  
  
  
  
  
  