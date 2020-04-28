const randomDamage = _ => Math.floor(Math.random() * 10) + 1;

//console.log(randomDamage());


const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor((Math.random() * 2));
    return (randNum == 0 ? opt1 : opt2);

}

//console.log(chooseOption("jello", "hellos"));

const attackPlayer = function (health) {
    return health - randomDamage();
}
//console.log(attackPlayer(9));

const logHealth = (player, health) => {
    console.log(`${player} health: ${health} `);
}
//console.log(logHealth("cass", 9));

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}
//console.log(logDeath("Jen", "Bob"));

const isDead = (health) => {
    return (health <= 0 ? true : false);
}
//console.log(isDead(-1));

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);

            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Cass", "Ben", 100, 100);