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
Addition.prototype.sharedvalue = 0;

 var result = new Addition(7,9);
 console.log(result.getAddition());

 var result2 = new Addition(7,9);
 console.log(result2.getAddition());

 /* Addition.prototype.sharedpropertyname =value;*/

 //Addition.prototype.sharedvalue =0;




 
