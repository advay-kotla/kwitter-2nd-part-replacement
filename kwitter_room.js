
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDySdGaG7t1N7efoGg60rtfoNiVkQ6ZpYY",
      authDomain: "kwitter-e20c1.firebaseapp.com",
      databaseURL: "https://kwitter-e20c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-e20c1",
      storageBucket: "kwitter-e20c1.appspot.com",
      messagingSenderId: "29824321326",
      appId: "1:29824321326:web:84790ee472a7817f641cbf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome" + user_name + ("!");

  function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
  });

           localStorage.setItem("room_name", room_name);

           window.location = "kwitter_page.html";

  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      console.log("Room Name - " + Room_names);
      row="<div class = 'room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)'># "+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name) {

console.log(name);
localStorage.setItem("room_name ", name);
window.location = "kwitter_page.html";

}

function logout () {
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
    window.location("index.html");

}





