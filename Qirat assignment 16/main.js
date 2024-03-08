// Guest list
var guestList = ["Qirat", "Kinza", "Saeed", "Sumra", "Abari"];
// Guest who can't come
var unableTocome = guestList[0];
// print the guest name who can't come
console.log(unableTocome, "Unable to come");
// add or remove guest name
guestList.splice(0, 1, "Amir");
// print a message for bigger table
console.log("Great New ! I have found a bigger table for dinner");
// add a new guest name at starting array index
guestList.unshift("Ali");
// add a new guest name at ending array index
guestList.push("Zain");
// get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// add a new guest name in middle index
guestList.splice(middleIndex, 0, "Qasim");
// print Updated list of our Guest
console.log("Updated list of our Guest");
// sending a invitation message to our guest one by one with their name
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, " would you like to dinner with me?")); });
