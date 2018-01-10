let name = "Bruce the dragon";
let interests = ["flying","breathing fire","game of thrones","spyro"];
let jobHistory =["Actor for Dreamworks where I played the dragon in the movie Shrek.",
                "Cook at Burger-King where I was the flamer for the flame-grilled burger.",
                "Newspaper delivery dragon for the Birmingham Times where I held the record for fastest delivery dragon in the tri-county area."];
let skills = ["flight","Microsoft Word", "acting", "cooking"];


function Capitalize (name){
    capName = name.toUpperCase();
    return capName;
}

let nameInAllCaps = Capitalize(name);


let newCompanyName = "Walmart";
let newJobTitle = "Cashier";
let newJobDesr = "be the cashier";

function displayPosition (newCompanyName, newJobTitle, newJobDesr) {
    console.log ("Company Name: " + newCompanyName);
    console.log ("Career: " + newJobTitle);
    console.log ("Description: " + newJobDesr);
}

console.log(nameInAllCaps);
displayPosition(newCompanyName, newJobTitle, newJobDesr);


function displayProperty (x){
    for (i=0;i<x.length;i++){
        console.log("* " + x[i]);
    }
}
console.log("My Interests: ");
displayProperty(interests);
console.log("My Previous Experience: ");
displayProperty(jobHistory);
console.log("My Skills: ");
displayProperty(skills);

