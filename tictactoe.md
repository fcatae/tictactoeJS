Jogo da Velha (jQuery)
======================

Tabuleiro:

    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>

Adicionar minhas jogadas:

   $('td').click(function() {
      
      if( jogador == 0 ) {
        if(  !$(this).hasClass('x') ) {

            $(this).text('X');
            $(this).addClass('x eu'); 

            jogador = 1;
            ganhou();
        }
        
      }
   });
   
Adicionar as jogadas do computador:

   setInterval(cpu, 1000);

   function cpu() {
       
       if( jogador == 1 ) {
        var escolhas = $('td:not(.x)');
        
        if(escolhas.length > 0) {
        
                var qi = Math.random() * escolhas.length | 0;
                $(escolhas[qi]).text('O');
                $(escolhas[qi]).addClass('x cpu');
                jogador = 0;
                ganhou();
            }
       }       
   }   
   
Quem ganhou:

   function ganhou() {
       
    var testes = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]  
      ];
      
      var ganhador = null; 
      testes.forEach(function(t) {
          ganhador || (ganhador = quemGanhou(t[0], t[1], t[2]));
      });
      
      if( ganhador ) {

            $('#aviso').text(ganhador + ' é o vencedor');
            jogador = 'fim';      
      } 
      
   }
   
   function quemGanhou(p1,p2,p3) {       
        
        var casas = $('td');
        
        var v1 = $(casas[p1]).text();
        var v2 = $(casas[p2]).text();
        var v3 = $(casas[p3]).text();
        
        if( v1 == v2 && v1 == v3 ) {
            return v1;
        }
      
      return null;
   }

