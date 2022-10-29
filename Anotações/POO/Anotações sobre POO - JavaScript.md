# Introdução a POO com JavaScript

- [Introdução a POO com JavaScript](#introdução-a-poo-com-javascript)
	- [Definindo um Objeto](#definindo-um-objeto)
	- [Acessando os valores dos atributos em um objeto:](#acessando-os-valores-dos-atributos-em-um-objeto)
	- [Criar um método em um objeto JavaScript](#criar-um-método-em-um-objeto-javascript)
	- [Fazer código mais reutilizável com a palavra-chave this](#fazer-código-mais-reutilizável-com-a-palavra-chave-this)
	- [Definir uma função construtora](#definir-uma-função-construtora)
	- [Usar um construtor para criar objetos](#usar-um-construtor-para-criar-objetos)
	- [Estender construtores para receber argumentos](#estender-construtores-para-receber-argumentos)
	- [Verificar o construtor de um objeto com instanceof](#verificar-o-construtor-de-um-objeto-com-instanceof)
	- [Entender propriedades próprias](#entender-propriedades-próprias)
	- [Usar propriedades de protótipos para reduzir código duplicado](#usar-propriedades-de-protótipos-para-reduzir-código-duplicado)
	- [Iterar sobre todas as propriedades](#iterar-sobre-todas-as-propriedades)
	- [Entender a propriedade construtora](#entender-a-propriedade-construtora)
	- [Mudar o protótipo para um novo objeto](#mudar-o-protótipo-para-um-novo-objeto)
	- [Lembrar de definir a propriedade construtora quando alterar o protótipo](#lembrar-de-definir-a-propriedade-construtora-quando-alterar-o-protótipo)
	- [Entender de onde vem o protótipo de um objeto](#entender-de-onde-vem-o-protótipo-de-um-objeto)
	- [Entender a cadeia de prototipos](#entender-a-cadeia-de-prototipos)
	- [Utilizar herança para não se repetir](#utilizar-herança-para-não-se-repetir)
	- [Herdar comportamentos de um supertipo](#herdar-comportamentos-de-um-supertipo)
	- [Definir o protótipo da classe filha para que seja uma instancia da classe pai](#definir-o-protótipo-da-classe-filha-para-que-seja-uma-instancia-da-classe-pai)
	- [Redefinir uma propriedade herdada do construtor](#redefinir-uma-propriedade-herdada-do-construtor)
	- [Adicionar métodos após a herança](#adicionar-métodos-após-a-herança)


## Definindo um Objeto


Um objeto em programação funciona como a representação de objeto do mundo real (um carro, um cachorro, uma caneta). Um objeto no mundo real tem atributos (numero de pernas, numero de rodas, idade, nome, modelo) e faz coisas (anda, fala). O mesmo acontece com objetos na programação, objetos na programação tem atributos, e métodos (funções).

```JavaScript
	let dog = {
		name: "Ralph",
		numLegs: 4
	}
```

Obs: Os objetos em JavaScript são definidos de maneira parecida com dicionários em Python. A sintaxe é a seguinte


```JavaScript
	<tipo>(let, var, const) <name>(nome que representa o objeto) = {
		<atributos>: <valores> 
}
```


## Acessando os valores dos atributos em um objeto:


Podemos acessar os valores de um objeto com a notação de ponto (.) como abaixo:


```JavaScript
	console.log(dog.name) // exibe "Ralph"
	console.log(dog.numLegs) // exibe 4
```
	
## Criar um método em um objeto JavaScript
	

No objeto abaixo podemos fazer:

```JavaScript
	let dog = {
		name: "Ralph",
		numLegs: 4,
		sayName: function() {return "The name of this dog is " + dog.name + ".";}
	}
```
No objeto acima, o método sayName() retorna a frase "The name of this dog is Ralph."
	
## Fazer código mais reutilizável com a palavra-chave this


O this funciona de maneira semelhante ao self em python para quando queremos acessar campos do objeto
dento do próprio objeto. Funciona bem pois nos permite deixar o código mais reutilizável, pois, como no caso
da definição do objeto acima, quando usamos dog.name, estamos nos referindo somente ao atributo name do objeto 	dog. Teriamos um erro de tentássemos acessar o atributo name de um objeto cat, por exemplo, utilizando essa 
chamada de atributo. Para resolvermos isso podemos fazer o seguinte. 

```JavaScript
	let dog = {
		name: "Ralph",
		numLegs: 4,
		sayName: function() {return "The name of this dog is " + this.name + ".";}
	}
```
	
## Definir uma função construtora


Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao 	novo objeto. Pense neles como uma planta para a criação de novos objetos.


Aqui está um exemplo de construtor:

```JavaScript
	function Bird() {
			this.name = "Albert";
			this.color = "blue";
			this.numLegs = 2;
	}
```

## Usar um construtor para criar objetos

Usando o construtor definido na seção anterior, podemos definir um objeto em javascript como abaixo:

```JavaScript
	let blueBird = new Bird();
```

Note que o operador new é usado quando chamamos o construtor. Isso avisa ao JavaScript para criar uma nova instância de Bird chamado blueBird. Sem o operador new, this dentro do construtor não iria apontar para o objeto recentemente criado, dando resultados inesperados. 

## Estender construtores para receber argumentos

Os construtores Bird e Dog do último desafio funcionaram bem. No entanto, note que todos os Birds que são criados com o construtor Bird são automaticamente nomeados Albeart, são da cor azul e possuem duas pernas. E se você deseja pássaros com diferentes valores para seus nomes e cores? É possível alterar estas propriedades de cada pássaro manualmente, mas isso daria bastante trabalho:

```JavaScript
	let swan = new Bird();
	swan.name = "Carlos";
	swan.color = "white";
```

Suponha que você está escrevendo um programa para registrar centenas ou até milhares de diferentes pássaros em um aviário. Seria necessário muito tempo para criar todos estes pássaros, e então alterar as propriedades para os diferentes valores de cada um. Para criar diferentes objetos Bird de forma mais fácil, você pode projetar o construtor de Bird para aceitar parâmetros:

```JavaScript
	function Bird(name, color) {
		this.name = name;
		this.color = color;
		this.numLegs = 2;
	}
```

## Verificar o construtor de um objeto com instanceof

Toda vez que a função construtora cria um novo objeto, o objeto é definido como uma instance do seu construtor. JavaScript provê uma forma conveniente para verificar isso com o operador instanceof. instanceof permite que você compare um objeto a um construtor, retornando true ou false caso seja ou não um objeto criado pelo construtor, respectivamente. Exemplo:

```JavaScript
	let Bird = function(name, color) {
		this.name = name;
		this.color = color;
		this.numLegs = 2;
	}

	let crow = new Bird("Alexis", "black");

	crow instanceof Bird; // retorna true
```

Se um objeto for criado sem usar um construtor, instanceof verificará que não é uma instância daquele construtor:

```JavaScript
	let canary = {
		name: "Mildred",
		color: "Yellow",
		numLegs: 2
	};

	canary instanceof Bird; // retorna false
```

## Entender propriedades próprias

No próximo exemplo, o construtor de Bird define duas propriedades: name e numLegs:

```JavaScript
	function Bird(name) {
	this.name = name;
	this.numLegs = 2;
	}

	let duck = new Bird("Donald");
	let canary = new Bird("Tweety");
```

name e numLegs são chamados own properties, pois são definidos diretamente na instância do objeto. Isso significa que cada duck e canary possuem suas próprias cópias separadas destas propriedades. Na verdade, toda instância de Bird terá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades próprias (own properties) de duck para o array ownProps:

```JavaScript
	let ownProps = [];

	for (let property in duck) {
	if(duck.hasOwnProperty(property)) {
		ownProps.push(property);
	}
	}

	console.log(ownProps);
```

O console vai exibir o valor ["name", "numLegs"].

## Usar propriedades de protótipos para reduzir código duplicado

Já que numLegs provavelmente terá o mesmo valor para todas as instâncias de Bird, você tem a variável numLegs duplicada dentro de cada instância de Bird.

Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se há milhões de instâncias. Neste cenário teríamos muitas variáveis duplicadas.

Uma maneira melhor é usar o prototype de Bird. Propriedades dentro de prototype são compartilhados entre todas as instâncias de Bird. Aqui está como adicionar numLegs para o prototype de Bird:

```JavaScript
	Bird.prototype.numLegs = 2;
```

Já que todas as instâncias automaticamente possuem as propriedades no prototype, pense no prototype como uma "receita" para criar objetos. Note que o prototype para duck e canary faz parte do construtor de Bird como Bird.prototype. Quase todos objetos em JavaScript possuem a propriedade prototype o qual é parte da função construtora que o criou.

## Iterar sobre todas as propriedades

Até agora você já viu dois tipos de propriedades: as propriedades own properties e prototype. Propriedades próprias (ou Own properties) são definidas diretamente na própria instância do objeto. E as propriedades do protótipo são definidas em prototype.

```JavaScript
	function Bird(name) {
	this.name = name;  //own property
	}

	Bird.prototype.numLegs = 2; // prototype property

	let duck = new Bird("Donald");
```

Aqui está como você adiciona own properties duck para o array ownProps e propriedades prototype para o array prototypeProps:

```JavaScript
	let prototypeProps = [];

	for (let property in duck) {
	if(duck.hasOwnProperty(property)) {
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
	}

	console.log(ownProps); // ["name"]
	console.log(prototypeProps); // ["numLegs"]
```

## Entender a propriedade construtora

Tem uma propriedade especial do constructor localizada nas instâncias dos objetos duck e beagle que foram criados anteriormente:

```JavaScript
	let duck = new Bird();
	let beagle = new Dog();

	console.log(duck.constructor === Bird); 
	console.log(beagle.constructor === Dog);
```

Note que a propriedade constructor é uma referência a função construtora que criou a instância. A vantagem da propriedade constructor é que se torna possível verificar essa propriedade para descobrir qual o tipo do objeto. Aqui está um exemplo de como isso poderia ser utilizado:

```JavaScript
	function joinBirdFraternity(candidate) {
		if (candidate.constructor === Bird) {
			return true;
		} else {
			return false;
		}
	}
```

## Mudar o protótipo para um novo objeto

Até o momento, você tem adicionado propriedades para cada prototype individualmente:

```JavaScript
	Bird.prototype.numLegs = 2;
```

Uma forma mais eficiente é definir o prototype para um novo objeto que já possui as propriedades. Dessa maneira, as propriedades são adicionadas todas de uma vez:

```JavaScript
	Bird.prototype = {
		numLegs: 2, 
		eat: function() {
			console.log("nom nom nom");
		},
		describe: function() {
			console.log("My name is " + this.name);
		}
	};
```

## Lembrar de definir a propriedade construtora quando alterar o protótipo

Tem um efeito colateral crucial de definir manualmente o protótipo de um novo objeto. Isso apaga a propriedade constructor! Essa propriedade pode ser utilizada para verificar qual função construtora criou a instância, mas já que a propriedade foi sobrescrita, agora retorna resultados falsos:

```JavaScript
	duck.constructor === Bird; // false
	duck.constructor === Object; // true
	duck instanceof Bird;	// true
```

Para corrigir isso, toda vez que o protótipo é manualmente definido para um novo objeto, lembre-se de definir a propriedade constructor:

```JavaScript
	Bird.prototype = {
		constructor: Bird,
		numLegs: 2,
		eat: function() {
			console.log("nom nom nom");
		},
		describe: function() {
			console.log("My name is " + this.name); 
		}
	};
```

## Entender de onde vem o protótipo de um objeto

Assim como uma pessoa herda o gene de seus parentes, um objeto herda seu prototype diretamente da função construtora que o criou. Por exemplo, aqui o construtor de Bird cria um objeto duck:

```JavaScript
	function Bird(name) {
		this.name = name;
	}

	let duck = new Bird("Donald");
```

duck herda seu prototype da função construtora de Bird. Você pode mostrar a relação com o método isPrototypeOf:

```JavaScript
	Bird.prototype.isPrototypeOf(duck);
```

## Entender a cadeia de prototipos

Todos os objetos em JavaScript (com algumas exceções) possuem um prototype. Além de que, um prototype de um objeto ser um próprio objeto.

```JavaScript
	function Bird(name) {
		this.name = name;
	}

	typeof Bird.prototype;
```

Devido ao fato de um prototype ser um objeto, um prototype pode ter seu próprio prototype! Neste caso, o prototype de Bird.prototype é um Object.prototype:

```JavaScript
	Object.prototype.isPrototypeOf(Bird.prototype);
```

Como isso é útil? Você pode ser lembrar que o método hasOwnProperty do desafio anterior:

```JavaScript
	let duck = new Bird("Donald");
	duck.hasOwnProperty("name");
```

O método hasOwnProperty é definido em Object.prototype, o qual pode ser acessado por Bird.prototype, o qual pode ser acessado por duck. Este é um exemplo de cadeia de prototype. Nesta cadeia de prototype, Bird é um supertipo para duck, enquanto duck é o subtipo. Object é um supertipo para ambos Bird e duck. Object é um supertipo para todos os objetos em JavaScript. Desta forma, qualquer objeto pode utilizar o método hasOwnProperty.

## Utilizar herança para não se repetir

Tem um princípio da programação chamado Don't Repeat Yourself (DRY) - Não se Repita. O motivo pelo qual código repetido é um problema se deve ao fato de qualquer alteração exige correção de código em vários locais. Geralmente isso significa mais trabalho para os programadores e mais espaço para erros.

Note que, no exemplo abaixo, o método describe é compartilhado por Bird e Dog:

```JavaScript
	Bird.prototype = {
		constructor: Bird,
		describe: function() {
			console.log("My name is " + this.name);
		}
	};

	Dog.prototype = {
		constructor: Dog,
		describe: function() {
			console.log("My name is " + this.name);
		}
	};
```

O método describe é repetido em dois locais. O código pode ser editado para seguir o princípio DRY (Não se Repita) ao criar um supertype (ou parente) chamado Animal:

```JavaScript
	function Animal() { };

	Animal.prototype = {
		constructor: Animal, 
		describe: function() {
			console.log("My name is " + this.name);
		}
	};		
```

Desde que Animal inclui o método describe, você pode remover ele de Bird e Dog:

```JavaScript
	Bird.prototype = {
		constructor: Bird
	};

	Dog.prototype = {
		constructor: Dog
	};
```

## Herdar comportamentos de um supertipo

No desafio anterior, você criou um supertype chamado Animal que define os comportamentos compartilhados por todos os animais:

```JavaScript
	function Animal() { }
	Animal.prototype.eat = function() {
		console.log("nom nom nom");
	};
```

Este e o próximo desafio vai abordar como reutilizar métodos de Animal dentro de Bird e Dog sem ter de definir os métodos novamente. Ele utiliza uma técnica chamada herança. Este desafio cobrirá o primeiro passo: fazer uma instância do supertype (ou parente). Você já sabe uma forma de criar instâncias de Animal utilizando o operador new:

```JavaScript
	let animal = new Animal();
```

Há algumas desvantagens quando utilizamos essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:

```JavaScript
	let animal = Object.create(Animal.prototype);
```

Object.create(obj) cria um novo objeto, e define obj como o novo prototype do objeto. Lembre-se que o prototype é como uma "receita" para criar um objeto. Ao definir o prototype de animal para ser um prototype de Animal, você está efetivamente dando a instância animal a mesma "receita" de qualquer outra instância de Animal.

```JavaScript
	animal.eat();
	animal instanceof Animal;
```

## Definir o protótipo da classe filha para que seja uma instancia da classe pai

No desafio anterior, você viu o primeiro passo para herdar comportamento do supertipo (ou parente) Animal: fazendo uma instância de Animal.

Este desafio cobre o próximo passo: definir o prototype do subtipo (ou filho) - neste caso, Bird - para ser uma instância de Animal.

```JavaScript
	Bird.prototype = Object.create(Animal.prototype);
```

Lembre-se de que o prototype é como uma receita para criar um objeto. De certo modo, a receita de Bird agora inclui todos os "ingredientes" importantes de Animal.

```JavaScript
	let duck = new Bird("Donald");
	duck.eat();
```

duck herda todas as propriedades de Animal, incluindo o método eat.

## Redefinir uma propriedade herdada do construtor

Quando um objeto herda seu prototype de outro objeto, ele também herda a propriedade construtora do supertipo.

Exemplo:

```JavaScript
	function Bird() { }
	Bird.prototype = Object.create(Animal.prototype);
	let duck = new Bird();
	duck.constructor
```

Mas duck e todas as instâncias de Bird devem mostrar que eles foram construídos por Bird e não Animal. Para fazer isso, você pode manualmente definir a propriedade construtora de Bird para o objeto Bird:

```JavaScript
	Bird.prototype.constructor = Bird;
	duck.constructor
```

## Adicionar métodos após a herança

Uma função construtora, ou simplesmente construtor, que herda seu objeto de prototype de uma função construtora de supertipo, além dos métodos herdados, ainda poderá ter seus próprios métodos.

Por exemplo, Bird é um construtor que herda seu prototype de Animal:

```JavaScript
	function Animal() { }
	Animal.prototype.eat = function() {
		console.log("nom nom nom");
	};
	function Bird() { }
	Bird.prototype = Object.create(Animal.prototype);
	Bird.prototype.constructor = Bird;
```

Como adicional do que é herdado da classe Animal, você deseja adicionar o comportamento que é único de objetos Bird. Aqui, Bird definirá a função fly(). As funções são adicionadas ao Bird's prototype (protótipo do pássaro) da mesma forma que qualquer função construtora:

```JavaScript
	Bird.prototype.fly = function() {
  		console.log("I'm flying!");
	};
```
Agora as instâncias de Bird terão ambos os métodos, eat() e fly():

```JavaScript
	let duck = new Bird();
	duck.eat(); // nom nom nom
	duck.fly(); // I'm flying!
```


