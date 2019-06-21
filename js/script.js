var userName = prompt("What's your name?");
var userAge = prompt("How old are you?");
var birthMonth = prompt("What is your birth month? Please write the number");
var stone;
var stoneImg
if (birthMonth == 1)
{
    stone = "Garnet";
    stoneImg = "garnet";
}
else if (birthMonth == 2)
{
    stone = "Amethyst";
    stoneImg = "amethyst";
}
else if (birthMonth == 3)
{
    stone = "Aquamarine";
}
else if (birthMonth == 4)
{
    stone = "Diamond";
}
else if (birthMonth == 5)
{
    stone = "Emerald";
}
else if (birthMonth == 6)
{
    stone = "Pearl";
}
else if (birthMonth == 7)
{
    stone = "Ruby";
}
else if (birthMonth == 8)
{
    stone = "Peridot"; 
}
else if (birthMonth == 9)
{
    stone = "Sapphire";
}
else if (birthMonth == 10)
{
    stone = "Opal";
}
else if (birthMonth == 11)
{
    stone = "Topaz";
}
else if (birthMonth == 12)
{
    stone = "Tanzanite";
}
else {
    stone = "River Stone";
}


document.write("Hi " + userName + "!" + " You are " + userAge + "," + " and your birthstone is a " + stone);
document.getElementById(stoneImg);