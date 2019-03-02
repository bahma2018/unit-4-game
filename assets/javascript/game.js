var targetNumber = 0;

var counter = 0;

var numberOption = [];


targetNumber = Math.floor(Math.random() * 121);
$("#target-number").append(targetNumber);

for (i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 13);
    numberOption.push(randomNumber);
};

for (i in numberOption) {

    var crystalImage = $("<img>");

    crystalImage.addClass("crystal-image");

    crystalImage.attr("src",
        "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
    );

    crystalImage.attr("crystalImage-Data", numberOption[i]);

    $("#crystals").append(crystalImage);



};


//make the crystal add it's value to the counter 
$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("crystalImage-Data"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New Score: " + counter);

    if (counter === targetNumber) {
        alert("You Win!");
        counter = 0;
        location.reload();





    } else if (counter > targetNumber) {
        alert("You lose... Try again!");
        counter = 0;







    };
});