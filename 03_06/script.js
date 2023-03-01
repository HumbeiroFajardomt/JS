/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);// access to properties (dot notation and bracket notation)
console.log ("The volume is :", backpack.volume)// accessing by dot notation
// the dot notation is preferred because it's easy to read and understand(accessing properties inside an object)
console.log("The strapLength L:", backpack.strapLength.left)

//======= Bracket Notation=========
console.log("Accessing with Brackets; The Volume is : ", backpack["volume"])
// use quotations marks and brackets,
// Gives more control

var query = "volume";// with dot notations it's something incorrect
console.log("Using with a variable and Brackets; Volume is:", backpack[query])