/* functin defnition*/


/*5!=5*4*3*2*1 
4!=*4*3*2*1 
3!=*3*2*1 
2!=2*1
1!=1
*/




function Addition(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
  
    Addition.prototype.sharedvalue = function(){
        return this.num1 + this.num2;
    };
}

 var result = new Addition(7,9);
 console.log(result.sharedvalue());

//  var result2 = new Addition(7,9);
//  console.log(result2.getAddition());

 /* Addition.prototype.sharedpropertyname =value;*/

 //Addition.prototype.sharedvalue =0;

 /*Arrays:single varible we can store muitiple values at a time
 Defining arrays in two diff ways
 syntax: var varibalename = [];
 var varibalname = new();
 */

/*Date:It will retieve datae and time by two diff ways 1)local time 2)global time
1)constructor notation
form of string
passing the year date montha nd time*/

// var date = new Date();
// console.log(date);

// var date = new Date("Wed Dec 18 2019 19:06:22");
// console.log(date);

// var date = new Date(2019,12,18,07,02,30);
// console.log(date);




// function Rectangle(width,height){
//     this.width = width;
//     this.height =height;
//     this.getArea = function(){
//         return this.width * this.height;
//     };
// }

// var result = new Rectangle(5,6);
// console.log(result.getArea());

// var result1 = new Rectangle(7,6);
// console.log(result.getArea());



//Acessing DOM Elements By using Id

var para = document.getElementById("para1").innerHTML;
// console.log(para);

//Acessing DOM Elements By using Id

var paraClass = document.getElementsByClassName("para4");
console.log(paraClass);

//Acessing DOM Elements By using tag name

var paraClassTag = document.getElementsByTagName("p");
console.log(paraClassTag);

//Acessing DOM Elements By using tfirst occurence

var paraClassTagQuery = document.querySelector("#para1");
console.log(paraClassTagQuery);

 //add new child in to the body//

 var para = document.createElement("p");
 var textNode = document.createTextNode("i am creating my own paragraph");
 para.appendChild(textNode);
 document.body.appendChild(para);
 console.log(para);

 var para = document.querySelectorAll("p");
//  console.log(para);
//  console.log(para.firstChild);
//  console.log(para.lastChild);

var para = para1.nextElementSibling.nextElementSibling;
console.log(para.parentNode);




 
 


 
