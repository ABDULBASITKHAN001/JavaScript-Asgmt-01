
 console.log("HELLO-WORLD");

 var firstname = "Basit"
 var lastname = "Khan";
 var fullname = firstname+  " "   +lastname;
 console.log(fullname);




var submissonform = alert("THIS IS STUDENTS SUBMISSION FORM ! ")
var submissionform2 = alert("Please Enter Your Information");

var firstname = prompt("ENTER YOUR FIRST NAME ")
var lastname = prompt("ENTER YOUR LAST NAME");
var full_name = firstname+  " " +lastname;
var age = Number(prompt("ENTER YOUR AGE"));
var gender = prompt("ENTER YOUR GENDER")
var number  = Number(prompt("ENTER YOUR PHONE NUMBER"));


var submit = alert("!THANKS! TO GIVE US YOUR INFORMATION !   NOW YOU CAN CHECK YOUR GIVEN INFORMATION")
alert("Submission Form" + " " + "Your Name is :" + " " + full_name + " " + "Your Age is :" + " " + age + " " +  "Your Mobile Number is :" + " " + number + " " );


if(age <= 17){
    alert("Sorry You  Are Not Eligible For This Form")
}
if(gender == "male"){
    alert("You Are Eligible")
}else{
    alert("Only For Males" )
}
if(number .length == 11){
    alert("Your Number Is Accepted")
}else{
    alert("Please Enter Valid Number")
}



var Morething = prompt("Do you Want to give Feedback ? Write Here.")
if (Morething){
            alert("Thanks To give us Feedback")
        }else{
            alert("Thanks to use our Services")
        }