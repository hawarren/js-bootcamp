


prediction = function(
     name = 'Fellow human', total = 0, tipPercent = 0.15, prediction = "I see things. Many things for you. Or not.")
{
    let tip = tipPercent * total;
    console.log(`Hi ${name}`);
    //console.log(`When I see your future, what comes to mind is \: ${prediction}`);
    console.log(`Anyway your tip is ${tip}`)
}


console.log('')
prediction('Hanif', 100, 0.33, "A lot of money");
console.log('Now call the function without any arguments');
prediction();
// console.log('Now lets switch the order');
// prediction(prediction = 'this worked',name = 'Hanif', total = 100, tipPercent = 0.33);
const arg = {
    tipPercent: 0.05,
    total : 100,
    name: 'Hanif'
 }
 const arg2 = {
    
    total : 100,
    name: 'Hanif'
 }
 betterPrediction = function (arg)
{
    let tip = arg.tipPercent * arg.total;

    // console.log(`Hi ${name}`);
    // console.log(`When I see your future, what comes to mind is \: ${prediction}`);
    console.log(`Anyway your tip is ${tip}`)
    console.log(`Your tip percent is ${tipPercent}`)
}

// console.log('Now use an object to pass in');

// betterPrediction(arg);

// console.log('Now use an object with missing properties');
// betterPrediction(arg2);

console.log('Now use an object to pass in but created in the argument');
evenBetterPrediction = function (arg)
{
    let tip = arg.tipPercent * arg.total;
    // console.log(`Hi ${name}`);
    // console.log(`When I see your future, what comes to mind is \: ${prediction}`);
    console.log(`Anyway your tip is ${tip}`)
    console.log(`Your tip percent is ${tipPercent}`)
}
evenBetterPrediction({tipPercent : 12, name : 'Hanif', total: 200})