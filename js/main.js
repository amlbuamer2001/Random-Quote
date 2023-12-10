
// var productName=document.getElementById('pName')
// var productPrice=document.getElementById('pPrice')
// var productCategory=document.getElementById('pCategory')
// var productDesc=document.getElementById('pDesc')


// function AddProduct(){
//     console.log(productName.value);
//     console.log(productDesc.value);
//     console.log(productCategory.value);
//     console.log(productPrice.value);

//  var product={
//     name: productName.value ,
//     price:productPrice.value ,
//     category: productCategory.value ,
//     desc: productDesc.value

//  }
//  console.log(product);


  
// }
var quotes=[
   "Be yourself; everyone else is already taken\.","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
   "It is better to be hated for what you are than to be loved for what you are not","it’s better to try and fail than to not try at all.",
   "Change is your friend not your foe; change is a brilliant opportunity to grow. - Simon T. Bailey",
   "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
   "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
   "Don’t let yesterday take up too much of today. - Will Rogers",
   "Fear is a reaction. Courage is a decision. - Winston Churchill"
]

function newQuote(){
       var randomQuote=Math.floor(Math.random()*(quotes.length));
       document.getElementById('demo').innerHTML=quotes[randomQuote];

}
















