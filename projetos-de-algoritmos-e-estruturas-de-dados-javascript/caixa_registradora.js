function checkCashRegister(price, cash, cid) {
    let troco = cash - price;
    let escala = 100;
    let caixa_registradora;
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
    /* 
        Utilizando filtro para fazer array para melhorar os calculos
    */
    caixa_registradora = moedas.filter(item => item[1] <= troco);
    for(let i = 0; i < caixa_registradora.length; i++){
        let total_moeda_caixa = cid.filter(
            item => item[0] === caixa_registradora[i][0]
            )[0][1];
            caixa_registradora[i].push(total_moeda_caixa)
    }

    /*
        O objeto caixa registradora deve estar no formato abaixo
        [
            ['nome da moeda', valor_unitario, valor_em_caixa]
        ]

    */
   let total = 0;
   for(let moeda of caixa_registradora){ total += moeda[2]; }
   
   if(total < troco){ return {status: "INSUFFICIENT_FUNDS", change: []} }

   if(total == troco) {
       let obj  =  {status: "CLOSED", change: []}
       
    }
}

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
    );

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
