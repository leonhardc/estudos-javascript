/*
    Retorne true se a string fornecida for um palíndromo. 
    Caso contrário, retorne false.

    Um palíndromo é uma palavra ou frase que é dita da mesma 
    maneira na ordem natural que na ordem inversa, ignorando 
    pontuação, capitalização e espaçamento.

    Observação: você precisará remover todos os caracteres 
    não alfanuméricos (pontuação, espaços e símbolos) e transforme 
    tudo na mesma capitalização (letra em minúsculo ou maiúsculo) 
    para verificar se determinada palavra ou frase é um palíndromo.

    Vamos passar strings em diferentes formatos, como racecar, 
    RaceCarar e race CAR entre outros.

    Nós também passaremos strings com símbolos especiais, como 
    2A3*3a2, 2A3 3a2 e 2_A3*3#A2.
*/


function palindrome(str) {
    /*
        Coloca todos os caracteres da string em minusculo e 
        substitui todas as não palavras e o underline da 
        string por "".
    */
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
        /*
            Faz uma checagem em todos os caracteres da string, sempre
            espelhando a checagem, o caractere da str[i] deve ser igual
            ao caractere str[len-i] para todo i, se não, a palavra não é
            um palindromo.
        */
        if(str[i] !== str[len-i]) {
            return false;
        }
    }
    return true; /* Caso todas as verificações passem, retorna true
                    ou seja, a string é um palindromo */
  }

