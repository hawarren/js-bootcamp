//expense-tracker.js
const account = {
    name: 'Hanif Warren',
    expenses: [],
    income: [],
    addExpense: function (text, amt) {
        let newExpense = { description: '', amount: 0 }
        newExpense.description = text
        newExpense.amount = amt
        this.expenses.push({ description: text, amount: amt })
        //console.log(`Subtracted ${amt} from your expenses`)
    },
    addIncome: function (source, amt) {
        this.income.push({ description: source, amount: amt })
        //console.log(`Added ${amt} to your income`)
    },
    getAccountSummary: function () {
        let runningTotal = 0
        let runningExpenseTotal = 0
        this.expenses.forEach(function (item, index) {
            runningExpenseTotal += item.amount
          //  console.log(`${index + 1} You spent ${item.amount.toFixed()} on ${item.description}`)
        })        
        this.income.forEach(function (item, index) {
            //runningTotal += item['amount']
            runningTotal += item.amount
            //console.log(`${index + 1 } You earned ${item['amount']} from ${item['description']}`)
        })
        return `Account Summary\:${this.name}  has a balance of $${(runningTotal - runningExpenseTotal).toFixed(2)}.  
         $${runningExpenseTotal.toFixed(2)} in expenses and $${runningTotal.toFixed(2)} in income.`

    },
}

//Expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2.50)
account.addExpense('Tea', 35)

//1.add income array to account
//2. AddIncome method -> description, amount
//3. Tweak getAccountSummary
//Hanif Warren has a balance of $10.00, $100 in income, $90 in expenses
account.addIncome('Day Job', 550)
account.addIncome('Side Hustle', 450)
// console.log(account.getAccountSummary())
console.log(account.getAccountSummary())