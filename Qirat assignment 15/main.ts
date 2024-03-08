let guestLish  = ["Qirat", "Kinza",  "Saeed",  "Sumra", "Abari"];
let unableTcome  = guestLish[0];
console.log(unableTcome, "are not able to come with us in sunday dinner");
guestLish.splice(0 , 4,"Saeed",  "Sumra", "Abari" );
guestLish.forEach(guest => console.log(`Hello ${guest} would you like to come sunday dinner with me ?`))