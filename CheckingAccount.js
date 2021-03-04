import { Client } from './Client.js'

export class CheckingAccount{
  static numberOfAccounts = 0;
  agency;
  _client;
  _balance = 0;

  set client(newValue){
    if(newValue instanceof Client){
      this._client = newValue;
    }
  }

  get client(){
    return this._client;
  }

  get _balance(){
    return this._balance;
  }

  constructor(client, agency){
    this.agency = agency;
    this._client = client;
    CheckingAccount.numberOfAccounts += 1
  }

  draw(value){
    if(this._balance >= value){
      this._balance -= value;
      return value;
    }
  }

  deposit(value){
    if(value <= 0){
      return;
    }
    this._balance += value;
  }

  move(value, account){
    const amountWithdrawn = this.draw(value);
    account.deposit(amountWithdrawn)
  }

}