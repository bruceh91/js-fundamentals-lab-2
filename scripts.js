let name = "Bruce the dragon";
let job = "Pilot";
let Description = "I am a strong independant dragon who don't need to man!";
let interests = ["flying","breathing fire","game of thrones","spyro"];
let jobHistory =["Actor for Dreamworks where I played the dragon in the movie Shrek.",
                "Cook at Burger-King where I was the flamer for the flame-grilled burger.",
                "Newspaper delivery dragon for the Birmingham Times where I held the record for fastest delivery dragon in the tri-county area."];
let skills = [{skl: "flight", cool: true}, {skl: "Microsoft Word", cool: false}, {skl: "acting", cool: false}, {skl: "cooking", cool: true}];


function Capitalize (name){
    capName = name.toUpperCase();
    return capName;
}

let nameInAllCaps = Capitalize(name);

function displayPosition (job, Description) {
    console.log ("Career: " + job);
    console.log ("Description: " + Description);
}

console.log(nameInAllCaps);
displayPosition(job, Description);


function displayProperty (prop){
    for (let i=0;i < prop.length;i++){
        console.log("* " + prop[i]);
    }
}

function addBam (x) {
    for (let i = 0; i < x.length; i++ ){
        if (x[i].cool === true) {
            x[i].skl = "BAM: " + x[i].skl;
            // console.log("got here")
        }
        // console.log(x[i].skl);
    }
}

addBam(skills);

function displaySkills(skills){
    for (let i = 0; i < skills.length; i++){
        console.log("* " + skills[i].skl);
    }
}

console.log(skills);

console.log("My Interests: ");
displayProperty(interests);
console.log("My Previous Experience: ");
displayProperty(jobHistory);
console.log("My Skills: ");
displaySkills(skills);

