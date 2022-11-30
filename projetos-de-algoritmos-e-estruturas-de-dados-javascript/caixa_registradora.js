function checkCashRegister(price, cash, cid) {
    let troco = cash - price;
    let escala = 100;
    let moedas = [
        ["PENNY",0.01],
        ["NICKEL",0.05],
        ["DIME",0.1],
        ["QUARTER",0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]
    let total_caixa = 0;
    for(let quantia of cid){ total_caixa += quantia[1]; } // calculo do total no caixa
    total_caixa = total_caixa.toFixed(2); // Fixar duas casas decimais para o resultado

    /* Checagens */
    if(troco >= total_caixa){ // Checa se há troco suficiente na caixa registradora
        if(troco == total_caixa){
            // Se o dinheiro em caixa for exatamente igual ao dinheiro do
            // troco
            let objReturn = {
                status: "CLOSED", 
                change: []
            };
            objReturn.change = cid.slice();
            return objReturn
        } 
        // No caso do total do caixa ser menor do que o troco devido       
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else {
        total_caixa = 0;
        let caixa = moedas.filter(item => item[1] <= troco);
        let troco_caixa = [];
        for(let moeda of caixa){
            troco_caixa.push(cid.filter(item => item[0] == moeda[0])[0]);
            }
        for(let moeda of troco_caixa){ total_caixa += moeda[1] }

        if(troco > total_caixa){ // verificar se o troco pode ser dado nas moedas que tem em caixa
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        else{
            
            let caixa = moedas.filter(item => item[1] <= troco);
            let aux = caixa.slice();
            let troco_caixa = [];
            for(let moeda of caixa){
                troco_caixa.push(cid.filter(item => item[0] == moeda[0])[0]);
                aux.filter(item => item[0] === moeda[0])[0]
                .push(cid.filter(item => item[0] == moeda[0])[0][1]);
                
            }
            caixa = aux.reverse(); // caixa atualizado
            
            // iterar sobre o array e buscar todos as moedas que podem ser usadas como troco
            let objReturn = {status: "OPEN", change: []}
            let  add, divisor;
            let resto = troco*escala;
            for(let item of caixa){
                // Primeira parte
                let [moeda, unitario, valorCaixa] = item;
                unitario *=  escala;
                valorCaixa *= escala;
                
                if(resto%unitario === 0){
                    objReturn.change.push([moeda, (resto/escala)]);
                    return objReturn;
                }

                // Segunda parte
                if(resto >= valorCaixa){
                    add = valorCaixa; // adiciona o valor em caixa em changed
                    if(add !== 0){
                        objReturn.change.push([moeda, (add/escala)]);
                    }
                    resto -= valorCaixa;
                }
                else { // se o resto for menor do que o valor em caixa
                    divisor = parseInt(resto/unitario);
                    add = (unitario*divisor);
                    if(add !== 0){
                        objReturn.change.push([moeda, (add/escala)]);
                    }
                    resto -= add;
                }
            }
        }        
    }
    

}

console.log(

    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//   checkCashRegister(
//     19.5, 20, 
//     [
//         ["PENNY", 1.01], 
//         ["NICKEL", 2.05], 
//         ["DIME", 3.1], 
//         ["QUARTER", 4.25], 
//         ["ONE", 90], 
//         ["FIVE", 55], 
//         ["TEN", 20], 
//         ["TWENTY", 60], 
//         ["ONE HUNDRED", 100]
//     ]
//     )
)
    /*
        checkCashRegister(
                19.5, 20, 
                [
                    ["PENNY", 1.01], 
                    ["NICKEL", 2.05], 
                    ["DIME", 3.1], 
                    ["QUARTER", 4.25], 
                    ["ONE", 90], 
                    ["FIVE", 55], 
                    ["TEN", 20], 
                    ["TWENTY", 60], 
                    ["ONE HUNDRED", 100]
                ]
            ) 
            
            deve retornar 
            {
                status: "OPEN", 
                change: [
                    ["QUARTER", 0.5]
                ]
            }
    */


    /*
            checkCashRegister(
                    19.5, 20, 
                    [
                        ["PENNY", 0.5], 
                        ["NICKEL", 0], 
                        ["DIME", 0], 
                        ["QUARTER", 0], 
                        ["ONE", 0], 
                        ["FIVE", 0], 
                        ["TEN", 0], 
                        ["TWENTY", 0], 
                        ["ONE HUNDRED", 0]
                    ]
                ) 
                deve retornar 
                {
                    status: "CLOSED", 
                    change: [
                        ["PENNY", 0.5], 
                        ["NICKEL", 0], 
                        ["DIME", 0], 
                        ["QUARTER", 0], 
                        ["ONE", 0], 
                        ["FIVE", 0], 
                        ["TEN", 0], 
                        ["TWENTY", 0], 
                        ["ONE HUNDRED", 0]
                    ]
                }.
    */
