/*
This is empty on purpose! Your code to build the resume will go here.
 */
var email = "aliramezani19.1@gmail.com";
var newEmail = email.replace("gmail", "mail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is ali and i am Awesome!!";
var funThoughts = awesomeThoughts.replace("Awesome!!", "fuuuuun");

console.log(funThoughts);

var name = "Ali Ramezani";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var myarray = ["ali", "JS", "Polymer", "web"];

// $("#main").append(myarray);
$("#main").append(myarray);

var name = "AlbERt EINstEiN rnI";
console.log("name : " + name);

function nameChanger(oldName) {
    console.log("oldName : " + oldName);
    var finalName = oldName;
    console.log("finalName : " + finalName);
    // Your code goes here!
    var names = oldName.split(" ");
    console.log("names : " + names);
    names[1] = names[1].toUpperCase();
    names[2] = names[2].toLowerCase();
    console.log("1- names : " + names);
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    // names[0] = names[0].slice(2,3).toUpperCase();
    console.log("2- names : " + names);
    finalName = names.join(" ");
    console.log("finalName : " + finalName);
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
