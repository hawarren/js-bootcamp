let myAccount = {
    name: 'Hanif Warren',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, amount){
    //this will change myAccount's properties because account is pointing to the same object as account
    //assigning a new value to account would create a new object
    if(account.hasOwnProperty('expenses'))
    {
        account.expenses = account.expenses + amount;
        console.log(`expense of ${amount} added`)
    }
    else{
        console.log(`This account has no expense section`)
    }
    console.log(account)
}

//addExpense(myAccount, 2.50)
console.log(myAccount)

//expense tracker challenge
// resetAccount changes balance to 0
//getAccountSummary
//add income
//add expense
//add expense
//reset Account
//getAccountSummary
let addIncome = function(account, amount)
{
    account.income += amount;
    console.log(`You have just added ${amount} to your income on the account of ${account.name}`) ;   
}
let resetAccount = function(account)
{
    account.income = 0;
    account.expenses = 0;
    console.log(`The account for ${account.name} is now reset with 0 income and expenses`);   
}
let getAccountSummary = function(account)
{
    console.log(`The account for ${account.name} has income of ${account.income} and expenses of ${account.expenses}`)
}
console.log('...');
getAccountSummary(myAccount);
addIncome(myAccount, 100);
addIncome(myAccount, 23);
addExpense("cat", 500);
addExpense(myAccount, 75);
getAccountSummary(myAccount)