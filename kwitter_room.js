const firebaseConfig = {
      apiKey: "AIzaSyCVc6FuBS6yPqWlAWD5BVUPzjN-s7A51K0",
      authDomain: "kwitter-final-fa66d.firebaseapp.com",
      databaseURL: "https://kwitter-final-fa66d-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-fa66d",
      storageBucket: "kwitter-final-fa66d.appspot.com",
      messagingSenderId: "576066030591",
      appId: "1:576066030591:web:6815f69a4ecaddf4cdf5ca"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          })
          

          localStorage.setItem("room_name" , room_name);

          window.location = "Kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirect_to_room_name(this.id)'>#" + Room_names + "</div> <hr>" 
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
