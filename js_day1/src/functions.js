//Observe: no return type, no type on parameters
function add(n1, n2){
    if ( typeof n1 !== "number" || typeof n1 === "undefined")
        throw new Error ("Oi! n1 is not a number");
    else
       if ( typeof n2 !== "number" || typeof n2 === "undefined")
        throw new Error ("Oi! n2 is not a number");
    else
        return n1 +n2;
}

var sub = function(n1,n2){
    if ( typeof n1 !== "number" || typeof n1 === "undefined")
        throw new Error ("Oi! n1 is not a number");
    else
       if ( typeof n2 !== "number" || typeof n2 === "undefined")
        throw new Error ("Oi! n2 is not a number");
    else
  return n1 - n2;
} 

var mul = function(n1,n2){
    if ( typeof n1 !== "number" || typeof n1 === "undefined")
        throw new Error ("Oi! n1 is not a number");
    else
       if ( typeof n2 !== "number" || typeof n2 === "undefined")
        throw new Error ("Oi! n2 is not a number");
    else
  return n1 * n2;
} 

var cb = function(n1,n2, callback){
    if ( typeof n1 !== "number" || typeof n1 === "undefined")
        throw new Error ("Oi! n1 is not a number");
    else
       if ( typeof n2 !== "number" || typeof n2 === "undefined")
        throw new Error ("Oi! n2 is not a number");
    else 
        if (typeof callback !== "function" || typeof callback === "undefined")
            throw new Error ("Oi! The callback is not a function!");
    else
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

try{
console.log( add(1,2) );
} catch (e){
    console.log(e.name + ': ' + e.message)
}//3

try{
console.log( add );
} catch (e){
    console.log(e.name + ': ' + e.message)
}//it prints what add is, add represents our method/function add

try{
console.log( add(1,2,3) ) ;
} catch (e){
    console.log(e.name + ': ' + e.message)
}// 3, becaus it's only looking for two variables

try {
console.log( add(1) );
} catch (e){
    console.log(e.name + ': ' + e.message)
}//NaN (not a number, missing variable?	

try {
console.log( cb(3,3,add) );
} catch (e){
    console.log(e.name + ': ' + e.message)
}//Result from the two numbers: 3+3=6

try{
console.log( cb(4,3,sub) );
} catch (e){
    console.log(e.name + ': ' + e.message)
}// Result from the two numbers: 4-3=1, men legger sammen og får 7 isteden

try{
console.log(cb(3,3,add()));
} catch (e){
    console.log(e.name + ': ' + e.message)
}// What will it print (and what was the problem) 

try{
console.log(cb(3,"hh",add));
} catch (e){
    console.log(e.name + ': ' + e.message)
}// 3hh, it's guessing both ar strings


try {
console.log(cb(3,3,mul));
} catch (e){
    console.log(e.name + ': ' + e.message)
}

//Jons måte
try{
console.log(cb(8,2,(x,y)=>x/y));
} catch (e){
    console.log(e.name + ': ' + e.message)
}

//Morten Rand-Hendriksen sin måte
    var divide = function(){
        var result = 8/2;
        console.log(result);
            }
            
    divide();







