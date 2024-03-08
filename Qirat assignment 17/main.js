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
// inform that only guest can be invited for dinner
console.log("Unfortunately , the new dinner table won't arrive at that time , so I can only invite two guest to dinner with me");
// using while loop to remove guest from guestlist under two remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you for dinner"));
}
// Invitation send for last two guest
console.log("Invitations to the last 2 guest");
guestList.forEach(function (lastguest) { return console.log("Lucky ".concat(lastguest, " you are stil invited to dinner")); });
// Removing last two guests
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
