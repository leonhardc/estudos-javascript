# Programação Funcional

- [Programação Funcional](#programação-funcional)
  - [Aprender sobre programação funcional](#aprender-sobre-programação-funcional)
  - [Entender a terminologia de programação funcional](#entender-a-terminologia-de-programação-funcional)
  - [Entender os perigos da programação imperativa](#entender-os-perigos-da-programação-imperativa)
  - [Evitar mutações e efeitos colaterais usando programação funcional](#evitar-mutações-e-efeitos-colaterais-usando-programação-funcional)
  - [Passar argumentos para evitar dependências externas em funções](#passar-argumentos-para-evitar-dependências-externas-em-funções)
  - [Refatorar variáveis globais fora de funções](#refatorar-variáveis-globais-fora-de-funções)
  - [Usar o método map para extrair dados de um array](#usar-o-método-map-para-extrair-dados-de-um-array)
  - [Implementar map em um protótipo](#implementar-map-em-um-protótipo)
  - [Usar o método filter para extrair dados de um array](#usar-o-método-filter-para-extrair-dados-de-um-array)
  - [Implementar o método filter em um protótipo](#implementar-o-método-filter-em-um-protótipo)
  - [Retornar parte de um array usando o método slice](#retornar-parte-de-um-array-usando-o-método-slice)
  - [Remover elementos de um array usando slice em vez de splice](#remover-elementos-de-um-array-usando-slice-em-vez-de-splice)
  - [Combinar dois arrays usando o método concat](#combinar-dois-arrays-usando-o-método-concat)
  - [Adicionar elementos ao final de um array usando concat em vez de push](#adicionar-elementos-ao-final-de-um-array-usando-concat-em-vez-de-push)
  - [Usar o método reduce para analisar dados](#usar-o-método-reduce-para-analisar-dados)
  - [Usar as funções de ordem superior map, filter ou reduce para solucionar um problema complexo](#usar-as-funções-de-ordem-superior-map-filter-ou-reduce-para-solucionar-um-problema-complexo)
  - [Ordenar um array alfabeticamente usando o método sort](#ordenar-um-array-alfabeticamente-usando-o-método-sort)
  - [Retornar um array ordenado sem modificar o array original](#retornar-um-array-ordenado-sem-modificar-o-array-original)
  - [Dividir uma string em um array usando o método split](#dividir-uma-string-em-um-array-usando-o-método-split)
  - [Transformar um array em uma string usando o método join](#transformar-um-array-em-uma-string-usando-o-método-join)
  - [Usar programação funcional para converter strings em slugs de URL](#usar-programação-funcional-para-converter-strings-em-slugs-de-url)
  - [Usar o método every para checar se todos os elementos em um array atendem a um critério](#usar-o-método-every-para-checar-se-todos-os-elementos-em-um-array-atendem-a-um-critério)
  - [Usar o método some para checar se pelo menos um elemento em um array atende a um critério](#usar-o-método-some-para-checar-se-pelo-menos-um-elemento-em-um-array-atende-a-um-critério)
  - [Iniciar com currying e aplicação parcial](#iniciar-com-currying-e-aplicação-parcial)

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

É importante levar em consideração essas duas regras para evitar bugs ao alterar variáveis globais ou algum componente sensivel so software.

## Usar o método map para extrair dados de um array

Até então nós aprendemos a usar funções puras para evitar efeitos colaterais em um programa. Vimos também que há valor em fazer funções dependerem apenas de suas entradas.

Este é apenas o começo. Como o nome sugere, programação funcional orbita uma teoria de funções.

Faz sentido conseguir passar funções como argumento a outras funções e retorná-las de outras funções. Funções são consideradas objetos de primeira classe em JavaScript e podem ser usadas como qualquer outro objeto. Elas podem ser salvas em variáveis, objetos ou passadas como argumento a funções.

Vamos começar com algumas funções simples de array. Alguns métodos no protótipo de objetos array. Neste exercício estamos de olho em **Array.prototype.map()**, ou simplesmente **map**.

O método map percorre cada item de um array e retorna um novo array cujos elementos são os resultados da chamada da função de callback para cada item. Isso tudo acontece sem modificar o array original.

A função de callback é chamada com três argumentos. O primeiro argumento é o elemento que está a ser processado. O segundo é o índice deste elemento e o terceiro é o array do qual map foi chamado.

Abaixo você vê um exemplo do map sendo usado do array users para retornar um novo array apenas com os nomes dos usuários. O exemplo usa apenas o primeiro argumento da função de callback por simplicidade.

```JavaScript
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const names = users.map(user => user.name);
    console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```
No exemplo abaixo é usado a função map para extrair o titulo e a nota do IMDB dos filmes em um objeto 

```JavaScript
    // A variável global
    const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
    ];

    // Altere apenas o código abaixo desta linha

    const ratings = watchList.map(movie => ({"title":movie.Title, "rating":movie.imdbRating}));


    // Altere apenas o código acima desta linha

    console.log(JSON.stringify(ratings));

```

## Implementar map em um protótipo

Como você viu ao aplicar Array.prototype.map(), ou simplesmente map() mais cedo, o método map retorna um array do mesmo tamanho que o no qual chamamos o método. Ele também não altera o array original desde que a função de callback não o faça.

Em outras palavras, map é uma função pura e a sua saída depende somente de suas entradas. Além disso, ele recebe outra função como argumento.

Você pode aprender muito sobre o método map se você implementá-lo por conta própria. Recomenda-se que você use um loop for ou o método Array.prototype.forEach().

Escreva o seu próprio Array.prototype.myMap() e faça com que ele se comporte como o Array.prototype.map(). Você não deve usar o método map disponibilizado. O objeto Array pode ser acessado dentro de myMap pelo this.

```JavaScript
    // Minha Solução
    // A variável global
    const s = [23, 65, 98, 5];

    Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Altere apenas o código abaixo desta linha
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
    // Altere apenas o código acima desta linha
    return newArray;
    };

    const new_s = s.myMap(function(item) {
    return item * 2;
    });
```

## Usar o método filter para extrair dados de um array

Outra função útil de array é Array.prototype.filter(), ou simplesmente filter().

O filter chama uma função para cada elemento de um array e constrói um novo array contendo apenas os elementos para os quais a função retorna true. Em outras palavras, ele filtra o array de acordo com a função passada a ele. Ele o faz sem alterar o array original assim como map.

A função de callback toma três argumentos. O primeiro argumento é o elemento que está a ser processado. O segundo é o índice deste elemento e o terceiro é o array do qual filter foi chamado.

Abaixo você vê um exemplo do filter sendo usado do array users para retornar um novo array apenas com os usuários cuja idade é menor que 30. O exemplo usa apenas o primeiro argumento da função de callback por simplicidade.

```JavaScript
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersUnder30 = users.filter(user => user.age < 30);
    console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

## Implementar o método filter em um protótipo

Você pode aprender muito sobre o método filter se você implementá-lo por conta própria. Recomenda-se que você use um loop for ou o método Array.prototype.forEach().

Exemplo: Escreva o seu próprio Array.prototype.myFilter() e faça com que ele se comporte como o Array.prototype.filter(). Você não deve usar o método filter disponibilizado. O objeto Array pode ser acessado dentro de myFilter pelo this.

```JavaScript
    // A variável global
    const s = [23, 65, 98, 5];

    Array.prototype.myFilter = function(callback) {
        // Altere apenas o código abaixo desta linha
        const newArray = [];
        for (let i = 0; i < this.length; i++){
            if (callback(this[i])){
            newArray.push(this[i]);
            }
        }
        // Altere apenas o código acima desta linha
        return newArray;
    };

    const new_s = s.myFilter(function(item) {
        return item % 2 === 1;
    });
```

## Retornar parte de um array usando o método slice

O método slice retorna uma fatia de elementos de um array. Ele pode receber dois argumentos, sendo o primeiro o índice de onde começar a fatiar e o segundo de onde terminar. O índice de fim não é inclusivo. Se os argumentos não forem providenciados, o padrão é começar pelo início e terminar no fim, ou seja, é uma forma simples de criar uma cópia do array inteiro. O método slice retorna um novo array sem modificar o original.

Exemplo:

```JavaScript
    const arr = ["Cat", "Dog", "Tiger", "Zebra"];
    const newArray = arr.slice(1, 3); /// ["Dog", "Tiger"]
```

## Remover elementos de um array usando slice em vez de splice

É comum precisar remover alguns itens de um array e manter o resto. O JavaScript oferece o método splice, que recebe uma posição de onde começar a remover e o número de elementos para remover como argumentos para isso. Se o segundo argumento for omitido, o padrão é remover todos os itens até o final. No entanto, o método splice modifica o array original em que é chamado. Exemplo:

```JavaScript
    const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    cities.splice(3, 1);    
```

Aqui splice retorna a string London e a remove do array cities. cities terá o valor ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos no último desafio, o método slice não altera o array original; ele retorna um novo array que pode ser armazenado em uma variável. Lembre-se de que o método slice toma dois argumentos para os índices de início e fim e retorna um array com os elementos presentes entre esses índices (o índice de fim é não-inclusivo). Usar o método slice em vez do splice ajuda a evitar alterações em arrays e, portanto, efeitos colaterais.

## Combinar dois arrays usando o método concat

Concatenação significa juntar itens de ponta a ponta. Em JavaScript, strings e arrays possuem o método concat e ele funciona igualmente para os dois. Para arrays, o método é chamado em uma instância e um segundo array é passado como argumento. concat então junta os dois arrays em um só. O método retorna um novo array e deixa os dois originais intactos. Exemplo:

```JavaScript
    [1, 2, 3].concat([4, 5, 6]);
```

## Adicionar elementos ao final de um array usando concat em vez de push

Programação funcional é basicamente criar e utilizar funções que não modificam os seus argumentos.

O último desafio mostrou como usar o método concat para criar um novo array a partir da mescla de outros sem modificar os originais. Compare os métodos concat e push. O push adiciona itens ao final do mesmo array a partir do qual ele é chamado. Ele modifica o array. Exemplo:

```JavaScript
    const arr = [1, 2, 3];
    arr.push(4, 5, 6);
```

arr teria o valor modificado de: [1, 2, 3, 4, 5, 6], mas não é assim que se faz em programação funcional.

O concat nos oferece uma forma de mesclar novos itens ao final de um array sem alterá-lo.

## Usar o método reduce para analisar dados

Array.prototype.reduce(), ou simplesmente reduce(), realiza as operações mais gerais de todas as operações de array em JavaScript. Você pode resolver quase qualquer problema de processamento de array usando o método reduce.

O método reduce permite formas mais gerais de processamento de array, e é possível mostrar que tanto o filter quanto o map podem ser derivados como aplicações especiais de reduce. O método reduce percorre cada elemento de um array e retorna um valor (uma string, um número, um objeto ou array). Isso pode ser feito através de uma função de callback que é chamada para cada elemento.

A função de callback recebe quatro argumentos. O primeiro argumento é conhecido como o acumulador, ao qual é atribuído o resultado da função de callback na iteração anterior. O segundo é o elemento a ser processado. O terceiro é o índice do elemento e o quarto é o array do qual reduce foi chamado.

Além da função de callback, reduce tem um parâmetro adicional que recebe um valor inicial para o acumulador. Se o segundo parâmetro não for usado, então a primeira iteração é ignorada e ao acumulador é atribuído o primeiro elemento do array na segunda iteração.

Veja abaixo um exemplo usando reduce no array users para retornar a soma de todas as idades de todos os usuários. O exemplo usa apenas os dois primeiros argumentos pela simplicidade.

```JavaScript
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
    console.log(sumOfAges); // 64
```

No próximo exemplo abaixo, veja como um objeto pode ser retornado contendo os nomes dos usuários como chaves e suas idades como valores.

```JavaScript
    const users = [
        { name: 'John', age: 34 },
        { name: 'Amy', age: 20 },
        { name: 'camperCat', age: 10 }
    ];

    const usersObj = users.reduce((obj, user) => {
        obj[user.name] = user.age;
        return obj;
    }, {});
    console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }.
```

Exemplo: A variável watchList armazena um array de objetos com informações de diversos filmes. Use reduce para encontrar a média da classificação IMDB dos filmes dirigidos por Christopher Nolan. Você já aprendeu em desafios passados como filtrar e mapear dados de array com filter e map. Você pode precisar usar outras variáveis para retornar a nota média da função getRating. Observe que os valores das notas estão salvas como strings nos objetos e precisam ser convertidos para números antes que possam ser usados em operações matemáticas.

```JavaScript
    //Solução
    // A variável global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Add your code below this line
  const nolanData = watchList
    .reduce((data, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, { sum: 0, count: 0 });
  const averageRating = nolanData.sum / nolanData.count;
  // Add your code above this line
  return averageRating;
}

console.log(getRating(watchList));
```

## Usar as funções de ordem superior map, filter ou reduce para solucionar um problema complexo

Agora que você já realizou alguns desafios usando funções de ordem superior como map(), filter() e reduce(), você pode usá-las para resolver um desafio mais complexo.

Complete o código para a função squareList usando qualquer combinação de map(), filter() e reduce(). A função deve retornar uma nova matriz contendo apenas os inteiros positivos (números decimais não são inteiros) elevados ao quadrado quando uma matriz de números reais é passada para ela. Um exemplo de array de números reais é [-3, 4.8, 5, 3, -3.2].

```JavaScript
    // Solução
    const squareList = arr => {
    // Altere apenas o código abaixo desta linha
    let newArr = arr.filter(
        item => item > 0 & Number.isInteger(item)
    ).map(
        item => item*item
    )
    return newArr;
    // Altere apenas o código acima desta linha
    };

    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);
```

## Ordenar um array alfabeticamente usando o método sort

O método sort consegue ordenar os elementos de um array de acordo com uma função de callback.

```JavaScript
    function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
    }

    ascendingOrder([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5]
```

```JavaScript
    function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
    }

    reverseAlpha(['l', 'h', 'z', 'b', 's']); // ['z', 's', 'l', 'h', 'b']
```

O método de ordenação padrão do JavaScript é por valores de ponto Unicode, o que pode nos dar resultados inesperados. Por isso você é encorajado a providenciar uma função de callback para especificar como a ordenação deve ocorrer. Quando tal função callback (comumente chamada de compareFunction, ou função de comparação) é providenciada, os elementos do array são ordenados de acordo com o valor de retorno dela: se compareFunction(a,b) retornar um valor menor que 0 para dois elementos a e b, então a virá antes de b. Se compareFunction(a,b) retornar um valor maior que 0 para dois elementos a e b, então b virá antes de a. Finalmente, se compareFunction(a,b) retornar 0, então a e b não trocarão de lugar entre si.

Exemplo: Use o método sort na função alphabeticalOrder para ordenar os elementos de arr em ordem alfabética. A função deve retornar o array ordenado.

```JavaScript
    function alphabeticalOrder(arr) {
    // Altere apenas o código abaixo desta linha
    arr.sort(
        function(a,b) {
            return a===b?0: a < b? -1:1;
        }
    )
    return arr
    // Altere apenas o código acima desta linha
    }

    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

## Retornar um array ordenado sem modificar o array original

Um efeito colateral do método sort é que ele altera a ordem dos elementos no array original. Em outras palavras, o array sofre uma mutação. Uma forma de evitar isto é primeiro concatenar um array vazio ao array a ordenar (não esqueça que slice e concat retornam um novo array) e, então, executar o método sort no novo array.

Use o método sortna função nonMutatingSort para ordenar os elementos de um array em ordem crescente. A função deve retornar um novo array sem alterar a variável globalArray.

```JavaScript
    const globalArray = [5, 6, 3, 2, 9];

    function nonMutatingSort(arr) {
    // Altere apenas o código abaixo desta linha
    let newArray = arr.slice();
    newArray.sort(
        function(a,b) {
            return a-b;
        }
    )
    // Altere apenas o código acima desta linha
    }

    nonMutatingSort(globalArray);
```

## Dividir uma string em um array usando o método split

O método split divide uma string em um array de strings. Ela recebe um delimitador, que pode ser um caractere ou uma expressão regular, como argumento para dividir a string. Por exemplo, se o delimitador for um espaço, você recebe um array de palavras. Se o delimitador for a string vazia, você recebe um array contendo os caracteres da string.

Abaixo há dois exemplos de uso de split, um separando uma string por espaços, e outro por dígitos usando uma expressão regular:

```JavaScript
    const str = "Hello World";
    const bySpace = str.split(" ");

    const otherString = "How9are7you2today";
    const byDigits = otherString.split(/\d/);
```

bySpace terá o valor ["Hello", "World"] e byDigits terá o valor ["How", "are", "you", "today"].

Como strings são imutáveis, o método split facilita o trabalho com elas.

Exemplo: Use o método split na função splitify para dividir str em um array de palavras. A função deve retornar o array. Note que as palavras nem sempre são separadas por espaços; o array não deve conter nenhuma pontuação.

```JavaScript
    function splitify(str) {
    // Altere apenas o código abaixo desta linha
    let arr = str.split(
        /[\b\W]/
    )
    return arr;
    // Altere apenas o código acima desta linha
    }

    splitify("Hello World,I-am code");
```

## Transformar um array em uma string usando o método join

O método join é usado para juntar os elementos de um array, resultando em uma string. Ele recebe um delimitador como argumento, que é usado para conectar os elementos na string.

Exemplo:

```JavaScript
    const arr = ["Hello", "World"];
    const str = arr.join(" ");  
```

O valor de str é Hello World.

Use o método join (entre outros) dentro da função sentensify para criar uma frase a partir das palavras da string str. A função deve retornar uma string. Por exemplo, I-like-Star-Wars deve ser convertido para I like Star Wars. Não use o método replace neste desafio.

```JavaScript
    function sentensify(str) {
    // Altere apenas o código abaixo desta linha
    // Faz split usando qualquer caractere alphanumerico como delimitador
    let arr = str.split(/[\W]/);
    // Junta tudo novamente usando espaço como delimitador
    let newStr = arr.join(" ");
    return newStr;
    // Altere apenas o código acima desta linha
    }

    sentensify("May-the-force-be-with-you");
```

## Usar programação funcional para converter strings em slugs de URL

Os últimos desafios cobriram uma série de métodos úteis de strings e arrays que usam princípios de programação funcional. Também aprendemos o poderoso método reduce, que é usado para reduzir arrays a um único valor. Seja para calcular médias ou para ordenação, qualquer operação de array pode ser feita ao usá-lo. Lembre-se de que map e filter são casos especiais de reduce.

Vamos combinar o que aprendemos para resolver um problema prático.

Muitos sites de gerenciamento de conteúdo (content management sites, CMS) usam o título das publicações como parte da URL para maior legibilidade. Por exemplo, se você publicar um artigo no Medium chamado Stop Using Reduce, é provável que o URL use o título em sua composição: .../stop-using-reduce. Talvez você já tenha percebido que acontece o mesmo no freeCodeCamp.

Complete a função urlSlug para que ela converta a string title e a retorne sem maiúsculas e com hifens no lugar dos espaços. Você pode usar qualquer método coberto nesta seção, mas não use replace. Estes são os requisitos:

A entrada é uma string com espaços e letras maiúsculas

A saída é uma string cujos espaços foram substituídos por hifens (-)

A saída não deve conter letras maiúsculas

A saída não deve conter espaços

```JavaScript
    // SOLUÇÃO
    // Altere apenas o código abaixo desta linha
    function urlSlug(title) { 
    return title
        .toLowerCase() // para caixa baixa
        .trim() // remove espaços no começo e no final
        .split(/\s+/) // separa por um ou mais espaços
        .join("-"); // junta tudo com - como delimitador
    }
    // Altere apenas o código acima desta linha
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

## Usar o método every para checar se todos os elementos em um array atendem a um critério

O método every funciona verificando se todos os elementos de um array passam em um teste. Ele retorna um booleano: true se todos os valores atendem ao critério e false caso contrário.

Por exemplo, o código a seguir verifica se todos os elementos no array numbers são menores que 10:

```JavaScript
    const numbers = [1, 5, 8, 0, 10, 11];

    numbers.every(function(currentValue) {
        return currentValue < 10;
    });
```

O método every retorna false neste exemplo.

Use o método every dentro da função checkPositive para checar se todos os elementos em arr são positivos. A função deve retornar um valor booleano.

```JavaScript
    function checkPositive(arr) {
        // Altere apenas o código abaixo desta linha

        return arr.every(function(currentValue) {
            return currentValue >= 0;
        });
        // Altere apenas o código acima desta linha
    }

    checkPositive([1, 2, 3, -4, 5]);
```

## Usar o método some para checar se pelo menos um elemento em um array atende a um critério

O método some funciona verificando se pelo menos um dos elementos de um array passam em um teste. Ele retorna um booleano: true se pelo menos um valor atende ao critério e false caso contrário.

Por exemplo, o código a seguir verifica se qualquer elemento no array numbers é menor que 10:

```JavaScript
    const numbers = [10, 50, 8, 220, 110, 11];

    numbers.some(function(currentValue) {
    return currentValue < 10;
    });
```

O método some retorna true.

Use o método some na função checkPositive para verificar se algum elemento em arr é positivo. A função deve retornar um valor booleano.

```JavaScript
    function checkPositive(arr) {
    // Altere apenas o código abaixo desta linha
    return arr.some(
        function(currentValue) {
        return currentValue > 0;
        }
    );
    // Altere apenas o código acima desta linha
    }

    checkPositive([1, 2, 3, -4, 5]);
```

## Iniciar com currying e aplicação parcial

A aridade de uma função é o número de argumentos que ela toma. Realizar currying em uma função significa transformar uma função de aridade N em N funções de aridade 1.

Em outras palavras, a função é reestruturada para que ela receba apenas um argumento e retorne outra função que recebe o próximo argumento e assim por diante.

```JavaScript
    function unCurried(x, y) {
        return x + y;
    }

    function curried(x) {
        return function(y) {
            return x + y;
        }
    }

    const curried = x => y => x + y

    curried(1)(2)
```

Isso é útil em seu programa quando você não pode fornecer todos os argumentos para uma função de uma só vez. Você pode salvar cada chamada de função em uma variável, que será uma referência à função retornada que recebe o próximo argumento quando ele estiver disponível. Um exemplo usando a função do exemplo acima:

```JavaScript
    const funcForY = curried(1);
    console.log(funcForY(2)); // 3
```

Da mesma forma, aplicação parcial pode ser descrita como a aplicação de alguns argumentos a uma função e o retorno de outra função à qual é aplicada a mais argumentos. Exemplo:

```JavaScript
    function impartial(x, y, z) {
        return x + y + z;
    }

    const partialFn = impartial.bind(this, 1, 2);
    partialFn(10); // 13
```

Complete a função add de forma que ela use currying para adicionar os parâmetros x, y e z.

```JavaScript
    function add(x) {
    // Add your code below this line
    return function(y) {
        return function(z) {
        return x + y + z;
        };
    };
    // Add your code above this line
    }
    add(10)(20)(30);
```







