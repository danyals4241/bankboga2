accounts = [{
    nickname: 'Personal Checking',
    number: '1337',
    balance: 10,240,300.01,
},
{
    nickname: 'Standard Credit Card',
    number: '2579',
    balance: 21,025.25,
},
{
    nickname: 'High-Interest Savings',
    number: '2580',
    balance: 310,250.00,
},
{
    nickname: 'Fixed-Rate 5 Year Term CD',
    number: '9704',
    balance: 5000.00,
}]

transactions = [{
    description: 'MONEY TRANSFER - GATES, BILL',
    amount: 500,000,
    date: new Date(2020, 6, 30),
    account: 0
},
{
    description: 'PVC*LAMBORGHINI AUTOMOBIL AVNTDOR',
    amount: -412,034,
    date: new Date(2020, 3, 11),
    account: 0
},
{
    description: 'CAFE CELESTA*XSOLLA',
    amount: -434.37,
    date: new Date(2020, 1, 1),
    account: 0
},
{
    description: `XFER FROM ACCT x${accounts[2].number}`,
    amount: 1250,
    date: new Date(2019, 10, 1),
    account: 0
},
{
    description: 'Check Deposit',
    amount: 10,933.10,
    date: new Date(2019, 9, 20),
    account: 2
},
{
    description: 'Check #103 Withdrawal',
    amount: -45,392.19,
    date: new Date(2019, 9, 16),
    account: 0
},
{
    description: 'QVC*SHOPPING/BILL',
    amount: -1140.50,
    date: new Date(2019, 9, 10),
    account: 0
},
{
    description: 'Netflix',
    amount: -12.99,
    date: new Date(2019, 8, 25),
    account: 0
}]

transfers = [{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date(2019, 10, 1)
},
{
    origin: 0,
    destination: 3,
    amount: 5000,
    date: new Date(2019, 7, 22)
}]

module.exports = (() => ({
    accounts,
    transactions,
    transfers
}))()