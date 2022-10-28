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


## Definindo um Objeto


Um objeto em programação funciona como a representação de objeto do mundo real (um carro, um cachorro, uma caneta). Um objeto no mundo real tem atributos (numero de pernas, numero de rodas, idade, nome, modelo) e faz coisas (anda, fala). O mesmo acontece com objetos na programação, objetos na programação tem atributos, e métodos (funções).

```
	let dog = {
		name: "Ralph",
		numLegs: 4
	}
```

Obs: Os objetos em JavaScript são definidos de maneira parecida com dicionários em Python. A sintaxe é a seguinte


```
<tipo>(let, var, const) <name>(nome que representa o objeto) = {
	<atributos>: <valores> 
}
```


## Acessando os valores dos atributos em um objeto:


Podemos acessar os valores de um objeto com a notação de ponto (.) como abaixo:


```
console.log(dog.name) // exibe "Ralph"
console.log(dog.numLegs) // exibe 4
```
	
## Criar um método em um objeto JavaScript
	

No objeto abaixo podemos fazer:

```
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

```
let dog = {
	name: "Ralph",
	numLegs: 4,
	sayName: function() {return "The name of this dog is " + this.name + ".";}
}
```
	
## Definir uma função construtora


Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao 	novo objeto. Pense neles como uma planta para a criação de novos objetos.


Aqui está um exemplo de construtor:

```
function Bird() {
		this.name = "Albert";
		this.color = "blue";
		this.numLegs = 2;
}
```

## Usar um construtor para criar objetos

Usando o construtor definido na seção anterior, podemos definir um objeto em javascript como abaixo:

```
	let blueBird = new Bird();
```

Note que o operador new é usado quando chamamos o construtor. Isso avisa ao JavaScript para criar uma nova instância de Bird chamado blueBird. Sem o operador new, this dentro do construtor não iria apontar para o objeto recentemente criado, dando resultados inesperados. 

## Estender construtores para receber argumentos

Os construtores Bird e Dog do último desafio funcionaram bem. No entanto, note que todos os Birds que são criados com o construtor Bird são automaticamente nomeados Albeart, são da cor azul e possuem duas pernas. E se você deseja pássaros com diferentes valores para seus nomes e cores? É possível alterar estas propriedades de cada pássaro manualmente, mas isso daria bastante trabalho:

```
	let swan = new Bird();
	swan.name = "Carlos";
	swan.color = "white";
```

Suponha que você está escrevendo um programa para registrar centenas ou até milhares de diferentes pássaros em um aviário. Seria necessário muito tempo para criar todos estes pássaros, e então alterar as propriedades para os diferentes valores de cada um. Para criar diferentes objetos Bird de forma mais fácil, você pode projetar o construtor de Bird para aceitar parâmetros:

```
	function Bird(name, color) {
		this.name = name;
		this.color = color;
		this.numLegs = 2;
	}
```

## Verificar o construtor de um objeto com instanceof

Toda vez que a função construtora cria um novo objeto, o objeto é definido como uma instance do seu construtor. JavaScript provê uma forma conveniente para verificar isso com o operador instanceof. instanceof permite que você compare um objeto a um construtor, retornando true ou false caso seja ou não um objeto criado pelo construtor, respectivamente. Exemplo:

```
	let Bird = function(name, color) {
		this.name = name;
		this.color = color;
		this.numLegs = 2;
	}

	let crow = new Bird("Alexis", "black");

	crow instanceof Bird; // retorna true
```

Se um objeto for criado sem usar um construtor, instanceof verificará que não é uma instância daquele construtor:

```
	let canary = {
		name: "Mildred",
		color: "Yellow",
		numLegs: 2
	};

	canary instanceof Bird; // retorna false
```

## Entender propriedades próprias

No próximo exemplo, o construtor de Bird define duas propriedades: name e numLegs:

```
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

name e numLegs são chamados own properties, pois são definidos diretamente na instância do objeto. Isso significa que cada duck e canary possuem suas próprias cópias separadas destas propriedades. Na verdade, toda instância de Bird terá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades próprias (own properties) de duck para o array ownProps:

```
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

```
	Bird.prototype.numLegs = 2;
```

Já que todas as instâncias automaticamente possuem as propriedades no prototype, pense no prototype como uma "receita" para criar objetos. Note que o prototype para duck e canary faz parte do construtor de Bird como Bird.prototype. Quase todos objetos em JavaScript possuem a propriedade prototype o qual é parte da função construtora que o criou.

## Iterar sobre todas as propriedades

Até agora você já viu dois tipos de propriedades: as propriedades own properties e prototype. Propriedades próprias (ou Own properties) são definidas diretamente na própria instância do objeto. E as propriedades do protótipo são definidas em prototype.

```
	function Bird(name) {
	this.name = name;  //own property
	}

	Bird.prototype.numLegs = 2; // prototype property

	let duck = new Bird("Donald");
```

Aqui está como você adiciona own properties duck para o array ownProps e propriedades prototype para o array prototypeProps:

```
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

```
	let duck = new Bird();
	let beagle = new Dog();

	console.log(duck.constructor === Bird); 
	console.log(beagle.constructor === Dog);
```

Note que a propriedade constructor é uma referência a função construtora que criou a instância. A vantagem da propriedade constructor é que se torna possível verificar essa propriedade para descobrir qual o tipo do objeto. Aqui está um exemplo de como isso poderia ser utilizado:

```
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

```
	Bird.prototype.numLegs = 2;
```

Uma forma mais eficiente é definir o prototype para um novo objeto que já possui as propriedades. Dessa maneira, as propriedades são adicionadas todas de uma vez:

```
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



