Projeto Bootstrap
=================

Vamos ver como funciona!

Navegação usando listas
-----------------------

Exemplo de uma lista com 4 elementos

    <ul>
        <li>Home</li>
        <li>Code</li>
        <li>Documentation</li>
        <li>Links</li>
    </ul>
    
Transformado em um menu horizontal:

    <ul class="list-inline">
        <li><a href="#">Home</a></li>
        <li><a href="#">Code</a></li>
        <li><a href="#">Downloads</a></li>
        <li><a href="#">Help</a></li>
    </ul>
    
Adicionando estilo de navegacao:

    <ul class="nav nav-tabs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Code</a></li>
        <li><a href="#">Downloads</a></li>
        <li><a href="#">Help</a></li>
    </ul>
    

Evolução do Botão
=================

Para quem nunca brincou de bootstrap:

    <button>Ola HTML</button>
    <button class="btn">Ola HTML</button>
    <button class="btn btn-default">Ola HTML</button>
    <button class="btn btn-danger">Ola HTML</button>
    
O botão parece meio inútil sem conteúdo.

    
Controle de texto
-----------------

Texto original

    <div id="help">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at, enim vero totam
    </div>
      
Adicionando a classe:

    <div id="help" class="collapse">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, recusandae.
    </div>

Acionando o botão:

    <button class="btn btn-default">Lorem</button>

Javascript sem javascript:

    <button class="btn btn-default" data-toggle="collapse" data-target="#help">Lorem</button>
    


Modal
=====

A hierarquia do moda:

    div.modal>.modal-dialog>.modal-content>.modal-body

Expandido:

    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">[CONTEUDO]</div>
            </div>
        </div>
    </div>
    
Podemos criar Modals:

    <button class="btn btn-danger" data-toggle="modal" data-target=".modal">Não Clique</button>
  
Embora o ideal seria especificar um nome:

    #meumodal


DropDown
========

  
Projeto
=======

Ordem:
1. Conteudo DIV
2. Headings H1
3. Index UL
4. Menu (class list-inline)
5. Collapse

Codigo:

    <ul class="list-inline">
        <li><a data-toggle="collapse" href="#estudos">Estudos</a></li>
        <li><a data-toggle="collapse" href="#matematica">Matematica</a></li>
        <li><a data-toggle="collapse" href="#quimica">Quimica</a></li>
    </ul>

    <h1>Conteudo</h1>
    <div id="estudos" class="collapse">
        links e referencias
    </div>
    
    <div id="matematica" class="collapse">
        1 2 3 4 5 6 7 8 9
    </div>
    
    <div id="quimica" class="collapse">
        H CO2 H20
    </div>  