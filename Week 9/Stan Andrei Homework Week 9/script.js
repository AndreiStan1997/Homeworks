console.log("It is working");
console.log("1.Online Shoping System");

function Product(name,price){
    this.name = name;
    this.price = price;
}

function Cart(products)
{
    Product.call(this);
    this.products=products[Product];
}
Cart.prototype = Object.assign(Cart.prototype, Product.prototype);
Cart.prototype.addProduct = function(products){
    this.products = products;
    products.push(products);
}
Cart.prototype.removeProduct = function(products){
    this.products = products;
    products.pop(products);
}
Cart.prototype.getTotalPrice = function(){
    var price = 0;
    price = price + Product.price;
    return price;
}
function DiscountedProduct(discount){
    Product.call(this);
    this.discount = discount;
}
DiscountedProduct.prototype = Object.assign(DiscountedProduct.prototype, Product.prototype);
DiscountedProduct.getPrice = function(){
    var initialprice = Product.price;
    var finalprice = Product.price / DiscountedProduct.discount;
    return finalprice;
}

var myProduct = new Product("tigaie", 125);
console.log(myProduct);
//var myCart = new Cart();
//myCart.addProduct();
//myCart.removeProduct();
//myCart.getTotalPrice();

console.log("2.Bank Account Management System");

function BankAccount(accountNumber, balance){
    this.accountNumber = accountNumber;
    this.balance = balance;
}
BankAccount.prototype.deposit = function(ammount){
    this.ammount = ammount + this.balance;
    return this.balance;
}
BankAccount.prototype.withdraw = function(ammount){
    this.ammount = ammount - this.balance;
    return this.balance;
}
BankAccount.prototype.getBalance = function(){
    return this.balance;
}
function SavingsAccount (interestRate){
    BankAccount.call(this);
    this.interestRate = interestRate;
}
function CheckingAccount (transactionLimit){
    BankAccount.call(this);
    this.transactionLimit = transactionLimit;
}
var myAccount = new BankAccount(2431, 4000);
console.log(myAccount);
myAccount.deposit(500);
console.log(myAccount);
myAccount.withdraw(700);
console.log(myAccount);
myAccount.getBalance();
console.log(myAccount);