var guestLish = ["Qirat", "Kinza", "Saeed", "Sumra", "Abari"];
var unableTcome = guestLish[0];
console.log(unableTcome, "are not able to come with us in sunday dinner");
guestLish.splice(0, 4, "Saeed", "Sumra", "Abari");
guestLish.forEach(function (guest) { return console.log("Hello ".concat(guest, " would you like to come sunday dinner with me ?")); });
