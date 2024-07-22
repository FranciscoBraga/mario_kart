const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

const player3 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};


async function logRollResult(charaterName, block, diceResult, attribute) {
    console.log(`${charaterName} 🎲 rolou um dado  de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} `)
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function playeRaceEngine(charater1, charater2) {

    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`)

       let block = await getRandomBlock()
        console.log(` Bloco: ${block}`)

        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()
    
        let totalTesteSkill1 = 0
        let totalTesteSkill2 = 0
    
        if (block == "RETA") {
            totalTesteSkill1 = diceResult1 + charater1.VELOCIDADE
            totalTesteSkill2 = diceResult2 + charater1.VELOCIDADE
    
            await logRollResult(
                charater1.NOME,
                'velocidade',
                diceResult1,
                charater1.VELOCIDADE
            );
    
            await logRollResult(
                charater2.NOME,
                'velocidade',
                diceResult2,
                charater2.VELOCIDADE
            );
    
        }
        if (block == "CURVA") {
            totalTesteSkill1 = diceResult1 + charater1.MANOBRABILIDADE
            totalTesteSkill2 = diceResult2 + charater2.MANOBRABILIDADE
    
            await logRollResult(
                charater1.NOME,
                'manobrabilidade',
                diceResult1,
                charater1.MANOBRABILIDADE
            );
    
            await logRollResult(
                charater2.NOME,
                'manobrabilidade',
                diceResult2,
                charater2.MANOBRABILIDADE
            );
    
        }
        if (block == "CONFRONTO") {
            let powerResult1 = diceResult1 + charater1.PODER
            let powerResult2 = diceResult2 + charater2.PODER


            await logRollResult(
                charater1.NOME,
                'poder',
                powerResult1,
                charater1.PODER
            );
    
            await logRollResult(
                charater2.NOME,
                'poder',
                powerResult2,
                charater2.PODER
            );

            if(powerResult1 > powerResult2 && charater1.PONTOS > 0){
                console.log(`${charater1.NOME} venceu confronto ! ${charater2.NOME} perdeu um ponto 🐢`)
                charater2.PONTOS -- 
            }
            if(powerResult2 > powerResult1 && charater2.PONTOS > 0){
                console.log(`${charater2.NOME} venceu confronto ! ${charater1.NOME} perdeu um ponto 🐢`)
                charater1.PONTOS -- 
            }

            //charater1.PONTOS -= powerResult1 > powerResult2 && charater2.PONTOS > 0 ? 1 : 0;
            //charater2.PONTOS -= powerResult2 > powerResult1 && charater1.PONTOS > 0 ? 1 : 0;
            console.log(powerResult1 === powerResult2  ? "confronto empatado! Nenhum ponto foi perdido" : " ")
        }

        if(totalTesteSkill1 > totalTesteSkill2){
            console.log(`${charater1.NOME} marcou um ponto`)
            charater1.PONTOS ++
        }else if(totalTesteSkill2 > totalTesteSkill1){
            console.log(`${charater2.NOME} marcou um ponto`)
            charater2.PONTOS ++
        }

        console.log('--------------------------------------')
    }

}


async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break
        case random < 0.66:
            result = "CURVA";
            break
        default:
            result = "CONFRONTO";
            break
    }

    return result
}

async function declarewinner(charater1,charater2){
    console.log("Resultado Final:")
    console.log(`${charater1.NOME}: ${charater1.PONTOS} ponto(s)`)
    console.log(`${charater2.NOME}: ${charater2.PONTOS} ponto(s)`)

    if(charater1.PONTOS > charater2.PONTOS){
        console.log(`${charater1.NOME} Venceu a Corrida`)
    } else if(charater2.PONTOS > charater1.PONTOS){
        console.log(`${charater2.NOME} Venceu a Corrida`)
    }
    else{
        console.log(`A corrida terminou empate`)
    }

}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );
    await playeRaceEngine(player1, player2)
    await declarewinner(player1,player2)
})()

