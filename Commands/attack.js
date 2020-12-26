const config = require('../config');
const index = require('../index');
var mysql = require('mysql')

module.exports.run = (client, message, args) => {

    var con = mysql.createConnection({
        host: config.SQLhost,
        user: config.SQLuser,
        password: config.SQLpassword,
        database: config.SQLdatabase
    })

    var strengh;
    if (message.member.roles.cache.some(role => role.name === 'Galatite-Legend')) strengh = 4;
    else if (message.member.roles.cache.some(role => role.name === 'Friend of the Community')) strengh = 3;
    else if (message.member.roles.cache.some(role => role.name === 'Known Face')) strengh = 2;
    else strengh = 1;


    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Boss", function(err, result, fields) {
            if (err) throw err;
            var bossName = result[0].name;
            var bossHP = result[0].hp;
            console.log(result);
            message.channel.send(`You hit ${bossName} with your attack.`);
            bossHP -= strengh;
            if (result[0].hp > 0) {
                con.query("UPDATE Boss SET hp = " + (bossHP) + " WHERE name = '" + bossName + "'", function(err, result, fields) {
                    if (err) throw err;
                    console.log(result.affectedRows);
                    con.query("SELECT * FROM Boss WHERE name = '" + bossName + "'", function(err, result, fields) {
                        if (err) throw err;
                        console.log(result);
                        if (bossHP <= 0) {
                            bossHP = 0;
                            message.channel.send(`Congratulation ${message.author.toString()}! You defeated ${bossName}. Well done!`);
                        } else
                            message.channel.send(`${bossName} has ${bossHP}hp left.`);
                    });
                });
            } else {
                message.channel.send(`${bossName} has been defeated. Well done!`);
            }
        });
    });

}