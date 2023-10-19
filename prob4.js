// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


// first time sing up

let credential_username = "nippu kumari shah";
let credential_password = "Sam@123";

// login
let username = "nippu kumari shah";
let password = "sam@123";

if(credential_username == username )
{
  if(credential_password == password )
  {
    console.log("Login")
  }
  else
  {
    console.log("Your password is not matching")
  }
}
else
{
  console.log("Your username is not matching")
}
