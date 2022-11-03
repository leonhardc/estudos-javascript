# Programação Funcional

- [Programação Funcional](#programação-funcional)
  - [Aprender sobre programação funcional](#aprender-sobre-programação-funcional)
  - [Entender a terminologia de programação funcional](#entender-a-terminologia-de-programação-funcional)
  - [Entender os perigos da programação imperativa](#entender-os-perigos-da-programação-imperativa)
  - [Evitar mutações e efeitos colaterais usando programação funcional](#evitar-mutações-e-efeitos-colaterais-usando-programação-funcional)
  - [Passar argumentos para evitar dependências externas em funções](#passar-argumentos-para-evitar-dependências-externas-em-funções)
  - [Refatorar variáveis globais fora de funções](#refatorar-variáveis-globais-fora-de-funções)

## Aprender sobre programação funcional

**Programação funcional** é um estilo de programação em que as soluções são funções simples, isoladas e livres de efeitos colaterais fora do escopo da função: **INPUT -> PROCESS -> OUTPUT**

Quando falamos de programação funcional, pensamos em:

1. Funções isoladas: nenhuma função depende do estado do programa, incluindo variáveis globais, que podem sofrer mudanças

2. Funções puras: a mesma entrada sempre devolve a mesma saída

3. Funções com efeitos colaterais limitados: qualquer alteração ou mutação do estado do programa fora da função é cuidadosamente controlada

## Entender a terminologia de programação funcional

_Callbacks_ são funções que são passadas a outras funções, que decidem quando e como são chamados. Você pode ter visto alguns sendo passados a outros métodos. Em filter, por exemplo, a função de callback diz ao JavaScript qual é o critério para filtrar um array.

Funções que podem ser atribuídas a variáveis, passadas a outras funções ou retornadas de outra função como qualquer outro valor são chamadas de _funções de primeira classe_. Em JavaScript, **todas as funções são funções de primeira classe**.

As funções que recebem funções como argumentos ou retornam outras funções como valores são chamadas de **funções de ordem superior**.

Funções podem ser chamadas de _lambda_ quando passadas para outra função ou retornadas a partir dela.

## Entender os perigos da programação imperativa

Usar programação funcional é um bom hábito. Faz com que o seu código seja fácil de manter e o livra de bugs sorrateiros. Mas antes de fazer a transição, vamos rever uma abordagem imperativa para destacar onde pode haver problemas.

Em português (e em vários outros idiomas), o modo verbal imperativo é usado para dar ordens. Da mesma forma, o estilo imperativo em programação é um estilo que dá um conjunto de instruções para um computador realizar uma tarefa.

Essas instruções frequentemente alteram o estado do programa ao atualizar variáveis globais, por exemplo. Um exemplo clássico é escrever um loop for, que é explícito ao dar direções para percorrer um array.

Em contrapartida, a programação funcional é uma forma de programação declarativa. Você diz ao computador o que quer fazer chamando um método ou função.

O JavaScript oferece muitos métodos predefinidos que lidam com tarefas comuns, então você não precisa escrever como o computador deve executá-las. Por exemplo, em vez de usar um loop _for_, você pode chamar o método _map_, que lida com os detalhes de como percorrer um array. Isso ajuda a evitar erros semânticos, como os erros de "Off By One" (fora por um), que foram cobertos na seção de depuração.

Considere o cenário: você está navegando na web com o navegador e quer rastrear as abas que você abriu. Vamos tentar modelar isso usando orientação a objetos de forma simples.

Um objeto Window (Janela) é composto de abas e normalmente há mais de uma janela aberta. Os títulos de cada site aberto em cada objeto Window é armazenado em um array. Depois de usar o navegador (abrindo novas abas, juntando janelas, fechando abas), você quer imprimir as abas que ainda estão abertas. Abas fechadas são removidas do array e novas abas são adicionadas ao fim dele (por simplicidade).

No editor de texto há uma implementação dessa funcionalidade com as funções tabOpen(), tabClose() e join(). O array tabs é um atributo do objeto Window e armazena o nome das páginas abertas.

Examine o código no editor. Nele é usado um método que possui efeitos colaterais no programa e causa comportamento incorreto. A lista final de abas abertas armazenada em finalTabs.tabs deveria ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] mas a lista produzida pelo código é ligeiramente diferente.

```JavaScript
        // tabs é um array de títulos de cada site aberto na janela
    const Window = function(tabs) {
        this.tabs = tabs; // Mantemos um registro do array dentro do objeto
    };

    // Quando você junta duas janelas em apenas uma
    Window.prototype.join = function(otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // Quando você abre uma nova aba no final
    Window.prototype.tabOpen = function(tab) {
        this.tabs.push('new tab'); // Vamos abrir uma nova aba por enquanto
        return this;
    };

    // Quando você fecha uma aba
    Window.prototype.tabClose = function(index) {

        // Altere apenas o código abaixo desta linha

        const tabsBeforeIndex = this.tabs.slice(0, index); // Obtém as abas antes da aba
        const tabsAfterIndex = this.tabs.slice(index + 1); // Obtém as abas após a aba
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Junte-as

        // Altere apenas o código acima desta linha

        return this;
    };

    // Vamos criar três janelas no navegador
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Sua caixa de correio, unidade e outros locais de trabalho
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociais
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de entretenimento

    // Agora, realize a abertura e o fechamento da aba, assim como outras operações
    const finalTabs = socialWindow
    .tabOpen() // Abra uma nova aba para memes de gato
    .join(videoWindow.tabClose(2)) // Fechar a terceira aba na janela de vídeo e entrar
    .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);
```

## Evitar mutações e efeitos colaterais usando programação funcional

Caso você ainda não tenha descoberto, o problema do desafio anterior é com a chamada a _splice_ na função tabClose(). Infelizmente, _splice_ modifica o array original no qual opera e, por isso, a segunda chamada usou o array alterado, nos dando resultados inesperados.

Este é apenas um pequeno exemplo - você chama uma função e passa uma variável, array ou objeto a ela; a função modifica a variável ou alguma coisa no objeto.

Um dos principais princípios da programação funcional é que não devemos alterar coisas. Alterações levam a bugs. É mais fácil prever bugs quando se sabe que as funções não mudam nada, nem mesmo os argumentos e as variáveis globais.

No exemplo anterior não havia nenhuma operação complicada, mas o método _splice_ modificou o array original e o resultado foi um bug.

Lembre-se de que, em programação funcional, modificar ou alterar coisas é chamado de _**mutação**_ e a consequência é chamada de _**efeito colateral**_. Idealmente, uma função deveria ser uma função pura, que é uma função que não causa efeitos colaterais.

## Passar argumentos para evitar dependências externas em funções

Outro princípio da programação funcional é que sempre devemos declarar nossas dependências explicitamente. Isso significa que, se uma função depende de uma variável ou objeto, então devemos passar esta variável ou objeto diretamente como argumento a ela.

Há muitas boas consequências nesse princípio: a função se torna mais fácil de testar, você sabe exatamente quais são as suas entradas e ela não depende de mais nada no seu programa.

Isso faz com que você tenha mais confiança ao alterar, remover ou adicionar código, pois sabe o que pode ou não pode alterar e identifica armadilhas em potencial com mais facilidade.

Finalmente, a função sempre produzirá a mesma saída para o mesmo conjunto de entradas, não importa de onde no código ela é chamada.

## Refatorar variáveis globais fora de funções

Até agora vimos dois princípios diferentes de programação funcional:

1. Não altere variáveis ou objetos: crie novas variáveis ou objetos e os retorne, caso necessário, de uma função. Dica: escrever algo como const newArr = arrVar onde arrVar é um array não o copiará para a nova a variável, e sim apenas criará uma nova referência ao mesmo objeto. Então mudar um valor em newArr também o muda em arrVar.

2. Declare parâmetros de funções: qualquer computação dentro de uma função depende apenas dos argumentos passados a ela; nunca de uma variável ou objeto global.


