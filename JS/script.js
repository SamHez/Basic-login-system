window.onload = alert("Username is your name and\npassword is your name followed by @123!");
() => {
  let user, pass;
  user = document.getElementById("username").value;
  pass = document.getElementById("password").value;
  password = user + "@123";
  if(user == "" || password == ""){
   alert("Both the fields are requried!");
   return;
  }
  if(!(isNaN(user))){
   alert("Username can't contain any numbers or special characters!");
   return;
  }
  if(pass==password){
   document.write("<center><h1>Successfully logged in, " + user);
   document.write("</h1><br><br><a href='../index.html'>Logout</a></center>");
  }
  else{
   alert("Password not matching as per the instructions.\nPlease re-enter!");
    return;
  }
}
