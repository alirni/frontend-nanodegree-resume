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

$("#main").append(myarray);