
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC-6zbtQ5ct7TBdzUVXifz7XG5ezw3yzl0",
      authDomain: "mom-and-jonah.firebaseapp.com",
      databaseURL: "https://mom-and-jonah-default-rtdb.firebaseio.com",
      projectId: "mom-and-jonah",
      storageBucket: "mom-and-jonah.appspot.com",
      messagingSenderId: "1043198047623",
      appId: "1:1043198047623:web:201ed49902f5291f724f22",
      measurementId: "G-TB12CCQMBS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({purpose : "adding Room"});
      localStorage.setItem("room_name", room_name);
      window.location = "jittery_page.html"
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Rooom Name -" + Room_names)
        row = "<div class'room_name' id="+Room_names+"onclick='redirectToRomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room-name", name);
  window.location = "jittery_page.html"
}