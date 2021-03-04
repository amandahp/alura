import { Client } from './Client.js'
import { CheckingAccount } from './CheckingAccount.js'

const client1 = new Client('Robert', 11199988806);
const client2 = new Client('Ane', 55577788807);

const accountRobert = new CheckingAccount(client1, 1001);
const accountAne = new CheckingAccount(client2, 1002);

accountRobert.deposit(1000);
const amountWithdrawn = accountRobert.draw(200);

console.log(accountRobert);

let value = amountWithdrawn;
accountRobert.move(value, accountAne);
console.log(CheckingAccount.numberOfAccounts);
console.log(accountAne)