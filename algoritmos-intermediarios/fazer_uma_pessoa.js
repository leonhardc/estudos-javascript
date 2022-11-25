/*
    Preencha o construtor do objeto com os seguintes métodos abaixo:
    * getFirstName()
    * getLastName()
    * getFullName()
    * setFirstName(first)
    * setLastName(last)
    * setFullName(firstAndLast)
*/

const Person = function(firstAndLast) {
    // Nome completo, recebe o parametro inicial do construtor.
    let fullName = firstAndLast;
    /* Getters  */
    // Retorna primeiro nome
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    // Retorna segundo nome
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    // Retorna nome completo
    this.getFullName = function() {
      return fullName;
    };
    
    /* Setters */
    // Seta o primeiro nome
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    // Seta o segundo nome
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    // Seta o nome completo
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  const bob = new Person("Bob Ross");
  console.log(bob.getFullName());