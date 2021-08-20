exports.run = (client, message, args) => {

    // log potential min and max
    console.log(`Args0 = ${args[0]} Args1 = ${args[1]}`);

    // check if args0 and args1 are NaN
    if(isNaN(args[0]) && isNaN(args[1])) {
        // args = 1, 100
        args = [1, 100];
    }

    // save args1 and args2 as Int
    let min = parseInt(args[0]);
    let max = parseInt(args[1]);

    // if min and max are in the wrong order (min > max) swap them
    if(min > max) [min, max] = [max, min];
    console.log(`Min = ${min} Max = ${max}`);

    // get difference between them for the rndGenerator
    const dif = max - min;
    console.log(`Difference = ${dif}`);

    // get rnd and add the min
    const result = Math.floor(Math.random() * (dif + 1)) + min;
    console.log(`Result = ${result}`);

    // reply the result
    message.channel.send(result + ' :game_die:').catch(console.error);
};