/* functin defnition*/


/*5!=5*4*3*2*1 
4!=*4*3*2*1 
3!=*3*2*1 
2!=2*1
1!=1
*/


 var substrct = function(a){
     return function(b){
         return a-b;
     }
 }
 var result = substrct(6)(2);
 console.log(result);
