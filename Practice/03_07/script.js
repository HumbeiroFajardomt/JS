/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire 
 *   object and its specific properties.
 */
 

const toolBox = {
    name : "toolsForWorkHard",
    brand : "Snap-on",
    color : "blue",
    trays : 6,
    coverLength:{
        right : 30,
        left : 30,
    },
    traysOpen: function (traysStatusR, traysStatusL) {
        this.coverLength.right = traysStatusR;
        this.coverLength.right = traysStatusL;
    },
};

var firstBrand= "brand"
console.log("The name of the box is :", toolBox.name)
console.log("The trays L&R lenght are : ", toolBox.coverLength.left,"and",toolBox.coverLength.right)
console.log("The Color is:", toolBox["color"])
console.log("The Brand is:",toolBox[firstBrand])
