var userName = prompt("What's your name?");
var userAge = prompt("How old are you?");
var birthMonth = prompt("What is your birth month? Please write the number");
var stone;
var stoneImg;
if (birthMonth == 1)
{
    stone = "Garnet";
    stoneImg = "img/garnet.jpg";
}
else if (birthMonth == 2)
{
    stone = "Amethyst";
    stoneImg = "img/amethyst.jpg";
}
else if (birthMonth == 3)
{
    stone = "Aquamarine";
    stoneImg = "img/aquamarine.jpg";
}
else if (birthMonth == 4)
{
    stone = "Diamond";
    stoneImg = "img/diamond.jpg";
}
else if (birthMonth == 5)
{
    stone = "Emerald";
    stoneImg = "img/emerald.jpg";
}
else if (birthMonth == 6)
{
    stone = "Pearl";
    stoneImg = "img/pearl.png";
}
else if (birthMonth == 7)
{
    stone = "Ruby";
    stoneImg = "img/ruby.jpg";
}
else if (birthMonth == 8)
{
    stone = "Peridot"; 
    stoneImg = "img/peridot.jpg";
}
else if (birthMonth == 9)
{
    stone = "Sapphire";
    stoneImg = "img/sapphire.jpg";
}
else if (birthMonth == 10)
{
    stone = "Opal";
    stoneImg = "img/opal.jpg";
}
else if (birthMonth == 11)
{
    stone = "Topaz";
    stoneImg = "img/topaz.jpg";
}
else if (birthMonth == 12)
{
    stone = "Tanzanite";
    stoneImg = "img/tanzanite.jpg";
}
else {
    stone = "River Stone";
    stoneImg = "img/river-stone.jpg";
}


document.write("Hi " + userName + "!" + " You are " + userAge + "," + " and your birthstone is a " + stone);

var img = document.createElement('img')
img.src = stoneImg
var body = document.getElementsByTagName('body')
body[0].appendChild(img)

