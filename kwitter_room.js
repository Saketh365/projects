var firebaseConfig = {

apiKey: "AIzaSyBmtR_71DteI_IKejlEcq_UuzKv7-MLXAg",
authDomain: "qwitter-3945e.firebaseapp.com",
databaseURL: "https://qwitter-3945e-default-rtdb.firebaseio.com",
projectId: "qwitter-3945e",
storageBucket: "qwitter-3945e.appspot.com",
messagingSenderId: "815025503310",
appId: "1:815025503310:web:0dd31cc458f527f742971f",
measurementId: "G-X15ER2L34P"};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -" + room_names);
row = "<div class = 'room_name' id = "+room_names+" onclick = 'redirectToRoomName(this.id)'>#" + room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
