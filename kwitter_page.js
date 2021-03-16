//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
      })
}


function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
       window.location.replace("index.html");
   
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
