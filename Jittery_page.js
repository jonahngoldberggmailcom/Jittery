//YOUR FIREBASE LINKS
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
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,like:0    });
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
  }