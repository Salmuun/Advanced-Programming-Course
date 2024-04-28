var readlineSync = require('readline-sync');


//QUESTION 1
var input = readlineSync.question('Enter Temperature');
tempType = readlineSync.question("Enter F for Farenhiet, C for Celsius")
if(tempType == "F"){
    FtoC = (input-32)*5/9
    console.log("Your temperature %d Farenheit is equal to %d Celsius: " , input, FtoC)
}
else{
  CtoF = (input*9/5)+32
  console.log("Your temperature %d Celsius is equal to %d Farenheit: " , input,CtoF)
}


//QUESTION 2
//Q2(10, 30)

function Q2(a, b){
  
  while(a<=b){
  res  = isPrime(a)
  if (res)
    console.log(a+', ')
  a++
  }
}
  
function isPrime(n){
  if(n <= 1){
    return false;
  }
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}


//QUESTION3
class BasketProto
{
  constructor(val){
    this.value = val
  }
  addToBasket(val){
    this.value += val
  }
  clearBasket(val){
    this.value = 0
  }
  clearBasket(){
    this.value = 0
  } 
    
pay(){
    console.log(`Value of ${this.value} has been paid.`)
}
  

}
// let b1 = new BasketProto(0)
// b1.addToBasket(2)
// b1.addToBasket(4)
// b1.pay()
// b1.clearBasket()
// b1.pay()

//QUESTION 4
class myBasket extends BasketProto {
  constructor(s, price) {
    super(price); 
    this.arr = [{ itemName: s, itemPrice: price }];
  }

  addToBasket(itemName, itemPrice) {
    this.arr.push({ itemName, itemPrice });
    super.addToBasket(itemPrice); 
  }
}

let x = new myBasket('mango', 100);
x.addToBasket('orange', 100);


//QUESTION 5
myBasket.prototype.removeFromBasket = function(index)
  {
    this.arr.splice(index, 1);
  }


x.removeFromBasket(0);

//console.log(x.arr)


//QUESTION 6
function rightRotate(arr, n){
  replaced = arr.splice(0, n)
  console.log(replaced)
  arr = arr.concat(replaced)
 console.log(arr)
}

//rightRotate([1, 2, 3, 4, 5], 2)
