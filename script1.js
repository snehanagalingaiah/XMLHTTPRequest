let object1 = {name:"person-1", age:5};
let object2 = {age:5, name:"person-1"};

const isEqual = function(obj1, obj2) {
   const obj1Keys = Object.keys(obj1); // returns an array of keys from object1
   const obj2Keys = Object.keys(obj2); // returns an array of keys from object2

   //checks if the length of the key arrays from both objects is equal
   if(obj1Keys.length !== obj2Keys.length) {
       return false;
   }

   for (let objKey of obj1Keys) {
      //checks if the value for the same key in both the objects are equal
       if (obj1[objKey] !== obj2[objKey]) {
         //if the value of the same key in both the objects is an object then, isEqual() func is called again with the current object values
           if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
               if(!isEqual(obj1[objKey], obj2[objKey])) {
                   return false;
               }
           } 
           else {
               return false;
           }
       }
   }

   return true;
};

console.log("The object equality is",isEqual(object1, object2))