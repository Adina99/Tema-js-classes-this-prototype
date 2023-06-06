class Bank {
  name;
  swift;
  country;
  accounts;

  constructor(name, swift, country, accounts) {
    this.name = name;
    this.swift = swift;
    this.country = country;
    this.accounts = accounts;
  }

  createAccount() {
    console.log("Contul a fost creat");
  }

  openAccounts() {
    console.log("Acestea sunt conturile deschise...");
  }

  negativeBalanceAccounts() {
    console.log("Acestea sunt conturile cu sold negativ...");
  }
}

const bank = new Bank("BCR", "333444", "Romania", [
  "Account1",
  "Account2",
  "Account3",
]);

console.log(bank);
bank.createAccount();
bank.openAccounts();
bank.negativeBalanceAccounts();

class NewAccount {
  accountNumber;
  id;
  balance;
  ownerName;

  constructor(accountNumber, id, balance, ownerName) {
    this.accountNumber = accountNumber;
    this.id = id;
    this.balance = balance;
    this.ownerName = ownerName;
  }
}

const newAccount = new NewAccount("443", "fg456666", 100000, "Radu Popescu");
console.log(newAccount);
