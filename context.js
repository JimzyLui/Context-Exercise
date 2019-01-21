const Robot = function(name) {
  this.name = name;
};

function add(op1, op2) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

const voltron = new Robot("Voltron");
const bender = new Robot("Bender Rodriguez");
const optimus = new Robot("Optimus Prime");
const megaman = new Robot("Mega Man");
const bmo = new Robot("B-Mo");
const wall_e = new Robot("Wall-E");

// #1
/*
1. invoke the **add** function with 2 arguments, **0** and **1**
*/

console.log(add(0, 1));

// #2
/*
2. invoke the **add** function within the context of the object named **voltron**, passing in 2 arguments, **2** and **3** (using [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call))
*/

console.log(add.call(voltron, 2, 3));

// #3
/*
3. invoke the **add** function within the context of the object named **optimus**, passing in 2 arguments, **20** and **30** (using [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply))
*/

console.log(add.apply(optimus, [20, 30]));

// #4
/*
4. bind the function **add** to a new function named **calculate** with the context of the object **bender** (using [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind))  
  invoke the **calculate** passing in 2 arguments, **"drinking "** and **"beer"**
  */

const calculate = add.bind(bender);
console.log(calculate("drinking ", "beer"));
