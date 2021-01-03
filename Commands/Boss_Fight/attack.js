const config = require('../../config');
var mysql = require('mysql')

module.exports.run = (client, message, args) => {

    var con = mysql.createConnection({
        host: config.SQLhost,
        user: config.SQLuser,
        password: config.SQLpassword,
        database: config.SQLdatabase
    })

    var strength;
    if (message.member.roles.cache.some(role => role.name === 'Galatite-Legend')) strength = 4;
    else if (message.member.roles.cache.some(role => role.name === 'Friend of the Community')) strength = 3;
    else if (message.member.roles.cache.some(role => role.name === 'Known Face')) strength = 2;
    else strength = 1;

    var bossName, bossHP;
    let bonus = Math.floor(Math.random() * 4);
    let crit = Math.floor(Math.random() * 10);
    console.log(`Bonus = ${bonus}; Crit Chance (0 = crit) = ${crit}`);
    strength += bonus;
    if (crit == 0) strength *= 2;


    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM Boss`, function(err, result, fields) {
            if (err) throw err;

            bossName = result[0].name;
            bossHP = result[0].hp;

            console.log(result);

            message.channel.send(`You hit ${bossName} with your attack and did **${strength}** damage!`);

            bossHP -= strength;

            setNewHP(bossName, bossHP, con, message);

        });
    });

}

function setNewHP(bossName, bossHP, con, message) {
    if (bossHP > 0) {
        con.query(`UPDATE Boss SET hp = ${bossHP} WHERE name = '${bossName}'`, function(err, result, fields) {
            if (err) throw err;
            console.log(result.affectedRows);
            checkBoss(bossName, bossHP, con, message);
        });
    } else {
        message.channel.send(`${bossName} has been defeated! Well done!`);
    }



}

function checkBoss(bossName, bossHP, con, message) {
    con.query(`SELECT * FROM Boss WHERE name = '${bossName}'`, function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        if (bossHP <= 0) {
            bossHP = 0;
            message.channel.send(`Congratulation ${message.author.toString()}! You defeated ${bossName}. Well done!`);
        } else
            message.channel.send(`${bossName} has **${bossHP}hp** left!`);
    });
}