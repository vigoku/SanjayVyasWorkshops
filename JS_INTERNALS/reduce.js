const expenses = [
    {txn:1, desc:"zomato", amount:350},
    {txn:2, desc :"ola", amount : 1500},
    {txn:3, desc:"uber", amount :450}
]

console.log(expenses);

console.log(expenses.filter(exp => exp.amount < 500))

console.log(expenses.reduce((total, exp) => total.amount + exp.amount, {amount:0}));


console.log(expenses.reduce((total, exp) => total + exp.amount, 0));



