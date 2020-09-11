//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);
all.forEach(n=>console.log(n));

//c
console.log(all.join());
console.log(all.join("-"));

//d
all.push('Lone', 'Gitte');
console.log(all);
//let all = [...girld, "Mari", "Mira"];
//console.log


//e
all.unshift('Hans', 'Kurt');
console.log(all);


//f
all.shift('Hans');

//g
all.pop('Gitte');
console.log(all);

//h
all.splice(3,2);
console.log(all);

//i
all.reverse();
console.log(all);

//j
all.sort();
console.log(all);

//k + l
 var allUpper = all.map(function(x){ return x.toUpperCase(); });
// var allUpper = String.prototype.toUpperCase.apply(all).split(",");
 allUpper.sort();
 console.log(allUpper);
 
 console.log(filterItems(all, 'l'));
 all.sort();
 console.log(all); 
 





