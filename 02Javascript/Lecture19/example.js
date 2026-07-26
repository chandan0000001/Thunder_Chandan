// function bank(){
    
//     let balance = 200;

//     return {
//     credit: function(amount){
//         if(typeof amount == "number")
//          balance+=amount;
//     },
//     debit: function(amount){
//         if(typeof amount == "number" && amount<=balance && amount>0)
//          balance-=amount;
//     },
//     checkBalance: function(){
//         console.log(balance);
//     }

//   }

// }

// const user1 = bank();
// user1.credit(100);
// user1.debit(50);
// user1.checkBalance();






// const  bank_user = {
//     balance : 10000,
//     credit: function (amount){
//         if(typeof amount == "number")
//           this.balance+=amount;
//     },
//     debit: function(amount){
//         if(typeof amount == "number" && amount<=this.balance && amount > 0)
//              this.balance-=amount;
//     },
//     checkBalance: function (){
//         console.log(this.balance);
//     }
// }


// bank_user.credit(70);
// bank_user.debit(5);
// bank_user.checkBalance();


// we need to do balance private otherwise it will acess by mistake like bank_user = "Chandan"; console.log(bank_user.balance)  //chandan

function bank() {
    const bank_user = {
        balance: 10000,
        credit(amount) {
            if (typeof amount === "number") {
                this.balance += amount;
            }
        },
        debit(amount) {
            if (
                typeof amount === "number" && amount > 0 &&
                amount <= this.balance
            ) {
                this.balance -= amount;
            }
        },
        checkBalance() {
            console.log(this.balance);
        }
    };
    return bank_user;
}
// console.log(bank.bank_user.balance)  //TypeError: Cannot read properties of undefined (reading 'balance')

const user = bank();
user.checkBalance();
user.credit(5000);
user.checkBalance();
user.debit(3000);
user.checkBalance();