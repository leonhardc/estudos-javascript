/*

    De acordo com a Terceira Lei de Kepler, o período orbital  
    T  de dois pontos de massa orbitando uma à outra em uma 
    órbita circular ou elíptica é:

    T = 2*pi * sqrt(a^3/mi)

    Onde:
        * a  é o eixo semimaior da órbita
        * μ(mi) = GM  é o parâmetro gravitacional padrão
        * G  é a constante gravitacional,
        * M  é a massa do maior corpo.

    Retorna um novo array que transforma a altitude média dos 
    elementos em seus períodos órbita (em segundos).

*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);